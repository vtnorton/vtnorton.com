---
description: "Use when the user asks for a wrap up (for example: 'wrap up', 'dar um wrap up', or 'fecha pra mim nisso'). Enforces final simplification, convention alignment, and anti-churn review."
name: "vtnorton Wrap Up Protocol"
applyTo: "src/**/*"
---
# vtnorton Wrap Up Protocol

## Trigger

- Run this protocol whenever the user asks for wrap up, including prompts such as "wrap up", "dar um wrap up", and "fecha pra mim nisso".

## Scope

- Wrap up is a consolidation pass, not feature expansion.
- Focus on cleanup, simplification, consistency, and convention alignment on what was already implemented.

## Required Checks

- Review all modified code and remove leftovers that no longer make sense (dead branches, legacy carry-over, over-engineered abstractions, unused props, unnecessary indirection, duplicated selectors/styles, and temporary compatibility code no longer needed).
- Re-check every touched file against the active instruction set and project conventions (architecture boundaries, TypeScript strictness, SCSS naming/style rules, shared component usage, and existing naming patterns).
- If any touched code does not comply, fix it in the same wrap-up pass instead of deferring.
- Check whether the implementation path shows "kept changing while discovering requirements" and ask: if the final result was known from the start, would this code have been implemented differently?
- If the answer is yes, refactor toward the simpler/better final-shape implementation now, instead of preserving historical intermediate decisions.

## Session-Learning Pass

- Reconcile the final code with the chat context of the current session.
- Identify which misunderstandings or missing guardrails caused repeated adjustments.
- When the same class of issue is likely to happen again, update `.github/instructions` with explicit prevention rules.

## Wrap-Up Output Contract

- The completion summary must include:
  - What was simplified.
  - What was aligned to conventions.
  - Which instruction guardrails were added or adjusted to prevent repeated adjustment loops.
