# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro v5 blog (sh-blog-next) with content collections, MDX support, React integration, and shadcn/ui components. The site is deployed to Cloudflare Pages using Wrangler.

## Development Commands

**Package Manager:** Always use `pnpm` (not npm/yarn) to maintain lockfile consistency.

- `pnpm install` — Install dependencies
- `pnpm dev` — Start dev server with hot reload
- `pnpm build` — Production build
- `pnpm preview` — Preview production build locally
- `pnpm astro check` — Check content/schema issues and TypeScript errors
- `pnpm deploy` — Deploy to Cloudflare Pages (`wrangler deploy --assets=./dist`)
- `pnpm cn` — Run shadcn CLI to add UI components (`pnpm dlx shadcn@latest`)

## Architecture & Key Concepts

### Content Collections System

**Content Location:** `src/content/blog/` contains `.md` and `.mdx` files.

**Schema Definition:** `src/content.config.ts` defines the `blog` collection with:
- `loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' })`
- Zod schema enforcing frontmatter fields: `title`, `description`, `pubDate`, `updatedDate` (optional), `heroImage` (optional)
- Uses `z.coerce.date()` for date parsing and `image()` for responsive images

**Content Access Pattern:**
```ts
import { getCollection, render } from 'astro:content';

// Get all posts
const posts = await getCollection('blog');

// Render a single post
const { Content, headings } = await render(post);
```

**Important:** Post IDs are derived from file names (e.g., `first-post.md` → id: `first-post`). URLs follow pattern `/blog/${post.id}/`.

### Configuration Files

**Site Config:** `shblog.config.ts` centralizes:
- Site metadata (title, description, lang, favicon)
- Author info (name, bio, avatar, social links)
- Navigation links with Lucide icons
- Style defaults (postsPerPage, titleSeparator, defaultPostImage)

**Constants:** `src/consts.ts` re-exports config values for easy importing (e.g., `SITE_TITLE`, `DEFAULT_POST_IMAGE`, `SEPARATOR`).

**Astro Config:** `astro.config.mjs` defines:
- Integrations: `expressiveCode()`, `mdx()`, `sitemap()`, `react()`
- Custom remark/rehype plugins (see below)
- Site URL: `https://samhacker.xyz`

### Markdown/MDX Processing Pipeline

**Remark Plugins (in order):**
- `remarkMath` — Math notation support
- `remarkReadingTime` — Injects `minutesRead` into frontmatter
- `remarkGithubAdmonitionsToDirectives` → `remarkDirective` — GitHub-style admonitions
- `remarkSectionize` — Wrap sections for styling
- `remarkSpoiler` (custom) — Spoiler syntax

**Rehype Plugins (in order):**
- `rehypeKatex` — Render math with KaTeX (requires `katex/dist/katex.min.css`)
- `rehypeCodeTitles` — Code block titles
- `rehypeCodeBlock` (custom) — Custom code block processing
- `rehypeComponents` with `AdmonitionComponent` — Custom admonition rendering (note, tip, important, caution, warning)
- `rehypeSlug` → `rehypeAutolinkHeadings` — Heading anchors with `#` prepended

**Plugin Order is Critical:** Do not reorder plugins without understanding dependencies.

### Custom Plugins

Located in `src/plugins/`:
- `remark-reading-time.mjs` — Calculates reading time using `reading-time` package
- `remark-spoiler.js` — Custom spoiler directive handling
- `shiki-code-metadata.mjs` — Shiki transformer for code metadata
- `rehype-code-block.mjs` — Custom code block enhancements
- `rehype-component-admonition.mjs` — Admonition component generator

### Layout System

**BaseLayout** (`src/components/layouts/BaseLayout.astro`):
- Root layout with `<BaseHead>`, `<Header>`, and `<Footer>`
- Handles meta tags, fonts, and global styles

**BlogPost Layout** (`src/layouts/BlogPost.astro`):
- Wraps BaseLayout
- Displays Hero section with hero image or default
- Shows post metadata (author, dates)
- Renders `<slot />` for MDX content
- Includes Sidebar and TOC (table of contents)
- Inline script for code copy functionality

**Props Structure:**
```ts
interface Props {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: any;
  headings: Array<{ depth: number; slug: string; text: string }>;
}
```

### Component Organization

