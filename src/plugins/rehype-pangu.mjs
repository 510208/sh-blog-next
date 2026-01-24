import { visit } from "unist-util-visit";
import pangu from "pangu";

const enabledPanguJs = true;

/**
 * rehype-pangu 插件
 * 功能：在中文與英數字、符號之間自動加入空格
 */
export default function rehypePangu() {
  return (tree) => {
    // 遍歷所有節點，僅處理 'text' 類型的節點
    visit(tree, "text", (node, index, parent) => {
      console.log("rehype-pangu processing text node:", node.value);
      if (!enabledPanguJs) {
        return;
      }

      // 避免在特定標籤內處理文本，如 <code>、<pre>、<kbd>
      if (parent && ["code", "pre", "kbd"].includes(parent.tagName)) {
        return;
      }

      if (node.value && typeof node.value === "string") {
        // 使用 Pangu.js 處理文本內容
        node.value = pangu.spacingText(node.value);
        console.log(
          "rehype-pangu processed text node:",
          pangu.spacingText(node.value),
        );
      }
    });
  };
}
