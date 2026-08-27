# Animated Stratiix Path — Site Integration

## What this rebuild does

- Recreates the attached five-layer isometric visual in responsive HTML/CSS rather than using a flattened image.
- Uses the approved Stratiix colours:
  - Diagnose: `#2563EB`
  - Architect: `#7C3AED`
  - Activate: `#046C5C`
  - Accelerate: `#10B981`
  - Sustain: `#C9A86A`
  - Background: `#1E1F22` / `#111214`
- Sequentially assembles the layers when the visual enters the viewport.
- Cycles focus through the five phases.
- Pauses and highlights a phase on hover, keyboard focus, or tap.
- Includes responsive layouts and reduced-motion accessibility.

## Files

- `components/AnimatedStratiixPath.tsx`
- `components/AnimatedStratiixPath.module.css`
- `app/tos-animation-demo/page.tsx` — optional preview route

## Usage

```tsx
import { AnimatedStratiixPath } from "@/components/AnimatedStratiixPath";

<AnimatedStratiixPath />
```

## Recommended placement

Use this visual once on the homepage in the **Transformation Operating System™** section, beside or below concise five-phase copy. Do not introduce it as a second framework. Label it as **The Stratiix Path™ within the Transformation Operating System™**.
