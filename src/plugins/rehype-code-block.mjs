/**
 * Rehype Plugin - 為代碼區塊添加容器和標題欄
 * 在 Shiki transformer 之後運行，將 <pre> 包裝成完整的代碼區塊結構
 */

import { visit } from "unist-util-visit";
import { h } from "hastscript";

export default function rehypeCodeBlock() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      // 只處理 <pre> 元素
      if (node.tagName !== "pre") {
        return;
      }

      // 檢查是否有我們在 Shiki transformer 中添加的 data-filename 屬性
      if (!node.properties || !node.properties.dataFilename) {
        return;
      }

      const filename = node.properties.dataFilename;

      // 移除 pre 元素的 data-filename 屬性(因為我們已經讀取了)
      delete node.properties.dataFilename;

      // 創建新的代碼區塊結構
      const wrapper = h(
        "div",
        {
          class: "code-container",
        },
        [
          // 標題欄 <div class="code-header">
          h(
            "div",
            {
              class: "code-header",
            },
            [
              // 左側: 文件圖標 + 文件名
              h(
                "div",
                {
                  class: "code-header-left",
                },
                [
                  // 文件圖標 (圓點)
                  h(
                    "div",
                    {
                      class: "code-icon",
                    },
                    [
                      h(
                        "span",
                        {
                          class: "code-icon-dot",
                        },
                        [{ type: "text", value: "●" }]
                      ),
                    ]
                  ),
                  // 文件名
                  h(
                    "p",
                    {
                      class: "code-filename",
                    },
                    [{ type: "text", value: filename }]
                  ),
                ]
              ),
              // 右側: 複製按鈕
              h(
                "div",
                {
                  class: "code-header-right",
                },
                [
                  h(
                    "button",
                    {
                      class: "code-copy",
                      type: "button",
                      ariaLabel: "複製程式碼",
                    },
                    [
                      h(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        },
                        [
                          h("rect", {
                            width: "14",
                            height: "14",
                            x: "8",
                            y: "8",
                            rx: "2",
                            ry: "2",
                          }),
                          h("path", {
                            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                          }),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
          // 代碼內容區塊 - 保持原有的 <pre> 元素
          node,
        ]
      );

      // 替換原始節點
      if (parent && index != null) {
        parent.children[index] = wrapper;
      }
    });
  };
}
