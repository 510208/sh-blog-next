import { defineMdastPlugin } from "satteri";
import pangu from "pangu";

/**
 * 盤古（Pangu）中英文自動加空格外掛
 */
export const satteriMdastPangu = defineMdastPlugin({
  name: "pangu",

  text(node, ctx) {
    // 檢查節點值是否為合法的非空字串
    if (!node.value || typeof node.value !== "string") return;

    // 使用 pangu 處理文字內容，自動在中文與英數字之間插入空格
    node.value = pangu.spacingText(node.value);

    // 回傳修改後的節點以更新語法樹
    return node;
  },
});
