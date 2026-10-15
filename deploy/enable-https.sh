#!/usr/bin/env bash
set -Eeuo pipefail

DOMAIN="${1:-robotcar.icu}"
if [[ ! "$DOMAIN" =~ ^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$ || "$DOMAIN" == *..* || "$DOMAIN" == *.example || "$DOMAIN" == www.* ]]; then
  echo "请传入不带协议的主域名，例如：sudo bash robotcar-https.sh robotcar.icu" >&2
  exit 1
fi
if [[ "$EUID" -ne 0 ]]; then
  echo "请运行：sudo bash robotcar-https.sh $DOMAIN" >&2
  exit 1
fi
for command in curl nginx certbot cmp systemctl; do
  if ! command -v "$command" >/dev/null; then
    echo "缺少 $command。先安装：sudo apt-get install -y nginx curl ca-certificates certbot" >&2
    exit 1
  fi
done

SITE_DIR="/var/www/robotcar"
CONF="/etc/nginx/sites-available/robotcar"
ENABLED="/etc/nginx/sites-enabled/robotcar"
REPOSITORY="https://raw.githubusercontent.com/shan504/robotdog/main"
MARKER="# RobotCar managed site: $DOMAIN"
if [[ ! -f "$CONF" ]] || ! grep -Fxq "$MARKER" "$CONF" || [[ "$(readlink -f "$ENABLED")" != "$CONF" ]]; then
  echo "尚未安装此域名的 RobotCar 站点。请先成功运行 ubuntu-deploy.sh $DOMAIN。" >&2
  exit 1
fi
if [[ ! -s "$SITE_DIR/current/index.html" ]]; then
  echo "未找到已部署的 RobotCar 首页。" >&2
  exit 1
fi

nginx -t
workdir="$(mktemp -d)"
changed=0
phase="检查 HTTP 站点"
trap 'rm -rf -- "$workdir"' EXIT
rollback() {
  local status="$1" line="$2"
  trap - ERR
  set +e
  printf 'HTTPS 配置失败：%s（行 %s，退出码 %s）。\n' "$phase" "$line" "$status" >&2
  if [[ "$changed" -eq 1 ]]; then
    install -m 644 "$workdir/previous.conf" "$CONF"
    if nginx -t; then systemctl reload nginx; fi
    echo "已恢复本次修改前的 Nginx 配置。" >&2
  fi
  echo "证书申请需要两个域名都解析到此服务器，且公网 80/443 端口已放行。" >&2
  exit "$status"
}
trap 'rollback "$?" "$LINENO"' ERR

local_resolve=(--noproxy "$DOMAIN,www.$DOMAIN" --resolve "$DOMAIN:80:127.0.0.1" --resolve "$DOMAIN:443:127.0.0.1" --resolve "www.$DOMAIN:80:127.0.0.1" --resolve "www.$DOMAIN:443:127.0.0.1")
for host in "$DOMAIN" "www.$DOMAIN"; do
  curl --fail --silent --show-error --location --connect-timeout 3 --max-time 15 \
    "${local_resolve[@]}" "http://$host/" -o "$workdir/http-home.html"
  cmp "$SITE_DIR/current/index.html" "$workdir/http-home.html"
done

phase="准备 HTTPS 配置模板"
curl --fail --location --show-error --retry 3 --connect-timeout 15 --max-time 120 \
  "$REPOSITORY/deploy/nginx-https.conf" -o "$workdir/https.conf"
sed -i "s/__ROBOTCAR_DOMAIN__/$DOMAIN/g" "$workdir/https.conf"
grep -Fxq "$MARKER" "$workdir/https.conf"
cp -p "$CONF" "$workdir/previous.conf"

phase="申请或复用双域名证书"
echo "按证书工具提示填写邮箱并阅读、确认服务条款。"
certbot certonly --webroot --webroot-path "$SITE_DIR/current" --cert-name "$DOMAIN" \
  -d "$DOMAIN" -d "www.$DOMAIN" --keep-until-expiring \
  --deploy-hook 'nginx -t && systemctl reload nginx'
test -s "/etc/letsencrypt/live/$DOMAIN/fullchain.pem"
test -s "/etc/letsencrypt/live/$DOMAIN/privkey.pem"

phase="安装并重载 HTTPS 配置"
backup="$CONF.before-https-$(date -u +%Y%m%dT%H%M%SZ)-$$"
cp -p "$CONF" "$backup"
changed=1
install -m 644 "$workdir/https.conf" "$CONF"
nginx -t
systemctl reload nginx

phase="验证 HTTPS 和域名跳转"
verified=0
for attempt in {1..10}; do
  all_ok=1
  for url in "http://$DOMAIN/" "http://www.$DOMAIN/" "https://$DOMAIN/" "https://www.$DOMAIN/"; do
    if ! curl --fail --silent --show-error --location --connect-timeout 3 --max-time 15 \
      "${local_resolve[@]}" --write-out '%{http_code} %{url_effective}' "$url" \
      -o "$workdir/https-home.html" > "$workdir/status.txt" 2> "$workdir/curl-error.txt"; then
      all_ok=0
      break
    fi
    if [[ "$(cat "$workdir/status.txt")" != "200 https://$DOMAIN/" ]] || ! cmp -s "$SITE_DIR/current/index.html" "$workdir/https-home.html"; then
      all_ok=0
      break
    fi
  done
  if [[ "$all_ok" -eq 1 ]]; then verified=1; break; fi
  if [[ "$attempt" -lt 10 ]]; then sleep 1; fi
done
if [[ "$verified" -ne 1 ]]; then
  cat "$workdir/status.txt" "$workdir/curl-error.txt" >&2
  false
fi
trap - ERR

if systemctl list-unit-files certbot.timer --no-legend | grep -q '^certbot.timer'; then
  systemctl enable --now certbot.timer
fi
echo "HTTPS 已启用，本机证书验证和四个地址检查通过。"
echo "正式地址：https://$DOMAIN/"
echo "HTTP 和 www 地址会自动跳转到此地址，保留原页面路径与查询参数。"
echo "原配置备份：$backup"
echo "Certbot 已保存续期方式与 Nginx 重载钩子；可运行 sudo certbot renew --dry-run 检查续期。"
echo "公网可达性仍需从服务器以外访问确认。"
