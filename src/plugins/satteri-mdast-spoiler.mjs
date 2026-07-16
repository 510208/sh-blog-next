import { defineMdastPlugin } from "satteri";

export const satteriMdastSpoiler = defineMdastPlugin({
  name: "spoiler",
  text(node, ctx) {
    const regex = /\|\|(.+?)\|\|/g;

    if (!regex.test(node.value)) return;
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
        newChildren.push(
          ctx.createText(node.value.slice(lastIndex, matchStart)),
        );
      }

      // 使用 ctx.createInline() 建立行內元素
      newChildren.push(
        ctx.createInline("span", { className: ["spoiler"] }, [
          ctx.createText(spoilerText),
        ]),
      );

      lastIndex = matchEnd;
    }

    // 處理剩餘的純文字
    if (lastIndex < node.value.length) {
      newChildren.push(ctx.createText(node.value.slice(lastIndex)));
    }

    // 使用 ctx.createContainer() 或 ctx.createInline() 包裝結果
    return ctx.createInline(
      "span",
      { className: ["spoiler-container"] },
      newChildren,
    );
  },
});
