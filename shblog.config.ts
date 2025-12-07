import { Home, Newspaper, Info, Phone } from "lucide-react";

const config = {
  title: "SamHacker Blog",
  description:
    "我是一個熱愛分享技術的部落客，專注於 Minecraft 開服、網站建設、開源軟體等領域。",
  favicon: "/favicon.png",
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
        title: "Posts",
        href: "/blog",
        icon: Newspaper,
      },
      {
        title: "About",
        href: "/about",
        icon: Info,
      },
      {
        title: "Contact",
        href: "/contact",
        icon: Phone,
      },
    ],
  },
};

export default config;
