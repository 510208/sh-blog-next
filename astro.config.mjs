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

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://samhacker.xyz",
  integrations: [mdx(), sitemap(), react()],
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
      // [
      //   rehypeComponents,
      //   {
      //     components: {
      //       // 例如你要讓 <Alert> 用自訂 React 組件呈現
      //       alert: require("./src/components/Alert.jsx").default,
      //     },
      //   },
      // ],
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
