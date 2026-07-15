import { defineMdastPlugin } from "satteri";
import pangu from "pangu";

/**
 * 盤古（Pangu）中英文自動加空格外掛
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
