#!/usr/bin/env bash
set -Eeuo pipefail

DOMAIN="${1:-}"
if [[ ! "$DOMAIN" =~ ^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$ || "$DOMAIN" == *..* || "$DOMAIN" == *.example ]]; then
  echo "请传入已购买的新域名：sudo bash robotcar-deploy.sh your-real-domain.com" >&2
  exit 1
fi
REPOSITORY="https://raw.githubusercontent.com/shan504/robotdog/main"
SITE_DIR="/var/www/robotcar"
CONF="/etc/nginx/sites-available/robotcar"
ENABLED="/etc/nginx/sites-enabled/robotcar"
MARKER="# RobotCar managed site: $DOMAIN"

if [[ "$EUID" -ne 0 ]]; then
  echo "请运行：sudo bash robotcar-deploy.sh" >&2
  exit 1
fi
for command in curl nginx tar sha256sum cmp systemctl; do
  if ! command -v "$command" >/dev/null; then
    echo "缺少 $command。先运行：sudo apt-get install -y nginx curl ca-certificates" >&2
    exit 1
  fi
done

workdir="$(mktemp -d)"
previous=""
switched=0
created_conf=0
created_enabled=0
phase="检查已有 Nginx 配置"
trap 'rm -rf -- "$workdir"' EXIT
rollback() {
  local status="$1" line="$2" failed_command="$3"
  trap - ERR
  set +e
  printf '部署失败阶段：%s\n失败命令（行 %s，退出码 %s）：%s\n' "$phase" "$line" "$status" "$failed_command" >&2
  if [[ "$switched" -eq 1 ]]; then
    if [[ -n "$previous" ]]; then
      ln -s "$previous" "$SITE_DIR/.rollback-$$"
      mv -Tf "$SITE_DIR/.rollback-$$" "$SITE_DIR/current"
    else
      rm -f "$SITE_DIR/current"
    fi
  fi
  [[ "$created_enabled" -eq 0 ]] || rm -f "$ENABLED"
  [[ "$created_conf" -eq 0 ]] || rm -f "$CONF"
  if [[ "$switched" -eq 1 || "$created_enabled" -eq 1 ]]; then
    if nginx -t && systemctl is-active --quiet nginx; then systemctl reload nginx; fi
  fi
  echo "部署失败，已恢复本次修改的站点入口。请提供上面的报错。" >&2
  exit "$status"
}
trap 'rollback "$?" "$LINENO" "$BASH_COMMAND"' ERR

wait_for_home() {
  local attempt curl_status=0
  for attempt in {1..10}; do
    if curl --fail --silent --show-error --location --connect-timeout 2 --max-time 5 \
      --noproxy "$DOMAIN" --resolve "$DOMAIN:80:127.0.0.1" --resolve "$DOMAIN:443:127.0.0.1" \
      --write-out '%{http_code} %{url_effective}\n' "http://$DOMAIN/" \
      -o "$workdir/home.html" > "$workdir/home-status.txt" 2> "$workdir/home-error.txt"; then
      curl_status=0
      if cmp -s "$release/index.html" "$workdir/home.html"; then return 0; fi
    else
      curl_status=$?
    fi
    if [[ "$attempt" -lt 10 ]]; then
      echo "等待 Nginx 返回本次部署的首页（$attempt/10）……"
      sleep 1
    fi
  done
  echo "首页检查失败：等待后仍未返回本次部署的 index.html。" >&2
  printf '最后一次请求（curl 退出码 %s）：' "$curl_status" >&2
  cat "$workdir/home-status.txt" >&2
  if [[ -s "$workdir/home-error.txt" ]]; then cat "$workdir/home-error.txt" >&2; fi
  if [[ -s "$workdir/home.html" ]]; then
    printf '实际页面标题：' >&2
    sed -n 's/.*<title>\([^<]*\)<\/title>.*/\1/p' "$workdir/home.html" | head -c 240 >&2
    printf '\n实际首页 SHA-256：' >&2
    sha256sum "$workdir/home.html" >&2
  fi
  printf '期望首页 SHA-256：' >&2
  sha256sum "$release/index.html" >&2
  return 1
}

