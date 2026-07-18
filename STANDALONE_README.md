# Three Truths and One Lie — standalone export

This is a self-contained copy of the game (normally part of a larger pnpm
monorepo on Replit), exported so it can be built independently on your PC.

## Setup

```
npm install
```

(You can use `pnpm install` or `yarn install` instead if you prefer — this
folder no longer depends on the original monorepo's workspace/catalog setup.)

## Run it in a browser (optional, just to check it works)

```
npm run dev
```

## Build the Android APK

### Normal build (what real users get — free tier gated, must purchase to unlock)

```
npm run cap:sync
```

### Test build with a premium toggle (for trying out the full/premium experience yourself)

```
npm run cap:sync:test
```

This compiles a small "🛠 DEV: Premium ON/OFF" button onto the home screen
that instantly flips your local premium status — no real purchase or store
needed. It's only meant for your own testing; don't ship this build to real
users, since anyone could tap the same button to unlock premium for free.

**Important:** if you already built and opened the app in Android Studio once
using `npm run cap:sync` (the normal build), you need to run
`npm run cap:sync:test` and then re-run the app from Android Studio (the
green ▶ Run button, or Build → Rebuild Project first) so it picks up the new
web bundle — just having Android Studio open doesn't re-sync automatically.

After running the sync command, open the `android` folder in Android Studio,
let Gradle sync, then Build → Build APK(s) (or `./gradlew assembleDebug` from
that folder). The APK lands in
`android/app/build/outputs/apk/debug/app-debug.apk`.

See `ANDROID_BUILD.md` for more detail, and `IOS_BUILD.md` if you also want
an iOS build (requires a Mac + Xcode).
