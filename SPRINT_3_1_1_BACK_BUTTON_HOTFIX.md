# Sprint 3.1.1 — Back Button Hotfix

## Correction

The Back button on the Story List now performs an explicit navigation to the
Choose Journey page. This avoids the route-setter issue observed when the Story
List was opened with a `difficulty` query string in browser and Capacitor builds.

The button was also placed above all fixed header controls to prevent any
invisible overlay from intercepting its click or tap.

Expected route:

`/levels?difficulty=Beginner` → `/journey`
