# Specification

## Summary
**Goal:** Let users look up current weather by typed location, select the correct place from matches, and see temperature/conditions with simple contextual advice.

**Planned changes:**
- Add a location search form (typed city/town) as the first screen; no automatic geolocation.
- Implement a place-matches list (name + region/country) and allow the user to select the intended location.
- Fetch and display current temperature and a human-readable condition label for the selected location using a public weather API.
- Add loading and error states (with retry) for geocoding and weather fetches, using React Query for caching/refetch.
- Generate and display contextual advice/warnings based on conditions (precipitation, cold, wind, or mild/clear).
- Apply a coherent, distinctive visual theme (responsive; avoid a blue+purple primary theme).
- Add and render static generated image assets from `frontend/public/assets/generated` (logo in header, hero/empty-state on initial screen).

**User-visible outcome:** Users can type a location, choose the correct match, and view current temperature/conditions plus updated, English weather advice, within a styled, responsive UI that includes a header logo and an initial hero/empty-state illustration.
