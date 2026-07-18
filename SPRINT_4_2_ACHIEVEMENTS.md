# Sprint 4.2 — Achievements

## Included

- Dedicated Achievement Gallery screen
- 16 bilingual achievements grouped by category
- Locked and unlocked presentation
- Persistent unlock date for every achievement
- Automatic unlock checks using player statistics and Story Progress
- New-achievement notification on the Journey Complete screen
- Achievement counter on the Home screen
- Reset Progress now also clears achievement history

## Installation

Copy the files from this update package into the existing project and choose **Replace existing files**.

Then run:

```cmd
npm run typecheck
npm run build
npm run dev
```

## Suggested tests

1. Open Achievements from the Home screen.
2. Confirm the gallery displays 16 locked/unlocked trophies.
3. Complete one story and return to the end screen.
4. Confirm First Light and Story Seeker unlock as applicable.
5. Open the gallery and confirm the unlock date is shown.
6. Use Reset Progress and confirm achievements return to locked status.
