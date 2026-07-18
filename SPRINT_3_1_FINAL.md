# Sprint 3.1 Final — Polished Play Screen

## Completed

- Reduced the height and padding of the topic/header panel.
- Kept the Hint action on the same line as “Which statement is the lie?”.
- Removed the repeated instruction line.
- Reduced the cinematic banner height to preserve vertical space.
- Removed the hard-coded Noah image fallback.
- Added safe topic-aware handling for the temporary Noah, David, and Paul artwork.
- Stories without matching artwork now show a neutral Bible-themed banner instead of an incorrect story image.
- Future story-specific image files continue to work automatically through `currentLevel.image`.
- Existing game logic, challenge timer, hint behavior, scoring, navigation menu, and leave confirmation remain intact.

## Validation

- `npm run typecheck` — passed
- `npm run build` — passed

## Next Sprint

Sprint 3.2 will separate the Daily Challenge and Achievements experiences, then add story-specific artwork and completion celebrations.
