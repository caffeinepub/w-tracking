# Specification

## Summary
**Goal:** Fix the non-working "Change Location" button so users can reliably return to location search and pick a new place.

**Planned changes:**
- Update the "Change Location" button handler to navigate back to the Location Search UI from the weather results view.
- Clear the previously selected place/location state before rendering the search screen so the WeatherPanel does not remain visible.
- Ensure selecting a new search result sets the new selected place and refreshes the displayed weather accordingly.

**User-visible outcome:** From a selected location’s weather view, clicking "Change Location" returns to the search screen, clears the prior selection, and lets the user choose a new location to see updated weather.
