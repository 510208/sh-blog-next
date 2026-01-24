import type { LucideIcon } from "lucide-react";
import type { InputPosition, Mapping } from "@giscus/react";
import * as SimpleIcons from "simple-icons-astro";

interface NavLink {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface AuthorLink {
  icon: keyof typeof SimpleIcons | string;
  to: string;
  label: string;
}

interface Author {
  name: string;
  bio: string;
  email: string;
  avatarUrl: string;
  links: AuthorLink[];
}

interface NavBar {
  links: NavLink[];
}

interface FriendLink {
  title: string;
  imgUrl: string;
  desc: string;
  siteUrl: string;
  tags: string[];
}

interface GiscusConfig {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: Mapping;
  strict: "0" | "1" | undefined;
  reactionsEnabled: "0" | "1" | undefined;
  emitMetadata: "0" | "1" | undefined;
  inputPosition: InputPosition;
  theme: string;
  lang: string;
}

interface UtterancesConfig {
  repo: `${string}/${string}`;
  issueTerm: "pathname" | "url" | "title" | "og:title";
  label: string;
  theme:
    | "boxy-light"
    | "dark-blue"
    | "github-dark-orange"
    | "github-dark"
    | "github-light"
    | "gruvbox-dark"
    | "icy-dark"
    | "photon-dark"
    | string;
}

interface Behavior {
  commentConfig: {
    enableComment: "None" | "Giscus" | "Utterances";
    giscusConfig: GiscusConfig;
    utterancesConfig: UtterancesConfig;
  };
  enableGTM: boolean;
  gtmConfig: {
    googleTagManagerId: string;
  };
  enable404EasterEgg: boolean;
  tableOfContents: {
    enable: boolean;
    minDepth: number;
    maxDepth: number;
  };
  // panguConfig: {
  //   enable: boolean;
  //   excludeHtmlTags: string[];
  // };
}

interface Style {
  heroImage: {
    src: string;
    from: number;
    to: number;
    method: "mask" | "overlay";
  };
  defaultPostImage: string;
  postsPerPage: number;
  titleSeparator: string;
  enableTransitions: boolean;
  enableRecentPosts: boolean;
}

interface TimeGreeting {
  begin?: number;
  finish?: number;
  text: string;
}

interface FooterLink {
  socialMedia: keyof typeof SimpleIcons | string;
  url: string;
}

interface PagesConfigItem {
  title: string;
  subTitle: string;
  heroImage: string;
}

interface PageConfig {
  home: {
    title: string;
    heroImage: string;
    greetings: TimeGreeting[];
  };
  other: {
    [key: string]: PagesConfigItem;
  };
}

interface ShBlogConfig {
  title: string;
  description: string;
  lang: string;
  favicon: string;

  pages: PageConfig;
  style: Style;
  author: Author;
  navBar: NavBar;
  friendLinks: FriendLink[];
  behavior: Behavior;
  footer: {
    description: string;
    links: FooterLink[];
    copyright: {
      text: string;
      url?: string;
      yearUpdateStrategy: "fixed" | "auto" | number;
    };
    countryEmoji: string;
  };
}

declare const config: ShBlogConfig;

export type {
  ShBlogConfig,
  NavLink,
  Author,
  AuthorLink,
  NavBar,
  FriendLink,
  GiscusConfig,
  UtterancesConfig,
  Behavior,
  Style,
  TimeGreeting,
  FooterLink,
  PagesConfigItem,
  PageConfig,
};

export default config;
