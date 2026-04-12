---
description: "Use when analyzing, validating, or reviewing UI with browser/MCP tools. Enforces desktop-first viewport setup before snapshots, screenshots, or visual conclusions."
name: "vtnorton UI MCP Viewport"
applyTo: ["src/**/*.tsx", "src/**/*.scss"]
---
# vtnorton UI MCP Viewport

## Goal

- Prevent accidental mobile-first analysis caused by small default browser viewport.
- Force desktop-first visual inspection before any UI judgment.

## Mandatory MCP Workflow

- For any UI analysis with browser tools, set viewport to 1920x1080 before taking snapshots or screenshots.
- If a new page/tab is opened, or navigation resets dimensions, set viewport to 1920x1080 again before continuing analysis.
- Only after desktop validation, run small-screen checks.
- Any mobile snapshot, screenshot, or visual conclusion taken before the 1920x1080 desktop pass is invalid and must be redone in the correct order.

## Required Order

1. Open/navigate the target page.
2. Resize viewport to 1920x1080.
3. Take snapshot/screenshot and evaluate desktop quality first.
4. Resize to small-screen viewport(s) and validate responsive behavior.

## Completion Criteria

- A UI analysis is incomplete if it does not include desktop validation at 1920x1080.
- A UI analysis is incomplete if it does not include at least one small-screen validation pass.
- A UI analysis is invalid if the first viewport-specific inspection happened on mobile instead of desktop.

## Desktop-first Rule

- This project is desktop-first.
- Visual hierarchy, spacing rhythm, layout composition, and motion quality must be judged on desktop first, then adapted to smaller screens.
