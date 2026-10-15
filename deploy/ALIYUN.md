# RobotCar Ubuntu / 阿里云部署

正式主域名为 `https://robotcar.icu`，用户确认继续使用 Ubuntu 服务器 `47.85.33.165`。这是 Astro 静态网站，Nginx 提供页面，服务器不需要 Node.js。仓库内已构建此域名的生产包。

## 先检查 DNS 与防火墙

在新域名的 DNS 控制台保留以下解析：

| 主机记录 | 类型 | 记录值 |
| --- | --- | --- |
| `@` | A | `47.85.33.165` |
| `www` | CNAME | `robotcar.icu` |

`www` 也可使用 A 记录指向同一 IP，二者择一；不要同时保留冲突记录。若服务器未配置可用 IPv6，不要添加指向其他服务器的 AAAA 记录。阿里云轻量服务器防火墙放行 TCP 80 和 443。若 UFW 已启用，运行 `sudo ufw allow 'Nginx Full'`；无需为此启用 UFW 或更改 SSH 规则。

在 Ubuntu 终端检查：

```bash
getent ahostsv4 robotcar.icu
getent ahostsv4 www.robotcar.icu
```

两者应包含 `47.85.33.165`。公共 DNS 必须能查到这两个地址，证书机构才可以完成验证。没有返回记录时，先修复 DNS 或域名注册状态；不要反复申请证书。

## 服务器安装

在 Ubuntu 终端逐条执行：

```bash
sudo apt-get update
sudo apt-get install -y nginx curl ca-certificates certbot
curl -fL https://raw.githubusercontent.com/shan504/robotdog/main/deploy/ubuntu-deploy.sh -o /tmp/robotcar-deploy.sh
sudo bash /tmp/robotcar-deploy.sh robotcar.icu
```

脚本拒绝 `.example` 占位域名，并核对部署包的站点地图包含该 HTTPS 域名。初始 HTTP 配置同时接收 `robotcar.icu` 和 `www.robotcar.icu`，供访问及证书验证。

脚本校验 SHA-256，部署到 `/var/www/robotcar/releases/` 并切换 `current`。站点配置在 `/etc/nginx/sites-available/robotcar`。Nginx 重载后最多检查首页 10 次，确认与部署文件完全一致。失败会显示原因并回滚本次入口修改，后续更新保留已添加的 HTTPS 配置。

部署脚本使用新的 RobotCar 路径，不删除其他网站。若同一域名存在其他站点配置，脚本显示冲突并停止。

## HTTPS

HTTP 部署成功后，在同一个 Ubuntu 终端逐条执行：

```bash
curl -fL https://raw.githubusercontent.com/shan504/robotdog/main/deploy/enable-https.sh -o /tmp/robotcar-https.sh
sudo bash /tmp/robotcar-https.sh robotcar.icu
```

按提示填写真实邮箱并阅读、确认服务条款。脚本检查两个 HTTP 地址是否提供本项目首页，通过 Certbot webroot 申请或复用同时包含 `robotcar.icu` 与 `www.robotcar.icu` 的证书，备份原配置，再启用 HTTPS。配置或本机验证失败会恢复原 Nginx 配置；证书申请失败时不会替换站点配置。

成功后的访问关系：

| 访问地址 | 结果 |
| --- | --- |
| `https://robotcar.icu` | 正常展示网站 |
| `http://robotcar.icu` | 301 跳转到 HTTPS 主域名 |
| `http://www.robotcar.icu` | 301 跳转到 HTTPS 主域名 |
| `https://www.robotcar.icu` | 验证有效证书后 301 跳转到 HTTPS 主域名 |

页面路径和查询参数会保留。此方式使 HTTP、HTTPS 地址都能访问，并统一搜索引擎收录地址。

Certbot 保存稳定的 webroot 路径 `/var/www/robotcar/current` 与部署重载钩子；Ubuntu 的 `certbot.timer` 存在时脚本会启用它。检查自动续期：

```bash
sudo systemctl status certbot.timer --no-pager
sudo certbot renew --dry-run
```

`nginx-http.conf` 和 `nginx-https.conf` 使用 `__ROBOTCAR_DOMAIN__` 占位符，由脚本替换。HTTPS 模板包含两个 TLS 虚拟主机，只能在取得覆盖两者的证书后安装。

## 更新与检查

更新源码、配置新域名后，运行 `npm run package:deploy`，提交所有部署产物，再在服务器重新下载执行安装脚本。

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
readlink /var/www/robotcar/current
ls -1 /var/www/robotcar/releases/
curl -IL http://robotcar.icu/
curl -IL http://www.robotcar.icu/
curl -IL https://www.robotcar.icu/
curl -I https://robotcar.icu/sitemap.xml
```

旧版本目录保留，回滚前确认目标版本与配置。脚本的本机检查不能替代外网访问检查；GitHub 推送不代表服务器已执行命令。购物、订单和支付仍为浏览器演示，正式收款需要服务端和商户渠道。
