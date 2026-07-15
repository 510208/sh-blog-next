// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { satteri } from "@astrojs/markdown-satteri";

import { satteriHastCitation } from "./src/plugins/satteri-hast-citation.mjs";
import { satteriMdastAdmonition } from "./src/plugins/satteri-mdast-admonition.mjs";
import { satteriMdastSpoiler } from "./src/plugins/satteri-mdast-spoiler.mjs";
import { satteriMdastReadingTime } from "./src/plugins/satteri-mdast-reading-time.mjs";
import { satteriMdastPangu } from "./src/plugins/satteri-mdast-pangu.mjs";

import shikiCodeMetadata from "./src/plugins/shiki-code-metadata.mjs";

import react from "@astrojs/react";

import expressiveCode from "astro-expressive-code";

import pagefind from "astro-pagefind";

import metaTags from "astro-meta-tags";

import path from "path";
import { fileURLToPath } from "url";
import { config as loadEnv } from "dotenv";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file
loadEnv();

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://sh-blog-next.vercel.app",
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes("/categories/") && !page.includes("/tags/"),
    }),
    react(),
    pagefind(),
    metaTags(),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@shConfig": path.resolve(__dirname, "./shblog.config.ts"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
        "@consts": path.resolve(__dirname, "./src/consts.ts"),
        "@lib": path.resolve(__dirname, "./src/lib"),
      },
    },
    optimizeDeps: {
      include: ["astro/toolbar"],
    },
  },

  markdown: {
    shikiConfig: {
      // 添加 Shiki transformer 來處理代碼區塊的 metadata
      transformers: [shikiCodeMetadata()],
    },
    processor: satteri({
      features: { directive: true, math: true },
      mdastPlugins: [
        satteriMdastAdmonition,
        satteriMdastSpoiler,
        satteriMdastReadingTime,
        satteriMdastPangu, // You can disable Pangu.js plugin there by removing it from this array or commenting it out if you needed
      ],
      hastPlugins: [satteriHastCitation],
    }),
  },
});
