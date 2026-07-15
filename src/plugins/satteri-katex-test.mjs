import katexLib from "katex";
import { defineMdastPlugin } from "satteri";

export function testKatex() {
  return defineMdastPlugin({
    name: "test-katex-minimal",
    inlineMath(node) {
      const html = katexLib.renderToString(node.value, {
        throwOnError: false,
        displayMode: false,
      });
      console.log("inlineMath node:", node);
      console.log("inlineMath html:", html);
      return { type: "html", value: html };
    },
    math(node) {
      const html = katexLib.renderToString(node.value, {
        throwOnError: false,
        displayMode: true,
      });
      console.log("math node:", node);
      console.log("math html:", html);
      return { type: "html", value: html };
    },
  });
}
