/**
 * Shiki Transformer - 處理代碼區塊的 metadata
 * 支援 file=、start= 和 numbers 屬性
 */

// 語言到預設文件名的映射
const langToFilenameMap = {
  bash: "Shell",
  c: "C",
  cpp: "C++",
  css: "CSS",
  go: "Go",
  html: "HTML",
  js: "JavaScript",
  json: "JSON",
  jsx: "JSX",
  plaintext: "Plain Text",
  py: "Python",
  python: "Python",
  ruby: "Ruby",
  rust: "Rust",
  scala: "Scala",
  sh: "Shell",
  shell: "Shell",
  solidity: "Solidity",
  toml: "TOML",
  ts: "TypeScript",
  tsx: "TSX",
  typescript: "TypeScript",
  vue: "Vue",
  yaml: "YAML",
  yml: "YAML",
  zsh: "Shell",
  astro: "Astro",
  svelte: "Svelte",
  mjs: "JavaScript",
  cjs: "JavaScript",
};

export default function shikiCodeMetadata() {
  return {
    name: "shiki-code-metadata",
    pre(node) {
      // metadata 字串存在 this.options.meta.__raw
      const meta = this.options.meta?.__raw;

      // 如果沒有 metadata，使用語言的預設文件名
      if (meta == undefined) {
        const lang = this.options.lang;
        const defaultFilename = langToFilenameMap[lang];
        if (defaultFilename) {
          node.properties.dataFilename = defaultFilename;
        }
        return;
      }

      // 解析 metadata
      const attributes = meta.split(/\s+/).filter(Boolean);
      const styles = [];
      let hasExplicitFilename = false;

      for (const attr of attributes) {
        const [key, value] = attr.split("=", 2);

        if (!key) {
          continue;
        }

        switch (key) {
          case "file":
            // 設置文件名屬性
            node.properties.dataFilename = value;
            hasExplicitFilename = true;
            break;
          case "start":
            // 設置起始行號的 CSS 變數
            styles.push(`--start-line: ${value}`);
            break;
          case "numbers":
            // 添加顯示行號的 class
            this.addClassToHast(node, "show-line-numbers");
            break;
        }
      }

      // 如果沒有明確指定文件名，使用語言的預設文件名
      if (!hasExplicitFilename) {
        const lang = this.options.lang;
        const defaultFilename = langToFilenameMap[lang];
        if (defaultFilename) {
          node.properties.dataFilename = defaultFilename;
        }
      }

      // 合併 styles 到現有的 style 屬性
      if (styles.length > 0) {
        const existingStyle = node.properties.style || "";
        const separator =
          existingStyle && !existingStyle.endsWith(";") ? ";" : "";
        node.properties.style = existingStyle + separator + styles.join(";");
      }
    },
  };
}
