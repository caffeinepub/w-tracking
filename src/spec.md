# Specification

## Summary
**Goal:** Add clear, actionable weather warnings/advice (with emojis) based on current conditions, and ensure the advice banner displays the full text cleanly in light and dark mode.

**Planned changes:**
- Update frontend weather advice generation to output English advice with emojis, including: “Carry an umbrella” for rain/drizzle/showers, “Wear warm clothes” for snow/very cold, and “Stay hydrated” for hot temperatures.
- Adjust the weather advice banner UI to render titles/messages exactly as provided (including emojis) with no truncation and readable wrapping on mobile/desktop in both light and dark mode.

**User-visible outcome:** Users see condition-based weather warnings like “Carry an umbrella ☔️”, “Wear warm clothes 🧥”, or “Stay hydrated 💧” and the full advice text (including emojis) is fully visible and easy to read across themes and screen sizes.