- `src/components/core/` — BaseHead, Header, Footer, HeaderLink
- `src/components/layouts/` — Layout wrappers
- `src/components/content/` — FormattedDate, Greeting, BlogList, Home/Hero components
- `src/components/markdown/` — CodeBlock and markdown-specific components
- `src/components/ui/` — shadcn/ui components (button, card, input, separator, etc.)
- `src/components/widgets/` — SiteRuntime widget
- `src/components/global/` — ToTop button
- `src/components/search/` — Search components (in development)

### UI Component Patterns

**shadcn/ui Integration:**
- Components in `src/components/ui/` follow shadcn conventions
- Use `cn()` utility from `src/lib/utils.ts` for class merging (`clsx` + `tailwind-merge`)
- Add new components via `pnpm cn` command

**Styling:**
- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Global styles in `src/styles/global.css`
- Markdown-specific styles in `src/styles/markdown.css`
- Uses variable fonts: `@fontsource-variable/inter`, `@fontsource-variable/noto-sans-tc`, `@fontsource-variable/noto-serif-tc`

### Path Aliases

TypeScript configured with `@/*` alias mapping to `./src/*`:
```ts
import config from "shblog.config"; // root import
import { cn } from "@/lib/utils"; // alias import
```

### Static Routes

- `src/pages/index.astro` — Homepage
- `src/pages/about.astro` — About page (uses BlogPost layout)
- `src/pages/404.astro` — Custom 404 with Easter eggs
- `src/pages/blog/index.astro` — Blog listing page
- `src/pages/blog/[...slug].astro` — Dynamic blog post pages (uses `getStaticPaths()`)
- `src/pages/rss.xml.js` — RSS feed generation

### Asset Handling

**Responsive Images:**
- Use `astro:assets` with `<Image>` component for optimization
- Store assets in `src/assets/` and reference with relative paths in frontmatter
- Example: `heroImage: '../../assets/blog-placeholder-3.jpg'`

**Public Assets:**
- `public/` directory served as-is (fonts, favicon, default images)
- BaseHead preloads fonts from `/fonts/`

## Adding New Content

**Create a Blog Post:**

1. Add file to `src/content/blog/` (e.g., `my-new-post.md`)
2. Include required frontmatter:
```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: "Dec 11 2025"
heroImage: "../../assets/my-image.jpg" # optional
---

Your content here...
```
3. Run `pnpm build` to validate schema
4. Post will be available at `/blog/my-new-post/`

**Adding Frontmatter Fields:**

If you need new fields, update `src/content.config.ts` schema:
```ts
schema: ({ image }) =>
  z.object({
    // existing fields...
    tags: z.array(z.string()).optional(), // new field
  }),
```

## Deployment

**Target:** Cloudflare Pages via Wrangler

**Config:** `wrangler.jsonc` specifies:
- `assets.directory: "./dist"`
- `compatibility_date: "2025-11-30"`

**Deploy Process:**
1. `pnpm build` — Generate static site in `./dist`
2. `pnpm deploy` — Upload to Cloudflare Pages

## Important Conventions

**Prefer Astro Over React:** Use Astro components (`.astro`) for static content. Only use React (`.tsx`) when interactivity is required.

**Security:** When handling user input (e.g., search functionality), use `dompurify` to sanitize input. Package is already installed.

**Code Comments:** Codebase includes Chinese comments. Maintain this pattern when adding inline explanations.

**Link Patterns:** Always use trailing slashes for internal links (e.g., `/blog/${post.id}/`).

**Image Defaults:** If `heroImage` is missing, use `DEFAULT_POST_IMAGE` constant.

**Title Formatting:** Page titles follow pattern: `${title} ${SEPARATOR} ${config.title}` (e.g., "Post Title - SamHacker Blog").

## Common Pitfalls

- **Don't modify plugin order** in `astro.config.mjs` without understanding dependencies
- **Don't hardcode site metadata** — use `shblog.config.ts` or `src/consts.ts`
- **Don't use npm/yarn** — this breaks `pnpm-lock.yaml`
- **Don't skip schema validation** — `pnpm astro check` catches content errors before build
- **Don't assume different frontmatter fields exist** — always check `src/content.config.ts`
- **Don't forget KaTeX CSS** — Math rendering requires `katex/dist/katex.min.css` import

## React Integration

- React 19 with `@astrojs/react` integration
- Use `client:*` directives for hydration (e.g., `client:load`, `client:visible`)
- Radix UI primitives available: Avatar, Separator, Slot, Tooltip
- Lucide React for icons
