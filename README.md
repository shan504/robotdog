# RobotCar 玩具机器人车商城

RobotCar 是玩具机器人车、遥控竞速与编程教育套装的中文网站。保留原有白色目录、深色技术详情、蓝色交互与手机排版，产品图片与场景已全部换为车类素材。

源码和更新继续保存在 [shan504/robotdog](https://github.com/shan504/robotdog)。仓库名称沿用既有地址，网站品牌为 RobotCar。

## 当前内容

- 9 个车类系列、26 款概念套装和 8 款配件，均有名称、展示价格、配置、参数与包装清单。
- 6 个玩乐与教育场景、9 篇车类探索文章和关于我们。
- 产品分类、搜索、详情跳转、购物车、数量与金额、结算、支付演示和结果下载。
- 图片采用原创三维玩具车/配件渲染和生成式场景，不再包含原有机器狗及厂家产品图片。

产品和套装为效果展示，价格与参数为样例，实际商品、规格、适龄标识、库存和报价需确认。当前订单只保存在访问者浏览器，支付不扣款，没有服务器订单数据库或商户收款接口。

## 本地运行

使用 Node.js 24 LTS。在已克隆的项目目录运行：

```bash
npm ci
npm run dev -- --port 4321
```

在你自己的电脑浏览器打开 `http://localhost:4321/`。

Windows PowerShell 如出现 npm 缓存权限错误，使用用户目录缓存：

```powershell
npm ci --cache "$env:LOCALAPPDATA\npm-cache"
npm run dev -- --port 4321
```

## 完整离线预览

[下载完整网站预览](https://github.com/shan504/robotdog/raw/refs/heads/main/RobotCar-preview.zip)，解压后用桌面浏览器打开 `RobotCar-preview.html`。这是内嵌页面、图片、样式和购物交互脚本的完整 HTML，文件较大。也可用开发服务器查看。

重新生成预览：

```bash
npm run build
npm run export:preview
```

输出根目录和 `preview/` 下的 `RobotCar-preview.html`。源文件 `src/` 和图片 `public/` 是后续修改入口。

## 新域名与 SEO

新域名尚未指定。默认 `https://robotcar.example` 是保留的预览占位地址；未配置正式域名时页面为 noindex，robots 禁止抓取。

复制 `.env.example` 为 `.env`，将 `PUBLIC_SITE_URL` 改成实际购买的 HTTPS 域名，然后重新构建：

```bash
npm run package:deploy
npm run export:preview
```

Windows 可用 `Copy-Item .env.example .env`，Linux/macOS 可用 `cp .env.example .env`。`.env` 不提交；`PUBLIC_SITE_URL` 也可通过构建环境设置。

此配置统一控制 canonical、分享图片、结构化数据、robots、sitemap 和 Astro 站点 origin。新域名配置后公开内容允许索引，购物交易页持续 noindex。

## Ubuntu 部署

`npm run package:deploy` 输出 `deploy/robotcar-site.tar.gz`、校验文件和构建信息。新安装使用 `/var/www/robotcar/current`，脚本检查部署包域名与指定域名一致；当前占位域名包用于预览，需用真实新域名重新构建后部署。

详细命令见 [deploy/ALIYUN.md](deploy/ALIYUN.md)。仓库推送不等同于已经更新用户的服务器。

## 验证与素材

浏览器回归：`npm test`。记录见 [docs/VERIFICATION.md](docs/VERIFICATION.md)。素材说明见 [docs/image-sources.md](docs/image-sources.md)，三维模型场景源文件位于 `design/toy-car-studio.html`。
