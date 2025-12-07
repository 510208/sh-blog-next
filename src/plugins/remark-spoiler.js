import { visit } from "unist-util-visit";

export default function remarkSpoiler() {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      const regex = /\|\|(.+?)\|\|/g;
      const matches = [...node.value.matchAll(regex)];

      if (matches.length > 0) {
        const newNodes = [];
        let lastIndex = 0;

        for (const match of matches) {
          const [fullMatch, spoilerText] = match;
          const matchStart = match.index;
          const matchEnd = matchStart + fullMatch.length;

          if (matchStart > lastIndex) {
            newNodes.push({
              type: "text",
              value: node.value.slice(lastIndex, matchStart),
            });
          }

          newNodes.push({
            type: "html",
            value: `<span class="spoiler">${spoilerText}</span>`,
          });

          lastIndex = matchEnd;
        }

        if (lastIndex < node.value.length) {
          newNodes.push({
            type: "text",
            value: node.value.slice(lastIndex),
          });
        }

        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
}
