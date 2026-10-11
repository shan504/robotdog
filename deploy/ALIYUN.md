# Ubuntu / 阿里云部署

目标域名：`robotdogcxy.xyz`。用户提供的服务器为 Ubuntu 22.04、2 核 CPU、1 GB 内存，公网 IPv4 为 `47.85.33.165`。网站是 Astro 静态输出，服务器运行 Nginx，无需安装 Node.js 或数据库。

## 首次部署

在阿里云 Workbench 的 Ubuntu 终端执行，每条命令成功后再执行下一条：

```bash
sudo apt-get update
sudo apt-get install -y nginx curl ca-certificates
curl -fL https://raw.githubusercontent.com/shan504/robotdog/main/deploy/ubuntu-deploy.sh -o robotdog-deploy.sh
sudo bash robotdog-deploy.sh
```

脚本从本仓库下载预构建网站包和 SHA-256 校验文件，通过校验后安装到 `/var/www/robotdogcxy/releases/`，再切换 `current` 链接。Nginx 检查通过后才重载，并请求本机首页确认内容。部署失败会恢复本次修改的入口；旧版本目录保留。首次部署创建 `/etc/nginx/sites-available/robotdogcxy`，后续更新保留 Certbot 增加的 HTTPS 配置。

脚本不会删除其他站点或覆盖非本项目配置。若该域名已在其他 Nginx 配置中使用，脚本会显示冲突文件并停止；先检查现有配置，再决定如何调整。不要直接删除其他网站配置。

阿里云轻量服务器防火墙需要放行 TCP 80 和 443。域名解析的 `@` A 记录应指向 `47.85.33.165`。若 Ubuntu 已启用 UFW，再运行 `sudo ufw allow 'Nginx Full'`；不要为部署启用或重置 UFW。

部署成功后用浏览器访问 `http://robotdogcxy.xyz/`。本机请求通过不能证明公网 DNS 与防火墙已生效，仍需外部浏览器确认。

## HTTPS

确认域名的 HTTP 网站可从公网访问后，在同一个 Ubuntu 终端执行：

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d robotdogcxy.xyz --redirect
sudo certbot renew --dry-run
```

按 Certbot 提示填写联系邮箱并阅读、确认服务条款。证书成功后访问 `https://robotdogcxy.xyz/`，HTTP 会重定向到 HTTPS。`www` 不是本次部署要求，不需要额外解析或证书。

页面 canonical、结构化数据、分享图片 URL、robots 与站点地图统一使用 `https://robotdogcxy.xyz`；因此首次 HTTP 验证后应完成 HTTPS 步骤。

## 后续更新

在开发电脑或 Codex 环境更新源码后运行：

```bash
npm ci
npm run package:deploy
npm run export:preview
```

`package:deploy` 构建网站并生成：

- `deploy/robotdog-site.tar.gz`：完整生产静态网站。
- `deploy/robotdog-site.tar.gz.sha256`：校验文件。
- `deploy/build-info.json`：域名、页面数和构建信息。

将源码与以上三个文件一起提交到本仓库 `main`。Ubuntu 上重新下载并执行 `ubuntu-deploy.sh` 即可更新。不要在 1 GB 服务器上依赖开发服务器对外提供网站。

## 检查与回滚

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
curl -I http://robotdogcxy.xyz/
curl -I https://robotdogcxy.xyz/sitemap.xml
readlink /var/www/robotdogcxy/current
ls -1 /var/www/robotdogcxy/releases/
```

手动回滚时，先从 releases 中确认要恢复的版本目录；创建新的临时链接指向它，再用 `sudo mv -Tf` 切换 current，检查 Nginx 后重载。不要删除全部 releases，以便保留恢复路径。

该站点目前是公开展示与购物流程演示：价格参数是展示样例，支付不会扣款。真实收款需要服务端订单、商户签名与回调。发布销售前补全实际销售资料及联系方式。

本仓库的构建、浏览器与本地 Nginx 检查不等同于已登录阿里云或完成服务器部署；服务器执行结果和公网 HTTPS 需要在实际服务器确认。
