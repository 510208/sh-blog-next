import { defineMdastPlugin } from "satteri";

/**
 * 黑幕（Spoiler）語法解析外掛
 */
export const mdastSpoiler = defineMdastPlugin({
  name: "spoiler",

  text(node, ctx) {
    const regex = /\|\|(.+?)\|\|/g;

    // 如果文字節點中沒有匹配的黑幕語法，直接放行
    if (!regex.test(node.value)) return;

    // 重設正則表達式的計數指針
    regex.lastIndex = 0;
    const matches = [...node.value.matchAll(regex)];

    const newChildren = [];
    let lastIndex = 0;

    for (const match of matches) {
      const [fullMatch, spoilerText] = match;
      const matchStart = match.index;
      const matchEnd = matchStart + fullMatch.length;

      // 處理匹配項之前的純文字
      if (matchStart > lastIndex) {
        newChildren.push({
          type: "text",
          value: node.value.slice(lastIndex, matchStart),
        });
      }

      // 建立符合黑幕效果的 MDAST 行內節點，透過 hName 與 hProperties 指定為 span.spoiler
      newChildren.push({
        type: "strong",
        data: {
          hName: "span",
          hProperties: { className: ["spoiler"] },
        },
        children: [
          {
            type: "text",
            value: spoilerText,
          },
        ],
      });

      lastIndex = matchEnd;
    }

    // 處理剩餘的純文字
    if (lastIndex < node.value.length) {
      newChildren.push({
        type: "text",
        value: node.value.slice(lastIndex),
      });
    }

    // 將原本的 text 節點轉型為一個基礎容器節點（此處使用 emphasis），並透過 hName 覆寫為 span
    // 這樣即可繞過無法回傳陣列的限制，同時向編譯器遞交一個合法的單一 MDAST 節點物件
    return {
      ...node,
      type: "emphasis",
      data: {
        ...node.data,
        hName: "span",
        hProperties: { className: ["spoiler-container"] },
      },
      children: newChildren,
    };
  },
});
