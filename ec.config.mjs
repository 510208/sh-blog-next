import { defineEcConfig } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  langAlias: {
    mjs: "javascript",
    tsx: "typescript",
    jsx: "typescript",
    py: "python",
    ts: "typescript",
    sh: "bash",
    md: "markdown",
    mdx: "markdown",
  },
  plugins: [pluginLineNumbers()],
  textMarkers: true,
});
