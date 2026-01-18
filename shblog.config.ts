import { Newspaper, Handshake, Home, Info, Phone } from "lucide-react";
import type { ShBlogConfig } from "./src/types/shblog.config.d";

//
//    ______ _____  __             __   _  __        _____
//   / __/ // / _ )/ /__  ___ _    \ \ / |/ /____ __/ /\  \
//  _\ \/ _  / _  / / _ \/ _ `/     > >    / -_) \ / __/>  >
// /___/_//_/____/_/\___/\_, /     /_/_/|_/\__/_\_\\__//__/
//                      /___/
//     M a k e   B l o g g i n g   G r e a t   A g a i n
//
//
//   SHBlog Next 是一款由 SamHacker 基於 Astro 框架打造的現代化部落格系統，
//   專為內容創作者設計，提供簡潔且高效的寫作與發布體驗。
//   無論你是技術部落客、生活分享者，還是專業作家，SHBlog Next 都能滿足你的需求，
//   幫助你輕鬆建立個人品牌，與全球讀者分享你的故事與知識。

const config: ShBlogConfig = {
  // 網站名稱
  //   這個名稱會顯示在瀏覽器標籤、網站頁首和搜尋引擎結果中
  title: "SamHacker Blog",

  // 網站描述
  //   這個描述會顯示在網站頁首和搜尋引擎結果中
  description:
    "我是一個熱愛分享技術的部落客，專注於 Minecraft 開服、網站建設、開源軟體等領域。",

  // 網站語言 (使用 IETF 語言標籤)
  //  這個語言設定會影響搜尋引擎優化 (SEO) 和無障礙功能，除非有需要，否則請設定成網站主要的語言即可，不須多做變動
  lang: "zh-tw",

  // 網站圖示 (favicon) 的路徑
  //   這個圖示會顯示在瀏覽器標籤和書籤中，提供的路徑應該是相對於網站根目錄的路徑
  //   如 example.com/favicon.ico 則應該填寫 /favicon.ico
  favicon: "/favicon.png",

  // 頁面設定
  //   這些設定會影響網站各個頁面的標題、副標題和頂部背景圖片
  pages: {
    // 首頁設定
    //   首頁通常是網站的入口頁面，這裡可以設定首頁的標題和頂部背景圖片
    home: {
      title: "正因為曾經淋過雨，\n才會想為他人撐一把傘。", // 網站首頁顯示的文字，不一定是標題，也可以是座右銘、標語或口號等
      heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png", // 首頁頂部背景圖片路徑，建議使用高解析度圖片以確保在大螢幕上顯示良好
      greetings: [
        // 根據不同時間顯示不同問候語的設定
        //   begin: 開始時間（包含），0-24 小時制
        //   finish: 結束時間（不包含），0-24 小時制，如不提供則表示只匹配 begin 時間
        //   text: 問候語內容
        // 🚨 注意，先出現的規則優先級較高
        {
          begin: 0, // 開始時間（包含）
          finish: 6, // 結束時間（不包含）
          text: "深夜好,該休息了喔!", // 問候語內容
        },
        {
          begin: 6,
          finish: 12,
          text: "早安!新的一天開始了!",
        },
        {
          begin: 12,
          finish: 14,
          text: "午安!記得吃午餐喔!",
        },
        {
          begin: 14,
          finish: 18,
          text: "下午好!工作順利嗎?",
        },
        {
          begin: 18,
          finish: 21,
          text: "傍晚好!準備迎接夜晚了!",
        },
        {
          begin: 21,
          finish: 24,
          text: "晚安!祝你有個好夢!",
        },
        {
          text: "你好!",
        },
      ],
    },

    // 靜態頁面設定
    //   這些頁面的內容通常不會經常變動，適合用來展示關於網站或作者的資訊
    other: {
      search: {
        title: "站內搜尋", // 頁面的標題
        subTitle: "搜尋你想尋找的內容...", // 頁面副標題
        heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png", // 頁面頂部背景圖片路徑，建議使用高解析度圖片以確保在大螢幕上顯示良好
      },
      friends: {
        title: "友情連結",
        subTitle:
          "這裡是我的一些朋友或推薦的網站清單，歡迎點擊造訪他們的網站，支持他們的創作與努力！",
        heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png",
      },
      about: {
        title: "關於我與這個網站",
        subTitle: "這裡是關於我與這個網站的介紹頁面。",
        heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png",
      },
    },
  },

  // 風格設定
  style: {
    heroImage: {
      from: 80, // 背景圖淡入起始透明度，數值越大透明度越低
      to: 100, // 背景圖淡入結束透明度，數值越大透明度越低
      src: "/assets/layouts/homepage/samhacker_homepage_background.png", // 首頁頂部背景圖片路徑，建議使用高解析度圖片以確保在大螢幕上顯示良好
      method: "overlay", // 背景圖顯示方式，可選值有 "mask"（使用 CSS mask 屬性實現原生遮罩效果，實驗性功能）和 "overlay"（使用帶透明度的 div 疊加遮罩，透過半透明漸層柔化背景，建議）
    },
    defaultPostImage:
      "/assets/layouts/homepage/samhacker_homepage_background.png", // 預設文章圖片，如果文章沒有指定封面就使用它
    postsPerPage: 6, // 首頁每頁顯示的文章數量
    titleSeparator: "-", // 網站標題分隔符號，會用在瀏覽器標籤和 SEO 中，例如 "文章標題 - 網站名稱"
    enableTransitions: false, // 是否啟用頁面轉場動畫
    enableRecentPosts: false, // 是否在首頁顯示最新文章區塊
  },

  // 作者（站長）資訊
  author: {
    name: "SamHacker", // 網站站長名稱
    bio: "我是一個熱愛分享技術的部落客，專注於 Minecraft 開服、網站建設、開源軟體等領域。", // 簡短自我介紹
    // 詳細自我介紹請在 src/pages/about.astro 中編輯

    email: "xux510208@gmail.com", // 聯絡電子郵件
    // 頭像圖片的完整 URL 或相對路徑
    avatarUrl:
      "https://gravatar.com/avatar/f7598bd8d4aba38d7219341f81a162fc842376b3b556b1995cbb97271d9e2915?v=1753291388000&size=256&d=initials",

    // 社交媒體連結
    links: [
      // 如需其他的社交媒體圖標，請在 AuthorCard 元件中添加相應的圖標映射
      {
        icon: "X",
        to: "https://twitter.com/xux510208",
        label: "X",
      },
      {
        icon: "Github",
        to: "https://github.com/510208",
        label: "GitHub",
      },
    ],
  },

  // 頁首選單設定
  navBar: {
    // 請依照以下格式添加選單項目
    // {
    //   title: "Logo",  // 選單顯示名稱
    //   href: "/",  // 連結目標網址（可用相對、外連網址或絕對路徑）
    //   icon: Home,  // 選單圖標，請從 lucide-react 匯入對應圖標，此圖標會用於行動裝置選單顯示
    // }
    links: [
      {
        title: "Home",
        href: "/",
        icon: Home,
      },
      {
        title: "Blog",
        href: "/blog",
        icon: Newspaper,
      },
      {
        title: "About",
        href: "/about",
        icon: Info,
      },
      {
        title: "Friends",
        href: "/friends",
        icon: Handshake,
      },
      {
        title: "Contact",
        href: "https://510208.github.io/about",
        icon: Phone,
      },
    ],
  },

  // 友情連結設定
  friendLinks: [
    // 請依照以下格式添加友情連結，友情連結可以用來交換連結或推薦其他網站，因此建議慎選
    // {
    //   title: "網站名稱", // 連結網站的名稱
    //   imgUrl: "/path/to/image.png", // 連結網站的圖示，建議使用正方形圖片
    //   desc: "網站描述", // 簡短的網站介紹
    //   siteUrl: "https://example.com", // 連結網站的網址
    //   tags: ["標籤1", "標籤2"], // 可選的標籤，用於分類或描述網站
    // }

    {
      title: "SamHacker",
      imgUrl:
        "https://gravatar.com/avatar/f7598bd8d4aba38d7219341f81a162fc842376b3b556b1995cbb97271d9e2915?v=1753291388000&size=256&d=initials",
      desc: "我是一個熱愛分享技術的部落客，專注於 Minecraft 開服、網站建設、開源軟體等領域。",
      siteUrl: "https://510208.github.io",
      tags: ["個人網站"],
    },
    {
      title: "Astro",
      imgUrl: "/assets/friends/astro-logo.svg",
      desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
      siteUrl: "https://github.com/withastro/astro",
      tags: ["框架"],
    },
    {
      title: "雲羽生存服",
      imgUrl:
        "https://whiterdoc.lnstw.xyz/~gitbook/image?url=https%3A%2F%2F1914684154-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FQO60Us9Iis1SIrzVL59O%252Fsites%252Fsite_kafOM%252Ficon%252FbGGikEgCJmFfjPYNZsUW%252Fg2.png%3Falt%3Dmedia%26token%3Dcd58ac15-e2d2-4fd3-8fbb-30b47b88922f&width=256&dpr=1&quality=100&sign=377f4730&sv=2",
      desc: "致力於提供最棒的生存體驗，我們希望真的可以辦到",
      siteUrl: "https://discord.gg/CfGvx3NQWZ",
      tags: ["Minecraft", "Discord群組"],
    },
    {
      title: "WordPress Discord",
      imgUrl: "https://bkp.samhacker.xyz/friends/wordpress-logo.jpg",
      desc: "WordPress在Discord的聊天群！",
      siteUrl: "https://discord.gg/5pvhAA8JXC",
      tags: ["Discord群組"],
    },
    {
      title: "CrystalLab",
      imgUrl: "https://crystal-lab.org/favicon.ico",
      desc: "从基础操作到高级技巧，掌握晶体培养的每一个步骤，创作属于你的结晶艺术品",
      siteUrl: "https://crystal-lab.org/",
      tags: ["科學教育"],
    },
    {
      title: "Zhenyuan 工作室",
      imgUrl:
        "https://www.gravatar.com/avatar/07f375105a68074c6b90379762cd1443?s=400&r=g",
      desc: "一個熱愛在網路世界中💫\n探索的大學生🥹",
      siteUrl: "https://zhenyuan.dev/",
      tags: ["設計", "技術"],
    },
    {
      title: "璐沐",
      imgUrl: "https://510208.github.io/assets/friend_photo/lumu.webp",
      desc: "一隻偏好新詩，古代詩的小鹿。畢竟才疏學淺，還需人們指點一番~",
      siteUrl: "https://www.penana.com/user/233957/%E7%92%90%E6%B2%90",
      tags: ["文學", "作家"],
    },
    {
      title: "Ruixue",
      imgUrl: "/assets/friends/ruixue.webp",
      desc: "喜歡AI、程式、還有可愛的小蘿莉,也愛分享生活趣事,正在經營自己的Discord機器人Minging-ru與社群,一步步打造專屬的數位天地~",
      siteUrl: "https://ruixue.onrender.com/",
      tags: ["Discord Bot", "技術", "生活"],
    },
    {
      title: "三哥",
      imgUrl: "https://gravatar.com/avatar/f6d0a62624d1d82d90ea3232e3663561",
      desc: "　",
      siteUrl: "https://sange.ge/",
      tags: ["技術", "生活", "託管服務"],
    },
    {
      title: "毛哥EM",
      imgUrl: "https://emtech.cc/static/img/EMprofile.png",
      desc: "　",
      siteUrl: "https://emtech.cc/",
      tags: ["技術", "個人網站", "生活"],
    },
  ],

  // 其他行為設定
  behavior: {
    enableComment: "Giscus", // 是否啟用文章評論功能

    // 評論系統設定，當 enableComment 為 true 時生效
    // giscus 評論系統設定說明請參考：https://giscus.app/zh-TW
    // <script src="https://giscus.app/client.js"
    //     data-repo="[在此輸入儲存庫名稱]"
    //     data-repo-id="[在此輸入儲存庫 ID]"
    //     data-category="[在此輸入分類名稱]"
    //     data-category-id="[在此輸入分類 ID]"
    //     data-mapping="pathname"
    //     data-strict="0"
    //     data-reactions-enabled="1"
    //     data-emit-metadata="0"
    //     data-input-position="bottom"
    //     data-theme="preferred_color_scheme"
    //     data-lang="zh-TW"
    //     crossorigin="anonymous"
    //     async>
    // </script>
    // 設定與上述 script 標籤中的 data- 屬性對應，可以直接用官網提供的產生器來取得對應的值
    giscusConfig: {
      repo: "510208/utterances",
      repoId: "R_kgDOKOthQw",
      category: "Announcements",
      categoryId: "DIC_kwDOKOthQ84Czwi8",
      mapping: "og:title",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "1",
      inputPosition: "top",
      theme: "transparent_dark",
      lang: "zh-TW",
    },

    // utterances 評論系統設定說明請參考：https://utteranc.es/
    utterancesConfig: {
      repo: "510208/utterances",
      issueTerm: "pathname",
      label: "comment",
      theme: "github-light",
    },

    // 是否啟用 Google Tag Manager 以進行網站流量分析
    enableGTM: true,
    // Google Tag Manager 設定，當 enableGTM 為 true 時生效
    gtmConfig: {
      googleTagManagerId: "GTM-N2SPWPQW", // 在此輸入您的 Google Tag Manager ID
    },

    // 是否啟用 404 頁面彩蛋，此項目在 CloudFlare Worker 部署時可能不生效
    enable404EasterEgg: true,

    tableOfContents: {
      enable: true, // 是否在文章頁面顯示目錄
      minDepth: 2, // 顯示目錄的最小標題深度，例如 2 表示從 h2 開始顯示
      maxDepth: 4, // 顯示目錄的最大標題深度，例如 4 表示到 h4 結束顯示，-1 表示顯示到最後一層標題
    },
  },

  // 頁尾社交媒體連結設定
  footer: [
    // socialMedia 的名稱請前往 https://simpleicons.org/ 上尋找，大小寫須完全吻合
    // 如需使用自訂圖標，請提供圖標的完整 URL 或針對網站根目錄的相對路徑
    // {
    //   socialMedia: "Twitter",  // 社交媒體名稱
    //   url: "https://twitter.com/johndoe",  // 連結網址
    // },
    {
      socialMedia: "Threads",
      url: "https://www.threads.com/@samhacker.xyz",
    },
    {
      socialMedia: "Instagram",
      url: "https://www.instagram.com/samhacker.xyz/",
    },
    {
      socialMedia: "Github",
      url: "https://github.com/510208",
    },
    {
      socialMedia: "Bento",
      url: "https://bento.me/510208",
    },
    {
      socialMedia: "Githubpages",
      url: "https://510208.github.io",
    },
    {
      socialMedia: "Discord",
      url: "https://discord.gg/R2eFtXgsRg",
    },
    {
      socialMedia: "Figma",
      url: "https://www.figma.com/@samhacker",
    },
    {
      socialMedia: "/assets/logo/social_media/penana_symbol.svg", // 自訂圖標範例
      url: "https://www.penana.com/user/234799/samhacker", // 連結網址
    },
  ],
};

export default config; // 匯出設定
