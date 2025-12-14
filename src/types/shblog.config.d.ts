import type { LucideIcon } from "lucide-react";
import type { InputPosition, Mapping } from "@giscus/react";

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
}

export interface Style {
  defaultPostImage: string;
  postsPerPage: number;
  titleSeparator: string;
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
}

declare const config: ShBlogConfig;
export default config;
