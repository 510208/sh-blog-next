// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { satteri } from "@astrojs/markdown-satteri";

import { satteriCitation } from "./src/plugins/satteri-citation.mjs";
import { testKatex } from "./src/plugins/satteri-katex-test.mjs";
import { katex } from "@nullpinter/satteri-katex";

import shikiCodeMetadata from "./src/plugins/shiki-code-metadata.mjs";

import { asideAutoImport, astroAsides } from "./src/utils/astro-aside";
import AutoImport from "astro-auto-import";

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
      mdastPlugins: [testKatex],
      hastPlugins: [satteriCitation],
    }),
  },
});
