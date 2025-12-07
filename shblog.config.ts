import { Home, Info, Phone } from "lucide-react";

const config = {
  title: "SamHacker Blog",
  description:
    "我是一個熱愛分享技術的部落客，專注於 Minecraft 開服、網站建設、開源軟體等領域。",
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
        title: "Contact",
        href: "/contact",
        icon: Phone,
      },
    ],
  },
};

export default config;
