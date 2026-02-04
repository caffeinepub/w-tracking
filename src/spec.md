# Specification

## Summary
**Goal:** Make weather warnings/advice clearer and more actionable by adding practical guidance (e.g., umbrella, dress warmly, stay hydrated) and relevant emojis in the displayed advice.

**Planned changes:**
- Update the frontend weather advice generation to include explicit, actionable messages for rainy/drizzly, cold, and hot conditions.
- Add relevant emojis to the advice title and/or message while keeping readable English text (not emojis-only).
- Ensure the existing AdviceBanner displays emoji-containing titles/messages without layout regressions, including clean wrapping on mobile and in both light/dark mode.

**User-visible outcome:** The Advice banner shows clearer, actionable weather guidance with appropriate emojis (e.g., umbrella for rain, warm-clothing for cold, hydration/heat for hot), and the text remains fully readable across devices and themes.
