# Zora-Xi

我的个人主页，目前部署在 GitHub Pages：<https://xi1003-art.github.io/>。

计划迁移到 `Zora-Xi.github.io`；账号及仓库迁移尚未完成。

## 技术栈

- **React 18** + **TypeScript**
- **Vite** 构建
- **Tailwind CSS**（通过 CDN 引入）
- **Framer Motion** 做动效

## 本地运行

```bash
npm install
npm run dev
```

打开 <http://localhost:5173> 预览。

## 作品集

Projects 在同一区域展示四个项目。点击卡片后，详情按原 PDF 顺序纵向展示全部页面，支持滚轮、触摸滑动和键盘操作；关闭详情会恢复列表的滚动位置。

- 项目信息：`data/portfolioProjects.ts`
- 页面清单：`data/projectPages.json`
- 原始 PDF 和逐页图片：`public/projects/`
- 更新 PDF 后，安装 Python 依赖 `pymupdf`，运行 `python scripts/render_portfolios.py` 重新生成图片及清单。

## 构建

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览生产构建
```

## 部署

push 到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。

首次部署前需要在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 目录结构

```
.
├── App.tsx                 # 应用入口
├── index.tsx               # ReactDOM mount
├── index.html              # HTML 模板（含 Tailwind CDN、字体）
├── components/             # 通用组件
├── sections/               # 页面分区（Hero / Profile / VinylProjects / Contact）
├── data/                   # 静态数据
└── .github/workflows/      # CI/CD
```
