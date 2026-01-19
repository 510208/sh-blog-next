<div align="right">
<a href="https://github.com/510208/sh-blog-next/blob/main/docs/README_EN.md" target="_blank"><img src="https://img.shields.io/badge/English-%23000000.svg?&style=for-the-badge&logo=googletranslate&logoColor=white" alt=instagram style="margin-bottom: 5px; margin-left: 0px;" /></a>
</div>

<center><img src="/docs/assets/key_visual.png" alt="Screenshot" width="full" /></center>

# SamHacker Blog Next

<div align="center" style="letter-spacing: 2px;">一個基於 Astro 與 TailwindCSS 所打造的個人技術部落格主題</div>

<br />

<div align="center" style="display: flex; gap: 10px; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
  <img src="https://deploy-badge.vercel.app/vercel/sh-blog-next?style=for-the-badge&name=Vercel" alt="Vercel Deploy" />
  <a href="https://portal.astro.build/themes/shblog-next/"><img src="https://img.shields.io/badge/astro-17191e.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://github.com/510208/sh-blog-next/blob/main/docs/LICENSE"><img src="https://img.shields.io/github/license/510208/sh-blog-next.svg?style=for-the-badge&logo=github&logoColor=white" alt="License" /></a>
  <a href="https://github.com/510208/sh-blog-next"><img src="https://img.shields.io/github/stars/510208/sh-blog-next?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Stars" /></a>
  <a href="https://github.com/510208/sh-blog-next/issues"><img src="https://img.shields.io/github/issues/510208/sh-blog-next?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Issues" /></a>
  <a href="https://sh-blog-next.vercel.app/"><img src="https://img.shields.io/badge/Demo-223222.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="GitHub Issues" /></a>
</div>

這是 SamHacker 的個人技術部落格，使用 [Astro](https://astro.build/) 與 [TailwindCSS](https://tailwindcss.com/) 所打造，搭配 [React](https://reactjs.org/)，結合了 MDX 作為文章內容的撰寫方式。

> [!IMPORTANT]
> This is the Chinese (Traditional) version of the documentation. For the English version, please refer to [README_EN.md](/docs/README_EN.md).

## 🚀 部署

將專案原始碼下載後，可以透過以下指令在本地端啟動開發伺服器：

```bash
pnpm install
pnpm dev
```

若要進行生產環境的建置，可以使用以下指令：

```bash
pnpm build
pnpm preview
```

詳細部署資訊請參考 [DEPLOYMENT.md](DEPLOYMENT.md)。

## ✨ 功能特色

- [x] 基於 Astro v5 打造
- [x] 支援 Markdown 與 MDX 內容撰寫
- [x] 完全面向深色主題設計
- [x] 響應式圖片處理
- [x] 整合 shadcn/ui 元件庫
- [x] 支援 RSS 與 Sitemap 生成
- [x] 內建留言版功能（Giscus）
- [x] 支援全文搜尋功能（Pagefind）
- [x] 文章目錄
- [x] 基於 KaTeX 的數學公式渲染
- [x] 使用 Expressive Code Block 強化程式碼區塊顯示
- [x] 基於 Pagefind 的即時搜尋建議
- [x] 預設支援 Google Tag Manager
- [x] 特色 404 頁面

歡迎有興趣的開發者一同參與此專案，若有任何建議或問題，請隨時提出 Issue 或 Pull Request。

## 👀 版本需求

- Node.js v22 以上
- pnpm v9 以上

## 🤝 協助開發

若您有興趣協助開發此專案，請參考 [CONTRIBUTING.md](/docs/CONTRIBUTING.md)。

## 鳴謝

特別感謝以下專案與資源的支持：

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [React](https://react.dev/)
- [MDX](https://mdxjs.com/)
- [Vercel](https://vercel.com/) 提供的雲端部署服務（用於部署Demo站）
- [Stable Diffusion A1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) 提供的圖片生成技術與 [wainsfwillustrious模型](https://civitai.com/models/827184/wai-illustrious-sdxl)（用於生成部落格關鍵視覺圖）

此外，也要感謝以下網站提供的設計啟發與靈感：

- [毛哥EM資訊密技](https://emtech.cc/)
- [SamHacker](https://510208.github.io/)
- [Fuwari](https://fuwari.vercel.app/)主題
- [Zhenyuan Dev](https://zhenyuan.dev/)
  _與開放原始碼界的各位_

另外感謝所有開源社群的貢獻，讓這個專案得以順利完成！

---

<div align="center">
  <img height="60" src="https://api.moedog.org/count/@sh-blog-next?theme=asoul" alt="訪客人數統計" />
  <br />
  <small>由 SamHacker 製作 ｜ 透過 ❤️ 建立</small>
</div>
