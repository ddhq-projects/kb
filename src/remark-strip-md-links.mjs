/**
 * Remark plugin: strips `.md` from relative links, adjusts path depth,
 * and adds target="_blank" to external links.
 *
 * Starlight resolves `/foo/bar.md` → route `/foo/bar/` (adds one directory level),
 * so a relative link `[link](./page.md)` from `bar.md` would resolve to
 * `/foo/bar/page` instead of `/foo/page`. This plugin:
 *   1. Strips the `.md` extension
 *   2. Prepends `../` for non-index.md pages (to undo the extra depth)
 *   3. Adds target="_blank" rel="noopener noreferrer" to external links
 *
 * Examples (from `ai/chatgpt.md`):
 *   - `./claude.md`    → `../claude`
 *   - `./index.md`     → `../`
 *
 * Examples (from `ai/index.md` — no depth adjustment needed):
 *   - `./chatgpt.md`   → `./chatgpt`
 *
 * External links:
 *   - `[Example](https://example.com)` → adds target="_blank" rel="noopener noreferrer"
 *
 * Rule for source .md files:
 *   ALWAYS write links with `.md` extension — VS Code & GitHub need it.
 *   This plugin strips it at build time so the production site works.
 */

import { visit } from "unist-util-visit";

export function remarkStripMdLinks() {
  return (tree, file) => {
    const filePath = file.path || (file.history && file.history[0]) || "";
    const isNotIndex = filePath
      ? !filePath.endsWith("/index.md") && !filePath.endsWith("\\index.md")
      : false;

    visit(tree, "link", (node) => {
      const url = node.url;
      if (!url) return;

      // External links: open in new tab with security attributes
      if (/^https?:\/\//i.test(url)) {
        const data = node.data || (node.data = {});
        const props = data.hProperties || (data.hProperties = {});
        props.target = "_blank";
        props.rel = "noopener noreferrer";
        return;
      }

      // Anchor-only links: leave untouched
      if (url.startsWith("#")) return;

      // Strip .md extension from relative links
      if (url.endsWith(".md")) {
        let newUrl = url.slice(0, -3);

        // For index.md, strip the filename completely
        if (newUrl.endsWith("/index")) {
          newUrl = newUrl.slice(0, -5);
        }

        // Non-index pages need ../ to undo Starlight's extra directory level
        if (isNotIndex && !url.startsWith("../")) {
          newUrl = "../" + newUrl.replace(/^\.\//, "");
        }

        node.url = newUrl;
      }
    });
  };
}
