# RobotCar Ubuntu / 阿里云部署

这是 Astro 静态网站，Nginx 提供页面，服务器不需要 Node.js。新域名尚未指定，先在项目 `.env` 中设置实际购买的 `PUBLIC_SITE_URL=https://你的新域名`，然后运行 `npm run package:deploy` 并提交新部署包、校验文件和 build-info.json。

## 服务器安装

在 Ubuntu 终端逐条执行：

```bash
sudo apt-get update
sudo apt-get install -y nginx curl ca-certificates
curl -fL https://raw.githubusercontent.com/shan504/robotdog/main/deploy/ubuntu-deploy.sh -o /tmp/robotcar-deploy.sh
sudo bash /tmp/robotcar-deploy.sh 你的实际新域名
```

将最后一条中的域名换成不带协议、路径的实际域名。脚本拒绝 `.example` 占位域名，并核对部署包的站点地图包含该 HTTPS 域名。当前占位域名预览包不能直接作为新域名生产部署。

脚本校验 SHA-256，部署到 `/var/www/robotcar/releases/` 并切换 `current`。站点配置在 `/etc/nginx/sites-available/robotcar`。Nginx 重载后最多检查首页 10 次，确认与部署文件完全一致。失败会显示原因并回滚本次入口修改，后续更新保留已添加的 HTTPS 配置。

部署脚本使用新的 RobotCar 路径，不删除其他网站。若同一域名存在其他站点配置，脚本显示冲突并停止。

## 域名和防火墙

域名的 `@` A 记录应指向服务器公网 IP。若继续使用原服务器，用户提供的 IP 为 `47.85.33.165`。新域名须能从公共 DNS 查询到正确地址。阿里云轻量服务器防火墙放行 TCP 80 和 443。若 UFW 已启用，可运行 `sudo ufw allow 'Nginx Full'`。

## HTTPS

HTTP 网站能在公网打开后，在同一个 Ubuntu 终端逐条执行：

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d 你的实际新域名 --redirect
sudo certbot renew --dry-run
```

按提示填写邮箱并阅读、确认条款。Certbot 安装证书、配置 HTTPS，并将 HTTP 重定向到 HTTPS。不要在 DNS 尚未生效或域名被暂停解析时申请证书。

`nginx-http.conf` 和 `nginx-https.conf` 使用 `__ROBOTCAR_DOMAIN__` 占位符。部署脚本会替换 HTTP 模板；手工使用 HTTPS 模板时必须替换域名并先取得对应证书。

## 更新与检查

更新源码、配置新域名后，运行 `npm run package:deploy`，提交所有部署产物，再在服务器重新下载执行安装脚本。

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
readlink /var/www/robotcar/current
ls -1 /var/www/robotcar/releases/
```

旧版本目录保留，回滚前确认目标版本与配置。购物、订单和支付仍为浏览器演示，正式收款需要服务端和商户渠道。
