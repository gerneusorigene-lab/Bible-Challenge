# Building the Android APK

The `android/` folder is a native Capacitor-wrapped Android project generated from
this app's web build. It's committed to the repo so you can build it locally with
Android Studio (no Replit involvement needed for the actual APK build).

## One-time setup on your PC

1. `git pull` (or clone) this repo so you have the `artifacts/bible-game/android` folder.
2. Open Android Studio → **Open** → select `artifacts/bible-game/android`.
3. Let Gradle sync finish (first sync can take a few minutes).

## Building the APK

Option A — Android Studio UI:
- Build → Build Bundle(s) / APK(s) → Build APK(s)
- Find the file at `android/app/build/outputs/apk/debug/app-debug.apk`

Option B — command line, from `artifacts/bible-game/android`:
```
./gradlew assembleDebug
```

Share `app-debug.apk` with testers (AirDrop, email, Drive, etc). They'll need to
allow "Install unknown apps" the first time, since it isn't distributed through
the Play Store.

## Re-syncing after you change the app's UI/code

Whenever you update the React app and want the Android project to pick up the
changes, run this from `artifacts/bible-game` (needs Node/pnpm — do this on
Replit or any machine with the repo):

```
pnpm run cap:sync
```

This rebuilds the web app with the right settings for a packaged app (no Replit
base-path assumptions) and copies the output into `android/app/src/main/assets/public`.
Then re-run the Gradle build on your PC to produce a fresh APK.

## Notes

- This is a **debug** build — fine for sharing with a few testers. For a production
  release (Play Store or wider distribution) you'd additionally need to generate a
  signing keystore and build a signed release APK/AAB — ask if you want help with that.
- The app works fully offline; it doesn't call any backend API, so no extra network
  configuration is needed in the Android project.
- The "Go Premium" in-app purchase requires a RevenueCat project, App Store/Play
  Store products, and API keys before it works on a real device — see
  `REVENUECAT_SETUP.md` for the full setup guide. Without that configuration, the
  Unlock/Restore buttons will show a "store unavailable" message (the DEV toggle on
  the Home screen still works for testing without any store setup).
