import { defineHastPlugin } from "satteri";

export function satteriHastCitation() {
  return defineHastPlugin({
    name: "citation",
    element: {
      filter: ["blockquote"],
      visit(node, ctx) {
        const citations = [];
        const keptChildren = [];

        for (const child of node.children) {
          if (
            child.type === "element" &&
            child.tagName === "p" &&
            child.children.length > 0
          ) {
            const last = child.children[child.children.length - 1];
            if (last?.type === "text") {
              const trimmed = last.value.trim();
              if (trimmed.startsWith("-#")) {
                citations.push(trimmed.slice(2).trim());
                continue; // 丟棄這個 <p>，不放進 keptChildren
              }
            }
          }
          keptChildren.push(child);
        }

        if (citations.length === 0) return;

        ctx.setProperty(node, "children", keptChildren);

        ctx.appendChild(node, {
          type: "element",
          tagName: "div",
          properties: { className: ["citation-wrapper"] },
          children: citations.map((text) => ({
            type: "element",
            tagName: "cite",
            properties: { className: ["blockquote-citation"] },
            children: [{ type: "text", value: text }],
          })),
        });
      },
    },
  });
}
