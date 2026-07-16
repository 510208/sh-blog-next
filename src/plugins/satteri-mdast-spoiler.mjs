import { defineHastPlugin } from "satteri";

/**
 * 黑幕（Spoiler）語法解析外掛 — HAST 階段
 */
export const satteriHastSpoiler = defineHastPlugin({
  name: "spoiler",
  text(node, _ctx) {
    const regex = /\|\|(.+?)\|\|/g;

    // 如果沒有匹配，直接返回
    if (!regex.test(node.value)) return;
    regex.lastIndex = 0;

    const matches = [...node.value.matchAll(regex)];
    const newChildren = [];
    let lastIndex = 0;

    for (const match of matches) {
      const [fullMatch, spoilerText] = match;
      const matchStart = match.index;
      const matchEnd = matchStart + fullMatch.length;

      // 匹配項之前的純文字
      if (matchStart > lastIndex) {
        newChildren.push({
          type: "text",
          value: node.value.slice(lastIndex, matchStart),
        });
      }

      // 建立黑幕 span 元素
      newChildren.push({
        type: "element",
        tagName: "span",
        properties: { className: ["spoiler"] },
        children: [
          {
            type: "text",
            value: spoilerText,
          },
        ],
      });

      lastIndex = matchEnd;
    }

    // 剩餘的純文字
    if (lastIndex < node.value.length) {
      newChildren.push({
        type: "text",
        value: node.value.slice(lastIndex),
      });
    }

    // 用 span 容器包裝所有子節點
    return {
      type: "element",
      tagName: "span",
      properties: { className: ["spoiler-container"] },
      children: newChildren,
    };
  },
});
