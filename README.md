# RobotDog 机器狗商城

面向 `https://www.robotdog.com` 的中文商城效果预览，使用 Astro 静态输出。白色产品目录、黑色技术详情与蓝色交互，支持手机浏览。

源码与后续更新统一保存在 [shan504/robotdog](https://github.com/shan504/robotdog)。[下载完整网站预览压缩包](https://github.com/shan504/robotdog/raw/refs/heads/main/RobotDog-v2-preview.zip)，解压后用桌面浏览器打开其中的 HTML。仓库中的 `src/` 和 `public/` 是可直接修改的网站源码与素材；压缩包用于查看效果。

已制作 26 款机器狗配置、8 款配件、34 个商品详情、6 个应用方案详情、9 篇探索与未来文章，以及关于、隐私、购物车、结算、支付演示与订单结果页面。同一机型的不同配置是独立 SKU，不代表 26 种不同外形。

## 开发与构建

需要 Node.js 22.12+ 和 npm，本环境使用 Node.js 24.19.0。

Windows 用户在 PowerShell 中运行：

```powershell
cd "$env:USERPROFILE\robotdog"
git pull --ff-only
npm ci --cache "$env:LOCALAPPDATA\npm-cache"
npm run dev -- --port 4321
```

启动后在浏览器打开 `http://localhost:4321/`。用户目录缓存可以避开旧 Node.js 安装目录的写入权限错误。`dev`、`build`、`preview` 通过 Node.js 设置环境变量，兼容 Windows PowerShell 与 Linux/macOS，不依赖 Unix shell 的变量赋值语法。

Linux/macOS 或云环境中运行：

```bash
cd /workspace/robotdog
npm ci
npm run dev -- --port 4321
```

生产输出和浏览器验证：

```bash
npm run build
npm run export:preview
npm run preview -- --port 4322
PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm test
```

测试使用系统 `/usr/bin/chromium`，可用 `CHROMIUM_PATH` 指定本机浏览器。`dist/` 是完整静态站点，可部署至阿里云 Nginx 或静态托管服务。构建不要并发执行，以免不同进程覆盖同一输出目录。

## 完整 HTML 预览

```bash
npm run build
npm run export:preview
```

导出 `RobotDog-preview.html` 与 `preview/RobotDog-preview.html`，内嵌页面、图片、样式和交互脚本。下载后可尝试用桌面浏览器打开，不需要联网或安装开发工具。聊天附件面板的 HTML 渲染能力与浏览器打开文件不同；本环境已测试完整 HTML 在断网浏览器文档中的显示与导航。受当前浏览器策略限制，未测试直接 `file://` 打开。

后续更新先修改源码，再构建和导出；发布预览时同步更新 `RobotDog-v2.html` 与 `RobotDog-v2-preview.zip`，然后提交到本仓库的 `main` 分支。

## 内容修改

| 内容 | 文件 |
| --- | --- |
| 商品、价格、参数、配件关系 | `src/data/catalog.ts` |
| 应用场景与推荐机型 | `src/data/solutions.ts` |
| 探索与未来文章 | `src/data/articles.ts` |
| 首页与关于我们 | `src/pages/index.astro`、`src/pages/about/index.astro` |
| 导航、询价、SEO | `src/layouts/Layout.astro` |
| 购物车与演示订单存储 | `src/lib/cart.ts` |
| 全站配色与响应式样式 | `src/styles/global.css` |
| 图片来源与模型许可 | `docs/image-sources.md`、`docs/image-sources.json` |

机器狗图片来自真实厂商开源 3D 模型的渲染，非商品实拍；场景和配件图为生成的展示素材。机器狗品牌归相应权利人所有，本站没有声称官方经销授权。价格、配置、组合与参数为展示样例，发布销售前需确认真实商品资料和素材适用权限。

## 购物与支付

商品卡片可加入购物车，订单页支持勾选、数量调整、移除与金额计算。结算页填写演示联系资料，进入微信或支付宝样式的支付演示，再生成演示结果和下载单据。

没有商户支付接口、有效付款码或真实扣款。购物车、结算草稿和演示订单保存在当前浏览器 localStorage；存储不可用时使用临时内存。隐私页面说明用途并提供清除按钮。询价单在浏览器生成下载，不会向服务器发送。

真实支付必须增加服务端订单、价格校验、商户签名及支付回调，不能仅把商户密钥写入前端。正式部署时还需补充真实销售主体、联系方式与售后资料。

## SEO 与部署

所有公开页面在构建时生成 HTML，包含独立标题、描述、canonical、图片说明和站内链接。站点地图自动收录全部商品、应用方案及文章；购物车、结算、支付页面设置 noindex 并从 sitemap 排除。商品价格为演示内容，因此没有发布可误认为真实报价的 Offer 结构化数据。

域名和阿里云服务器尚未上线，部署步骤与 Nginx 模板见 [deploy/ALIYUN.md](deploy/ALIYUN.md)。静态展示可直接部署；实际收款需要后端与真实商户渠道。