nginx -t
if [[ -e "$SITE_DIR/current" && ! -L "$SITE_DIR/current" ]]; then
  echo "$SITE_DIR/current 已存在且不是版本链接；未覆盖已有目录。" >&2
  exit 1
fi
if [[ -f "$CONF" ]] && ! grep -Fq "$MARKER" "$CONF"; then
  echo "$CONF 是已有非本项目配置；未覆盖。请先检查该文件。" >&2
  exit 1
fi
if [[ -e "$ENABLED" || -L "$ENABLED" ]] && [[ "$(readlink -f "$ENABLED")" != "$CONF" ]]; then
  echo "$ENABLED 已指向其他配置，未覆盖。" >&2
  exit 1
fi
domain_pattern="${DOMAIN//./\\.}"
conflicts="$(grep -RlE "server_name[^;]*[[:space:]]$domain_pattern([[:space:];]|$)" /etc/nginx/sites-enabled/ /etc/nginx/conf.d/ 2>/dev/null | grep -vFx "$ENABLED" || true)"
if [[ -n "$conflicts" ]]; then
  echo "此域名已有其他 Nginx 站点配置，未替换：$conflicts" >&2
  exit 1
fi

phase="下载并校验部署包"
fetch() { curl --fail --location --show-error --retry 3 --connect-timeout 15 --max-time 300 "$1" -o "$2"; }
fetch "$REPOSITORY/deploy/robotcar-site.tar.gz" "$workdir/robotcar-site.tar.gz"
fetch "$REPOSITORY/deploy/robotcar-site.tar.gz.sha256" "$workdir/robotcar-site.tar.gz.sha256"
(cd "$workdir" && sha256sum -c robotcar-site.tar.gz.sha256)
fetch "$REPOSITORY/deploy/nginx-http.conf" "$workdir/nginx-http.conf"
sed -i "s/__ROBOTCAR_DOMAIN__/$DOMAIN/g" "$workdir/nginx-http.conf"
digest="$(sha256sum "$workdir/robotcar-site.tar.gz" | cut -c1-12)"
release="$SITE_DIR/releases/$(date -u +%Y%m%dT%H%M%SZ)-$digest"
phase="解压并检查网站文件"
install -d -m 755 "$SITE_DIR" "$SITE_DIR/releases" "$release"
tar -xzf "$workdir/robotcar-site.tar.gz" -C "$release" --no-same-owner
test -s "$release/index.html"
test -s "$release/products/rover-pro/index.html"
grep -Fq "https://$DOMAIN/" "$release/sitemap.xml" || { echo "部署包域名不符。先用 PUBLIC_SITE_URL=https://$DOMAIN 重新构建并推送部署包。" >&2; false; }
find "$release" -type d -exec chmod 755 {} +
find "$release" -type f -exec chmod 644 {} +

# Keep an existing managed configuration, including HTTPS settings added by Certbot.
phase="安装并检查站点配置"
if [[ ! -e "$CONF" ]]; then
  install -m 644 "$workdir/nginx-http.conf" "$CONF"
  created_conf=1
fi
if [[ ! -L "$ENABLED" ]]; then
  ln -s "$CONF" "$ENABLED"
  created_enabled=1
fi
nginx -t
phase="切换网站版本"
previous="$(readlink "$SITE_DIR/current" || true)"
ln -s "$release" "$SITE_DIR/.current-$$"
mv -Tf "$SITE_DIR/.current-$$" "$SITE_DIR/current"
switched=1
phase="启用并重载 Nginx"
systemctl enable nginx
if systemctl is-active --quiet nginx; then systemctl reload nginx; else systemctl start nginx; fi
phase="等待并验证 Nginx 首页"
wait_for_home
trap - ERR
echo "部署成功，Nginx 本机首页检查通过。"
echo "当前版本：$release"
echo "浏览器访问：http://$DOMAIN/"
echo "公网访问仍取决于域名解析及阿里云防火墙 80/443 端口。"
