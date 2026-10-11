#!/usr/bin/env bash
set -Eeuo pipefail

DOMAIN="robotdogcxy.xyz"
REPOSITORY="https://raw.githubusercontent.com/shan504/robotdog/main"
SITE_DIR="/var/www/robotdogcxy"
CONF="/etc/nginx/sites-available/robotdogcxy"
ENABLED="/etc/nginx/sites-enabled/robotdogcxy"
MARKER="# RobotDog managed site: robotdogcxy.xyz"

if [[ "$EUID" -ne 0 ]]; then
  echo "请运行：sudo bash robotdog-deploy.sh" >&2
  exit 1
fi
for command in curl nginx tar sha256sum systemctl; do
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
trap 'rm -rf -- "$workdir"' EXIT
rollback() {
  local status=$?
  trap - ERR
  set +e
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
trap rollback ERR

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
conflicts="$(grep -RlE 'server_name[^;]*[[:space:]]robotdogcxy\.xyz([[:space:];]|$)' /etc/nginx/sites-enabled/ /etc/nginx/conf.d/ 2>/dev/null | grep -vFx "$ENABLED" || true)"
if [[ -n "$conflicts" ]]; then
  echo "此域名已有其他 Nginx 站点配置，未替换：$conflicts" >&2
  exit 1
fi

fetch() { curl --fail --location --show-error --retry 3 --connect-timeout 15 --max-time 300 "$1" -o "$2"; }
fetch "$REPOSITORY/deploy/robotdog-site.tar.gz" "$workdir/robotdog-site.tar.gz"
fetch "$REPOSITORY/deploy/robotdog-site.tar.gz.sha256" "$workdir/robotdog-site.tar.gz.sha256"
(cd "$workdir" && sha256sum -c robotdog-site.tar.gz.sha256)
fetch "$REPOSITORY/deploy/nginx-http.conf" "$workdir/nginx-http.conf"
digest="$(sha256sum "$workdir/robotdog-site.tar.gz" | cut -c1-12)"
release="$SITE_DIR/releases/$(date -u +%Y%m%dT%H%M%SZ)-$digest"
install -d -m 755 "$SITE_DIR" "$SITE_DIR/releases" "$release"
tar -xzf "$workdir/robotdog-site.tar.gz" -C "$release" --no-same-owner
test -s "$release/index.html"
test -s "$release/products/as2-pro/index.html"
grep -q 'https://robotdogcxy.xyz/' "$release/sitemap.xml"
find "$release" -type d -exec chmod 755 {} +
find "$release" -type f -exec chmod 644 {} +

# Keep an existing managed configuration, including HTTPS settings added by Certbot.
if [[ ! -e "$CONF" ]]; then
  install -m 644 "$workdir/nginx-http.conf" "$CONF"
  created_conf=1
fi
if [[ ! -L "$ENABLED" ]]; then
  ln -s "$CONF" "$ENABLED"
  created_enabled=1
fi
nginx -t
previous="$(readlink "$SITE_DIR/current" || true)"
ln -s "$release" "$SITE_DIR/.current-$$"
mv -Tf "$SITE_DIR/.current-$$" "$SITE_DIR/current"
switched=1
systemctl enable nginx
if systemctl is-active --quiet nginx; then systemctl reload nginx; else systemctl start nginx; fi
curl --fail --silent --show-error --location --connect-timeout 5 --max-time 20 \
  --noproxy "$DOMAIN" --resolve "$DOMAIN:80:127.0.0.1" --resolve "$DOMAIN:443:127.0.0.1" \
  "http://$DOMAIN/" -o "$workdir/home.html"
grep -q '不止行走' "$workdir/home.html"
trap - ERR
echo "部署成功，Nginx 本机首页检查通过。"
echo "当前版本：$release"
echo "浏览器访问：http://$DOMAIN/"
echo "公网访问仍取决于域名解析及阿里云防火墙 80/443 端口。"
