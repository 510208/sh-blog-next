import { defineMdastPlugin } from "satteri";
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

/**
 * 文章閱讀時間計算外掛
 */
export const satteriMdastReadingTime = defineMdastPlugin({
  name: "reading-time",

  root(tree, ctx) {
    // 將整棵 MDAST 語法樹轉換為純文字字串
    const textOnPage = toString(tree);

    // 計算閱讀時間
    const readingTime = getReadingTime(textOnPage);

    // 檢查並確保 Astro frontmatter 容器物件存在
    if (!ctx.file) {
      ctx.file = {};
    }
    if (!ctx.file.data) {
      ctx.file.data = {};
    }
    if (!ctx.file.data.astro) {
      ctx.file.data.astro = { frontmatter: {} };
    }
    if (!ctx.file.data.astro.frontmatter) {
      ctx.file.data.astro.frontmatter = {};
    }

    // 將計算出的閱讀時間字串寫入 frontmatter 中
    ctx.file.data.astro.frontmatter.minutesRead = readingTime.text;
  },
});
