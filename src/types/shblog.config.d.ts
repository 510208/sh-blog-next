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

export interface Behavior {
  enableComment: boolean;
  giscusConfig: GiscusConfig;
  enableGTM: boolean;
  gtmConfig: {
    googleTagManagerId: string;
  };
  enable404EasterEgg: boolean;
}

export interface Style {
  heroImageOpacity: {
    from: number;
    to: number;
  };
  defaultPostImage: string;
  postsPerPage: number;
  titleSeparator: string;
  enableTransitions: boolean;
}

export interface FooterLink {
  socialMedia: keyof typeof SimpleIcons | string;
  url: string;
}

export interface ShBlogConfig {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  style: Style;
  author: Author;
  navBar: NavBar;
  friendLinks: FriendLink[];
  behavior: Behavior;
  footer: Array<FooterLink>;
}

declare const config: ShBlogConfig;
export default config;
