import { Handshake, Home, Info, Phone } from "lucide-react";
import type { ShBlogConfig } from "./src/types/shblog.config.d";

const config: ShBlogConfig = {
  title: "SamHacker Blog",
  description:
    "我是一個熱愛分享技術的部落客，專注於 Minecraft 開服、網站建設、開源軟體等領域。",
  lang: "zh-Hant",
  favicon: "/favicon.png",
  style: {
    defaultPostImage:
      "/assets/layouts/homepage/samhacker_homepage_background.png",
    postsPerPage: 6,
    titleSeparator: "-",
  },
  author: {
    name: "SamHacker",
    bio: "我是一個熱愛分享技術的部落客，專注於 Minecraft 開服、網站建設、開源軟體等領域。",
    email: "xux510208@gmail.com",
    avatarUrl:
      "https://gravatar.com/avatar/f7598bd8d4aba38d7219341f81a162fc842376b3b556b1995cbb97271d9e2915?v=1753291388000&size=256&d=initials",
    links: [
      // 如需其他的社交媒體圖標，請在 AuthorCard 組件中添加相應的圖標映射
      {
        icon: "Twitter",
        to: "https://twitter.com/samhacker",
        label: "Twitter",
      },
      {
        icon: "Github",
        to: "https://github.com/samhacker",
        label: "GitHub",
      },
    ],
  },
  navBar: {
    links: [
      {
        title: "Home",
        href: "/",
        icon: Home,
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
  friendLinks: [
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
      imgUrl: "https://zhenyuan.dev/avatar.jpg",
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
  ],
  behavior: {
    enableComment: true,
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
  },
  footer: [
    // socialMedia 的名稱請前往 https://simpleicons.org/ 上尋找，大小寫須完全吻合
    // 如需使用自訂圖標，請提供圖標的完整 URL 或針對網站根目錄的相對路徑
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
      socialMedia: "/assets/logo/social_media/penana_symbol.svg",
      url: "https://www.penana.com/user/234799/samhacker",
    },
  ],
};

export default config;
