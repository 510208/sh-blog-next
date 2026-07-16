import { defineMdastPlugin } from "satteri";

/**
 * Admonition 容器指令外掛
 */

const ADMONITION_TYPES = [
  "tip",
  "note",
  "important",
  "caution",
  "warning",
  "danger",
];

export const satteriMdastAdmonition = defineMdastPlugin({
  name: "admonition",

  containerDirective(node, ctx) {
    // 檢查是否為支援的 admonition 類型，若非則不處理
    if (!ADMONITION_TYPES.includes(node.name)) return;

    // 驗證子節點是否存在且不為空
    if (!Array.isArray(node.children) || node.children.length === 0) {
      ctx.report({
        message: `Invalid admonition directive ":::${node.name}". Admonition directives must be of block type ':::${node.name}{...} <content> :::'`,
        node,
        severity: "warning",
      });

      return {
        type: "paragraph",
        data: {
          hName: "div",
          hProperties: { className: ["hidden"] },
        },
        children: [
          {
            type: "text",
            value: "Invalid admonition directive.",
          },
        ],
      };
    }

    const [firstChild, ...rest] = node.children;
    const hasLabel = firstChild?.data?.directiveLabel === true;

    // 處理標題節點的子內容
    const titleContent = hasLabel
      ? [
          {
            ...firstChild,
            data: {
              ...firstChild.data,
              hName: "div",
              hProperties: {
                ...firstChild.data?.hProperties,
              },
            },
          },
        ]
      : [{ type: "text", value: node.name.toUpperCase() }];

    // 建立符合 CSS 的標題節點 span.bdm-title
    const titleNode = {
      type: "paragraph",
      data: {
        hName: "span",
        hProperties: { className: ["bdm-title"] },
      },
      children: titleContent,
    };

    // 建立最終的 blockquote 節點，並確保強制寫入指定的 className
    // 使用獨立的物件結構回傳，避免 node 原有的資料（如屬性物件）干擾轉換器的輸出
    const resultNode = {
      type: "blockquote",
      data: {
        hName: "blockquote",
        hProperties: {
          className: ["admonition", `bdm-${node.name}`],
        },
      },
      children: [titleNode, ...(hasLabel ? rest : node.children)],
    };

    return resultNode;
  },
});
