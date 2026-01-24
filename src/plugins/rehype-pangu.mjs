import { visit } from "unist-util-visit";
import pangu from "pangu";

const excludeHtmlTags = ["code", "pre", "kbd"]; // 排除特定標籤不進行處理

/**
 * rehype-pangu 插件
 * 功能：在中文與英數字、符號之間自動加入空格
 */
export default function rehypePangu() {
  return (tree) => {
    // 遍歷所有節點，僅處理 'text' 類型的節點
    visit(tree, "text", (node, index, parent) => {
      console.log("rehype-pangu processing text node:", node.value);

      // 避免在特定標籤內處理文本，如 <code>、<pre>、<kbd>
      if (parent && excludeHtmlTags.includes(parent.tagName)) {
        console.log(`Skipping Pangu for tag: ${parent.tagName}`);
      }

      if (node.value && typeof node.value === "string") {
        // 使用 Pangu.js 處理文本內容
        node.value = pangu.spacingText(node.value);
      }
    });
  };
}
