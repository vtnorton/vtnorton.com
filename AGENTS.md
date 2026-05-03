# Copilot Instructions

## Project Overview

`vtnorton.com` is a personal portfolio website built with **Next.js App Router**, **TypeScript**, and **SCSS Modules**, deployed on **Vercel**.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styles | SCSS Modules |
| Linter / Formatter | Biome |
| Package Manager | pnpm |
| Deployment | Vercel |

## Key Commands

```bash
pnpm dev       # start local dev server
pnpm build     # production build
pnpm start     # serve production build locally
pnpm lint      # run Biome linter
pnpm format    # run Biome formatter
```

## Repository Layout

```
src/
  app/          # Next.js App Router — pages, layouts, route segments
  components/   # shared UI components
  styles/       # global SCSS and design tokens
public/         # static assets (images, fonts, icons)
```

## Detailed Conventions

| Topic | Reference |
|---|---|
| Code style, architecture, naming, TypeScript, SCSS, Biome | [repo-conventions.instructions.md](.github/instructions/repo-conventions.instructions.md) |
| UI/UX, design language, responsive behavior, accessibility | [ui-design.instructions.md](.github/instructions/ui-design.instructions.md) |
| Visual review with browser/MCP tools (viewport setup) | [ui-mcp-viewport.instructions.md](.github/instructions/ui-mcp-viewport.instructions.md) |
| Wrap-up / final review checklist | [wrap-up.instructions.md](.github/instructions/wrap-up.instructions.md) |