---
description: "Use when building or changing UI, layouts, SCSS, pages, components, responsive behavior, visual polish, or frontend QA for this repository. Covers responsive checks, visual comparison, tool usage, accessibility, and the expected design language for vtnorton.com."
name: "vtnorton UI and Design"
applyTo: ["src/**/*.tsx", "src/**/*.scss"]
---
# vtnorton UI and Design

## Core Intent

- Treat UI work as product-quality frontend craft, not just functional implementation.
- Preserve a fancy, modern, polished, pixel-conscious visual result.
- Optimize for strong desktop presentation without sacrificing mobile behavior.
- Prefer the most current visual patterns in this repo, even when older pages show legacy structure or styling.
- Default to an editorial-premium, storytelling-oriented feel instead of generic product UI.

## Visual Direction

- Favor elegant editorial layouts, strong hierarchy, deliberate spacing, and restrained but meaningful motion.
- Reuse the current visual language: Neutra for headings, calm blue-driven palette, light surfaces, deep text contrast, and soft shadows.
- Keep interfaces feeling designed, not generic or templated.
- Prefer visual rhythm through spacing, typography, composition, and contrast before adding decorative UI.
- Use animation to reinforce hierarchy and delight, not to distract.
- Avoid defaulting to dark mode aesthetics unless the task explicitly calls for it.

## Responsive Quality

- Always treat responsive behavior as part of the task, not a follow-up.
- Check layouts at desktop and mobile breakpoints before considering UI work done.
- Use the repository breakpoints and spacing system already defined in `src/styles/variables.scss` and `src/styles/theme.scss`.
- Prevent horizontal overflow, broken grids, clipped content, and touch-hostile interactions.
- Mobile solutions should feel intentionally designed, not just stacked desktop blocks.

## Visual QA Workflow

- Use available tools to validate UI behavior whenever the task affects visuals.
- Always run and inspect the page in browser tools for UI work and verify both desktop and mobile states before considering the task complete.
- For comparison work, use the legacy repo at `../old.vtnorton.com` when a page still exists there but not yet in the new repo.
- Use `pnpm dev:compare` for side-by-side checks: legacy on port 3000 and current site on port 3001.
- If a page does not yet exist in the current repo, use the legacy implementation as visual and structural reference, but modernize the final implementation to current patterns.
- If needed for precision, ask the user for screenshots or references rather than guessing subjective visual details.

## Current-vs-Legacy Guidance

- This codebase contains multiple generations of UI and styling patterns.
- Prefer current references such as `src/modules/Portfolio/Numbers/**`, `src/components/PageHero/**`, and newer portfolio pages.
- Do not treat `old.vtnorton.com` as the implementation standard; it is historical reference.
- When touching legacy-looking areas in the new repo, modernize the touched scope toward current patterns without forcing unrelated rewrites.

## Styling Rules

- Prefer SCSS over CSS-in-JS or inline static styling.
- Reuse CSS variables before introducing new colors, spacing, or shadow values.
- Prefer solving presentation and interaction states in SCSS before adding JavaScript for UI effects.
- Keep inline styles for truly dynamic values only, such as dynamic background images or calculated values passed from props.
- Prefer semantic descendant selectors over awkward utility-like class names.
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
- Check for regressions in layout, spacing, overflow, and interaction behavior.
- Run project checks relevant to the change so Biome and existing project rules stay green.
- If visual confidence is low, ask targeted design questions instead of making broad assumptions.

## Design Taste Defaults

- Prefer clean, expressive compositions over crowded interfaces.
- Prefer premium-feeling spacing and typography over dense dashboard-like layouts.
- Prefer modern, editorial, storytelling-oriented presentation over generic SaaS visuals.
- Prefer handcrafted polish and asymmetry when it improves personality, while keeping the layout readable.
- Prefer consistency with the site's current identity over importing a new visual language for a single page.
