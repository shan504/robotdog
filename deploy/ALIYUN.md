# 阿里云部署参考

网站目前是效果预览，还未购买服务器、修改 DNS 或部署到公网。

## 配置建议

初期可选阿里云 ECS 或轻量应用服务器：2 核 CPU、2 GB 内存、Ubuntu 24.04、40 GB 磁盘。静态网站无需数据库或常驻 Node.js 服务；访问量增长时可增加带宽并接入 CDN。规格和费用以阿里云控制台当前选项为准。

若选中国大陆节点，域名需要完成相应的 ICP 备案后对外提供网站服务；备案主体和页脚展示信息需使用实际资料。其他地域的要求和访问表现应结合目标用户选择。

## 上传构建结果

在开发电脑或本云环境构建：

```bash
npm ci
npm run build
tar -czf robotdog-site.tar.gz -C dist .
```

把 `robotdog-site.tar.gz` 与 `deploy/nginx-http.conf` 上传到服务器。以下步骤在你购买并登录的 Ubuntu 服务器执行（不是当前预览容器）：

```bash
sudo apt-get update
sudo apt-get install -y nginx
sudo mkdir -p /var/www/robotdog
sudo tar -xzf robotdog-site.tar.gz -C /var/www/robotdog
sudo cp nginx-http.conf /etc/nginx/sites-available/robotdog
sudo ln -s /etc/nginx/sites-available/robotdog /etc/nginx/sites-enabled/robotdog
sudo nginx -t
sudo systemctl reload nginx
```

如果站点配置或目录已经存在，先检查原有内容；不要覆盖其他站点或用户文件。后续更新时，先将新版解压到新目录并检查，再切换部署目录，避免删除服务器上的其他文件。

## 域名与 HTTPS

1. 在域名 DNS 控制台将 `www` 与 `@` 的 A 记录指向服务器公网 IPv4。确认你拥有 `robotdog.com` 的管理权限。
2. 在安全组开放网站 80/443；SSH 22 仅允许你使用的管理 IP。
3. 先通过 HTTP 验证站点、产品详情、文章与 404。
4. 申请并安装覆盖 `robotdog.com` 和 `www.robotdog.com` 的有效 TLS 证书。把证书链和私钥分别放到 `nginx-https.conf` 指定路径；私钥只保存在服务器，限制读取权限。
5. 使用 HTTPS 配置替换该站点的 HTTP 配置，执行 `sudo nginx -t`，成功后重载 Nginx。
6. 确认 HTTP 和裸域名均 301 跳转到 `https://www.robotdog.com`，内容页、图片与站点地图正常。

## 上线检查

- 确认 34 个商品 SKU 的真实售价、规格、库存与配置关系，以及厂商模型渲染和生成图片的销售展示适用性；补全销售主体、联系方式、售后与备案信息。
- 接入真实询价服务，并同步更新隐私说明。
- 购物与支付当前是浏览器演示。实际收款需新增服务端订单、价格校验、商户签名、支付回调与订单持久存储，并使用正式微信 / 支付宝商户渠道；静态页面不能自行完成这些功能。
- 验证移动页面、询价实际送达、产品和文章内容、HTTPS、重定向、404 和 sitemap。
- 在百度与 Google 的站长平台验证域名，提交 `https://www.robotdog.com/sitemap.xml`。

`nginx-http.conf` / `nginx-https.conf` 为部署模板。本环境验证了静态构建和浏览器功能，未连接真实阿里云服务器验证部署。
