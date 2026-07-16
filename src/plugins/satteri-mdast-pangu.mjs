import { defineMdastPlugin } from "satteri";
import pangu from "pangu";

/**
 * Pangu.js
 * IMPORTANT: If you need to disable this plugin, you can remove it from the `mdastPlugins` array in the Astro configuration.
 */
export const satteriMdastPangu = defineMdastPlugin({
  name: "pangu",

  text(node, ctx) {
    if (!node.value || typeof node.value !== "string") return;

    // 計算出加上空格後的文字
    const spacedText = pangu.spacingText(node.value);

    // 只有在文字真的有變更時才執行修改，避免不必要的 AST 更新
    if (spacedText !== node.value) {
      // console.log(`Applying Pangu spacing: "${node.value}" -> "${spacedText}"`);

      // 使用 ctx.setProperty 更新節點屬性
      ctx.setProperty(node, "value", spacedText);
    }
  },
});
