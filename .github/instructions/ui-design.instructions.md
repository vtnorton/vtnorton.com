---
description: "Use when building or changing UI, layouts, SCSS, pages, components, responsive behavior, visual polish, or frontend QA for this repository. Covers responsive checks, visual comparison, tool usage, accessibility, and the expected design language for vtnorton.com."
name: "vtnorton UI and Design"
applyTo: ["src/**/*.tsx", "src/**/*.scss"]
---
# vtnorton UI and Design

## Strategy

- This project is desktop-first, not mobile-first.
- Design and evaluate the primary experience on large screens first, then adapt for smaller screens without losing quality.

## Core Intent

- Treat UI work as product-quality frontend craft, not just functional implementation.
- Preserve a fancy, modern, polished, pixel-conscious visual result.
- Optimize for strong desktop presentation without sacrificing mobile behavior.
- Prefer the most current visual patterns in this repo, even when older pages show legacy structure or styling.
- Default to an editorial-premium, storytelling-oriented feel instead of generic product UI.

## Visual Direction

- Favor elegant editorial layouts, strong hierarchy, deliberate spacing, and restrained but meaningful motion.
- Reuse the current visual language: Neutra for headings, calm blue-driven palette, light surfaces, deep text contrast, and soft shadows.
- Reuse the typography system already present in the repo before introducing any new type treatment, font pairing, or fallback strategy.
- Keep interfaces feeling designed, not generic or templated.
- Prefer visual rhythm through spacing, typography, composition, and contrast before adding decorative UI.
- Use animation to reinforce hierarchy and delight, not to distract.
- Avoid defaulting to dark mode aesthetics unless the task explicitly calls for it.

## Responsive Quality

- Always treat responsive behavior as part of the task, not a follow-up.
- Follow a desktop-first workflow: finalize the large-screen layout first, then implement and validate small-screen adaptations.
- Check layouts at desktop and mobile breakpoints before considering UI work done.
- Use the repository breakpoints and spacing system already defined in `src/styles/variables.scss` and `src/styles/theme.scss`.
- Prevent horizontal overflow, broken grids, clipped content, and touch-hostile interactions.
- Mobile solutions should feel intentionally designed, not just stacked desktop blocks.
- Validate responsive state transitions, not only static breakpoints. If a layout has expandable, pinned, sticky, or collapsible UI, test the same page by resizing from desktop to mobile and confirm hidden content does not stay visible, overlay the page, or preserve the wrong state.

## Visual QA Workflow

- Use available tools to validate UI behavior whenever the task affects visuals.
- Follow the MCP viewport baseline from `.github/instructions/ui-mcp-viewport.instructions.md` before any visual conclusion.
- Always run and inspect the page in browser tools for UI work with the browser maximized at 1920x1080 and verify the desktop result before considering the task complete.
- Always validate the same UI in small-screen viewports as part of completion criteria.
- Perform validation in that order: large screen first, then small screens.
- Any mobile-first visual pass, snapshot, or screenshot is considered incorrect for this repository and must be repeated after a proper 1920x1080 desktop review.
- For comparison work, use the legacy repo at `../old.vtnorton.com` when a page still exists there but not yet in the new repo.
- Use `pnpm dev:compare` for side-by-side checks: legacy on port 3000 and current site on port 3001.
- If a page does not yet exist in the current repo, use the legacy implementation as visual and structural reference, but modernize the final implementation to current patterns.
- If needed for precision, ask the user for screenshots or references rather than guessing subjective visual details.
- End every meaningful UI task with a polish pass that explicitly checks contrast, font fallback, unintended default browser styles, awkward borders, broken hover/focus states, dead spacing, and any element that looks "unstyled" or inconsistent with the site's visual level.
- After any structural UI change observed in screenshots or browser inspection (for example card-to-section, grid-to-row, or moving content between containers), do not stop at “it matches the requested structure.” Re-evaluate the typography, spacing, hierarchy, and internal composition so the new structure feels intentionally designed rather than mechanically converted.
- Before declaring UI work complete, use the desktop screenshot/review pass to ask whether any content block now looks merely transplanted from the old structure instead of redesigned for the new one. If it does, keep refining.

## Shared Component Review

