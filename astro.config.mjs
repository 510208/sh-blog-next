// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
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
import rehypeComponents from "rehype-components";
import { AdmonitionComponent } from "./src/plugins/rehype-component-admonition.mjs";

import react from "@astrojs/react";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://samhacker.xyz",
  integrations: [expressiveCode(), mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
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
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      remarkSectionize,
      remarkSpoiler,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeCodeTitles,
      // rehype-code-block 必須在其他處理代碼的插件之後
      rehypeCodeBlock,
      // rehypeComponents 必須在 rehypeSlug 之前，以便正確處理 admonition
      [
        rehypeComponents,
        {
          components: {
            note: (x, y) => AdmonitionComponent(x, y, "note"),
            tip: (x, y) => AdmonitionComponent(x, y, "tip"),
            important: (x, y) => AdmonitionComponent(x, y, "important"),
            caution: (x, y) => AdmonitionComponent(x, y, "caution"),
            warning: (x, y) => AdmonitionComponent(x, y, "warning"),
          },
        },
      ],
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
    ],
  },
});
