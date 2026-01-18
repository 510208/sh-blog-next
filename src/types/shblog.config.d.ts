import type { LucideIcon } from "lucide-react";
import type { InputPosition, Mapping } from "@giscus/react";
import * as SimpleIcons from "simple-icons-astro";

export interface NavLink {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface AuthorLink {
  icon: string;
  to: string;
  label: string;
}

export interface Author {
  name: string;
  bio: string;
  email: string;
  avatarUrl: string;
  links: AuthorLink[];
}

export interface NavBar {
  links: NavLink[];
}

export interface FriendLink {
  title: string;
  imgUrl: string;
  desc: string;
  siteUrl: string;
  tags: string[];
}

export interface GiscusConfig {
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

export interface UtterancesConfig {
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

export interface Behavior {
  enableComment: false | "Giscus" | "Utterances";
  giscusConfig: GiscusConfig;
  utterancesConfig: UtterancesConfig;
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
}

export interface Style {
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

export interface FooterLink {
  socialMedia: keyof typeof SimpleIcons | string;
  url: string;
}

export interface PagesConfigItem {
  title: string;
  subTitle: string;
  heroImage: string;
}

export interface PageConfig {
  home: {
    title: string;
    heroImage: string;
  };
  other: {
    [key: string]: PagesConfigItem;
  };
}

export interface ShBlogConfig {
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
  footer: Array<FooterLink>;
}

declare const config: ShBlogConfig;
export default config;