- When changing a shared visual component, inspect the component itself and validate every meaningful usage that could expose a different branch or layout mode.
- Do not assume one page is enough to validate a shared component. Cross-check at least the touched page plus the main reference pages that already use that component well.
- For `SectionContentWithImage`, review the main variants across `src/pages/portfolio/formula.tsx`, `src/pages/portfolio/ola-wolff.tsx`, and `src/pages/portfolio/superviz.tsx`.
- For stateful shell elements such as the sidebar, validate both the static look and the resize transition behavior.

## Component-Specific QA Traps

- Buttons on dark or photographic backgrounds must not rely on default outline styling if it creates weak contrast. Border, text, and hover states must be explicitly readable in context.
- `SectionContentWithImage` has multiple presentation branches. Validate both the plain image branch and the `imageCaption` branch, and confirm the image block never tucks under the text, creates accidental overlap, or leaves useless blank bars caused by inherited section padding.
- `SectionContentWithImage` spacing should feel composed, not merely non-broken. Check horizontal breathing room between text and image, the vertical rhythm around captions, and whether sticky media still looks intentional at large widths.
- `VerticalSteper` markers must use intentional typography and contrast. Do not allow numbered markers to fall back to default serif fonts or low-contrast text colors.
- When turning repeated “cards” into repeated `Section` blocks, redesign the content hierarchy inside each section. Labels, numbers, descriptions, and dividers usually need a new composition once the old card shell is gone.

## Visual References for This Repo

- Use `Formula`, `Olá Wolff`, and `SuperViz` as reference pages when validating image-and-copy compositions and portfolio storytelling layouts.
- When working on portfolio pages, compare against current in-repo references first, then consult the legacy site only for missing structure or historical context.

## Current-vs-Legacy Guidance

- This codebase contains multiple generations of UI and styling patterns.
- Prefer current references such as `src/modules/Portfolio/Numbers/**`, `src/components/PageHero/**`, and newer portfolio pages.
- Do not treat `old.vtnorton.com` as the implementation standard; it is historical reference.
- When touching legacy-looking areas in the new repo, modernize the touched scope toward current patterns without forcing unrelated rewrites.
- Do not cargo-cult legacy CTA copy or method-like labels from older pages. Re-evaluate button wording against the current page's positioning, voice, and UX goals.

## Styling Rules

- Prefer SCSS over CSS-in-JS or inline static styling.
- Reuse CSS variables before introducing new colors, spacing, or shadow values.
- Prefer solving presentation and interaction states in SCSS before adding JavaScript for UI effects.
- Keep inline styles for truly dynamic values only, such as dynamic background images or calculated values passed from props.
- Prefer semantic descendant selectors over awkward utility-like class names.
- Prefer nested descendant names inside the parent block (for example `.slider { .viewport { ... } }`) instead of redundant parent-prefixed subclasses when the child is only scoped to that parent.
- Do not override base visuals of shared shell components from page-scoped styles (for example overriding `.hero-overlay` inside a specific page). If a visual change is needed, implement it in the shared component API/pattern or ask first before introducing page-level overrides.
- Preserve the co-located SCSS pattern used by the repo.

## Motion Rules

- Motion should be moderate, confident, and purposeful.
- Prefer opacity, transform, and scale transitions over layout-jumping animations.
- Keep animation timing readable and polished rather than flashy.
- Use motion to support reveals, hover feedback, expansion states, and visual hierarchy.
- Avoid adding animation that harms readability, focus, or perceived performance.

## Accessibility Rules

- Implement accessibility best practices by default.
- Preserve semantic structure, keyboard navigation, focus visibility, and readable contrast.
- Treat accessibility as part of polish, not separate from design quality.
- For interactive custom UI, ensure hover-only behavior also works for keyboard and touch contexts.

## Tool and Validation Expectations

- Use the available tools, browser inspection, screenshots, and comparison workflows when validating UI.
- Validate UI at both extremes: 1920x1080 (maximized desktop) and small-screen/mobile sizes.
- Check for regressions in layout, spacing, overflow, and interaction behavior.
- Run project checks relevant to the change so Biome and existing project rules stay green.
- If visual confidence is low, ask targeted design questions instead of making broad assumptions.

## Design Taste Defaults

- Prefer clean, expressive compositions over crowded interfaces.
- Prefer premium-feeling spacing and typography over dense dashboard-like layouts.
- Prefer modern, editorial, storytelling-oriented presentation over generic SaaS visuals.
- Prefer handcrafted polish and asymmetry when it improves personality, while keeping the layout readable.
- Prefer consistency with the site's current identity over importing a new visual language for a single page.
