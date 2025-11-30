# Copilot Instructions — sh-blog-next

Purpose

- This repo is an Astro v5 blog starter with content collections (Markdown + MDX), responsive images using `astro:assets`, and integrations for sitemap/RSS.
- Keep suggestions and edits scoped to `src/` unless explicitly asked to change build config or CI.

Big-picture architecture

- `astro.config.mjs` — Site config and integrations (`@astrojs/mdx`, `@astrojs/sitemap`).
- `src/pages/` — Routes and pages. `src/pages/blog/[...slug].astro` uses `getCollection('blog')` and static paths to generate blog pages.
- `src/layouts/BlogPost.astro` — Blog post layout used by pages and `about.astro` (the about page uses the same layout).
- `src/content/` — Content Collections: `src/content/blog/*.md` and `.mdx` files. Content frontmatter is validated by `src/content.config.ts` using Zod.
- `src/components/` — Reusable UI: `BaseHead.astro`, `Header.astro`, `Footer.astro`, etc.
- `src/assets/` + `public/` — Static assets and fonts. Use `src/assets` with `astro:assets` for responsive images; `public/` is served as-is.

Key developer workflows (build/test/debug)

- Install deps: `pnpm install` (repo has `pnpm-lock.yaml` — prefer `pnpm`).
- Local dev: `pnpm dev` (starts Astro/Vite dev server, hot reloads).
- Production build: `pnpm build`.
- Preview production build locally: `pnpm preview`.
- Check and diagnose content/schema issues: `pnpm astro check` or `pnpm build` to surface issues.
- Lint or type-check: project uses TypeScript with strict settings in `tsconfig.json` — dynamic imports and runtime props may still be used.

Important conventions & patterns (repo-specific)

- Content collections + schema: `src/content.config.ts` defines the `blog` collection with a `loader` and a Zod schema that enforces the frontmatter fields. If you add a new frontmatter field (e.g., `tags`), update this schema.
  - The schema uses `image()` for `heroImage` and `z.coerce.date()` for `pubDate`/`updatedDate`.
- Content file location & IDs: Post files live under `src/content/blog/` and are accessed by id via `getCollection('blog')`. Slugs are `post.id` and are generated from file names by `astro:content`.
- Relative asset references for heroImage: Frontmatter uses relative imports such as `heroImage: '../../assets/blog-placeholder-3.jpg'` (relative to the content file). These are used by `Image` from `astro:assets` in `BlogPost.astro`.
- Rendering MDX: `src/pages/blog/[...slug].astro` uses `render(post)` to return `{ Content }`, then embeds `<Content />` in the layout.
- Link patterns: The site links to posts via `/blog/${post.id}/`. Keep trailing-slash patterns consistent.
- Layout and props: `BlogPost.astro` reads meta with `Astro.props` and `Image` from `astro:assets` handles image sizing. Example props: `title`, `description`, `pubDate`, `updatedDate`, `heroImage`.
- Public assets and fonts: `BaseHead.astro` preloads fonts from `/fonts/` (under `public/fonts/`), and uses `Astro.url` and `Astro.site` for canonical/Og tags.
- RSS and sitemap: `src/pages/rss.xml.js` uses `@astrojs/rss` to generate feed from `getCollection('blog')` while `astro.config.mjs` enables `sitemap()`.

Small examples you can use directly

- Add a new blog post:
  1. Create `src/content/blog/2025-11-01-your-post.md`.
  2. Add frontmatter with required fields matching the schema:

```md
---
title: "Your Post Title"
description: "Short desc for listing"
pubDate: "Nov 01 2025"
heroImage: "../../assets/blog-placeholder-5.jpg"
---

Your content here...
```

- Reference content in pages: `const posts = await getCollection('blog');` then `posts.map((post) => ({ id: post.id, data: post.data }))`.
- Use `render()` for MDX content:

```ts
import { render } from "astro:content";
const { Content } = await render(post);
// In template: <Content />
```

Patterns to avoid or be careful with

- Do not assume a different frontmatter schema exists; update `src/content.config.ts` if you need additional typed fields.
- Don’t hardcode image URLs. Use `astro:assets` Image or reference `src/assets/` with relative path in frontmatter.
- When adding integrations, modify `astro.config.mjs` and test locally (`pnpm dev`) — the project depends on `@astrojs/mdx` in `astro.config.mjs`.
- Use `pnpm` instead of `npm` if you need to add or upgrade packages to keep the lockfile consistent.

Where to look for examples & changes

- Content collection schema: `src/content.config.ts`.
- Static blog route: `src/pages/blog/[...slug].astro` and `src/pages/blog/index.astro`.
- Reusable layout: `src/layouts/BlogPost.astro`.
- Head/meta handling & fonts: `src/components/BaseHead.astro`.
- Global styling: `src/styles/global.css`.

FAQs for AI agents

- Where do I add a new blog post? `src/content/blog/` (create `.md` or `.mdx`).
- How do I add a new image asset? Save the image under `src/assets/` and reference via a relative path in frontmatter.
- If a frontmatter field is missing or invalid, the build will fail with a schema error — update the schema in `src/content.config.ts` when adding new fields.

If anything is missing or you want extra details on tests, CI, or deployment target (Vercel/Netlify), say which area to expand and I’ll update these instructions.
