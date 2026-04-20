---
description: "Use when creating or refactoring code in this repository. Enforces project architecture, naming, TypeScript, SCSS, service boundaries, and Biome formatting conventions for vtnorton.com."
name: "vtnorton Repository Conventions"
applyTo: "src/**/*"
---
# vtnorton Repository Conventions

## Enforcement Level

- Treat items under "Hard Rules" as default requirements.
- Treat items under "Preferred Patterns" as conventions to follow unless task constraints require deviation.

## Project Tech Context

This is my personal blog and portfólio, its a website that I want to look fancy, modern, and with great animations. This is a pixel perfect website made by a senior frontend and designer. The level of perfection is the highest. 

- This is a Next.js project using the Pages Router (`src/pages/`), not the App Router.
- Primary stack: React + TypeScript + Sass (SCSS) + Biome.
- Package manager is pnpm.
- Do not migrate tooling to Bun unless explicitly requested.
- UI libraries in active use include Fluent UI and react-icons.
- Content/data integrations include Notion APIs and Vercel KV caching.
- Keep changes aligned with existing project stack choices before introducing alternatives.

## Historical Context

- This project has evolved over many years and contains mixed generations of patterns and styling approaches.
- Not every area was fully migrated during each redesign cycle; legacy code can coexist with modern code.
- Default intent: prefer the most current patterns used in the active codebase when creating or refactoring code.
- Use modern references as guidance, such as `src/services/postsServices.ts` and `src/modules/Portfolio/Numbers/**`.
- Treat `old.vtnorton.com` as legacy reference only; do not replicate its older patterns by default.
- Legacy examples to avoid as baseline include `old.vtnorton.com/src/components/ChangelogComponent/ChangelogComponent.tsx` and older page structures like `old.vtnorton.com/src/pages/olawolff.tsx`.
- The legacy site lives one directory above this repo at `../old.vtnorton.com` and may be used as a visual comparison reference.
- For side-by-side visual checks, use `pnpm dev:compare`; legacy runs on port 3000 and the current site runs on port 3001.

## Hard Rules

### Architecture Boundaries

- Keep route-level concerns in `src/pages/`.
- Keep using Pages Router patterns; do not introduce `src/app/` App Router structure unless explicitly requested.
- Keep reusable UI in `src/components/` and feature-specific UI/logic in `src/modules/`.
- Keep external integrations in `src/adapters/`.
- Keep domain orchestration and data fetching in `src/services/`.
- Keep data-shaping entities in `src/models/`.
- Keep cross-cutting helpers in `src/utils/` and query builders in `src/utils/query/`.
- Do not call external services directly from UI components when a service/adapter exists.

### Component Conventions

- Use arrow functions for components and helpers.
- Use PascalCase for component folders and component files.
- Co-locate one SCSS file per component using kebab-case naming.
- Prefer direct imports from the source file path instead of creating pass-through re-export files.
- Prefer named exports in source files; keep default exports for Next.js page files.
- Do not add configurable props unless there is a real call-site need in the current scope.
- If all known call sites require a prop and making it required does not break intended usage, keep it required instead of optional.

### Naming and Simplicity

- Use descriptive names, including auxiliary verbs when applicable (for example `isLoading`, `hasError`, `canSubmit`).
- Prefer simple solutions before introducing complex abstractions.
- Break larger logic into multiple small private functions with clear names.
- Prefer files with a single clear responsibility instead of mixing page logic, helper logic, types, constants, and unrelated UI concerns in one place.
- Avoid defining local types in the same file when they can live in a dedicated adjacent types file.
- Prefer dedicated neighboring files for types, constants, and helpers instead of keeping them embedded in large page or component files.
- If a file starts mixing multiple responsibilities, split it into smaller adjacent files with clear names.

### React Safety Rules

- Use refs only for direct DOM access or imperative interop.
- Always clean up side effects in `useEffect` when subscriptions, listeners, timers, or async race conditions are involved.
- Extract reusable stateful logic into custom hooks when repeated across components.

### UI and Accessibility Quality

- For UI-facing tasks, preserve a fancy, modern, animation-aware look and keep pixel-precision intent.
- Validate UI behavior on mobile as part of implementation quality.
- Implement accessibility best practices by default (semantic markup, keyboard access, labels, and focus visibility).

### TypeScript Rules

- Keep strict typing and avoid `any`.
- If `any` is unavoidable for third-party payloads, scope it narrowly and document why.
- Type component props explicitly (for example with `ComponentNameProps`).
- Prefer type over interface (legacy code used interfaces as types).
- Use generics for wrappers/utilities like cache helpers.
- Before creating a new shared prop/type shape, search for existing reusable types first and extend/reuse them (for example shared image shapes like `imageUrl`, `imageAlt`, and `imageCaption`) instead of duplicating fields.
- Avoid indexed-access prop typing like `Image['imageUrl']` in component contracts. Prefer simpler shapes: either a full object prop (for example `image: Image`) or a named composed type (`type X = Image & { ... }`).
- For image-related components, keep caption data inside the shared image type (`image.imageCaption`) instead of separate boolean caption toggles that hide caption source.

### Formatting and Linting

- Follow Biome settings from `biome.json`: tabs, single quotes, trailing commas, max line width 120.
- Keep imports organized and remove unused symbols.
- Prefer `const` when values are not reassigned.

### Miscellaneous Rules
- When planning and implementing big features, ask about backward compatibility expectations before implementation.
- Always ask questions when requirements or expectations are unclear, especially for UI work where assumptions can lead to misaligned results.
- Before introducing new class names, component variants, prop-based style knobs, or naming patterns that are not already established in the touched area, ask the user first instead of inventing them.

## Preferred Patterns

### Data and Caching Patterns

- Wrap Notion and cloud providers with adapters.
- Keep page/content parsing in model classes rather than in UI components.
- Keep service methods grouped as exported service objects (for example `postServices`).
- Use centralized cache keys and the cache middleware for expensive reads.

### Styling Rules

- Use global SCSS architecture already in `src/styles/`.
- Reuse CSS variables from `src/styles/variables.scss` before introducing new hard-coded values.
- Prefer class-based styling in SCSS for static styles and keep inline styles for dynamic values only.
- Prefer solving presentation with SCSS before adding JavaScript/TypeScript for styling behavior.
- Avoid selector patterns like `.card-title_h4`; prefer semantic descendant selectors like `.card h4` when appropriate.
- Prefer nested descendant naming inside a block (for example `.slider { .viewport { ... } .track { ... } }`) instead of redundant block-prefixed descendants like `.slider__viewport` when those descendants are only used within that block scope.
- Keep class naming consistent with existing patterns like `vtn_` and feature-scoped class blocks.

### Next.js and SEO Patterns

- Follow Pages Router conventions in `src/pages/`.
- Keep page-level default export patterns in page files.
- Prefer native HTML elements when they better match current project patterns; use Next.js-specific primitives contextually.
- Use the existing SEO component (`ContentSEO`) on pages with public content metadata.

### Commenting Rules

- Avoid adding comments unless they provide non-obvious context that the code cannot communicate clearly.

## Testing Note

- If introducing tests, place them under `tests/` (never `__tests__/`).
- Prefer Vitest with React Testing Library for new test setup unless the task explicitly requires another framework.

## Planning Rule

- For major refactors or big features, ask about backward compatibility expectations before implementation.
