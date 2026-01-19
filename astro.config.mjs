// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import remarkDirective from "remark-directive"; /* Handle directives */
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import remarkMath from "remark-math";
import remarkSectionize from "remark-sectionize";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import remarkSpoiler from "./src/plugins/remark-spoiler.js";

// @ts-ignore
import rehypeCodeBlock from "./src/plugins/rehype-code-block.mjs";
// @ts-ignore
import shikiCodeMetadata from "./src/plugins/shiki-code-metadata.mjs";
import rehypeCodeTitles from "rehype-code-titles";
// @ts-ignore
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";

import { asideAutoImport, astroAsides } from "./src/utils/astro-aside";
import AutoImport from "astro-auto-import";

import react from "@astrojs/react";

import expressiveCode from "astro-expressive-code";

import pagefind from "astro-pagefind";

import metaTags from "astro-meta-tags";

import devtoolBreakpoints from "astro-devtool-breakpoints";

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://sh-blog-next.vercel.app",
  integrations: [
    AutoImport({
      imports: [asideAutoImport],
    }),
    astroAsides(),
    expressiveCode(),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes("/categories/") && !page.includes("/tags/"),
    }),
    react(),
    pagefind(),
    partytown({
      // Optional: Add config options here
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
    metaTags(),
    devtoolBreakpoints(),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@shConfig": path.resolve(__dirname, "./shblog.config.ts"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
        "@consts": path.resolve(__dirname, "./src/consts.ts"),
      },
    },
  },

  experimental: {
    svgo: true,
  },

  markdown: {
    shikiConfig: {
      // 添加 Shiki transformer 來處理代碼區塊的 metadata
      transformers: [shikiCodeMetadata()],
    },
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      // remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      remarkSectionize,
      remarkSpoiler,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: {
            className: ["anchor"],
          },
          content: {
            type: "element",
            tagName: "span",
            properties: {
              className: ["anchor-icon"],
              "data-pagefind-ignore": true,
            },
            children: [
              {
                type: "text",
                value: "#",
              },
            ],
          },
        },
      ],
      rehypeCodeTitles,
      rehypeCodeBlock,
    ],
  },
});
