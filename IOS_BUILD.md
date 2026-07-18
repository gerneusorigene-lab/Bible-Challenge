# Building the iOS App

The `ios/` folder is a native Capacitor-wrapped Xcode project generated from
this app's web build. It's committed to the repo so you can build it locally
with Xcode on a Mac (Replit's Linux container cannot build or sign iOS apps).

## One-time setup on your Mac

1. `git pull` (or clone) this repo so you have the `artifacts/bible-game/ios`
   folder.
2. Install [CocoaPods](https://cocoapods.org) if you don't have it: `sudo gem install cocoapods`.
3. From `artifacts/bible-game/ios/App`, run `pod install`.
4. Open `artifacts/bible-game/ios/App/App.xcworkspace` in Xcode (not the
   `.xcodeproj` file — Capacitor apps use CocoaPods, so the workspace is
   required).
5. In Xcode, select your Team under Signing & Capabilities so it can sign a
   build for a device or simulator.

## Building and running

- Select a simulator or your connected device as the run target, then hit
  Run (⌘R) in Xcode.
- For TestFlight/App Store distribution, use Xcode's Archive workflow — ask
  if you want help walking through that.

## Re-syncing after you change the app's UI/code

Whenever you update the React app and want the iOS project to pick up the
changes, run this from `artifacts/bible-game` (needs Node/pnpm — do this on
Replit or any machine with the repo):

```
pnpm run cap:sync
```

This rebuilds the web app with the right settings for a packaged app and
copies the output into `ios/App/App/public`, and re-syncs both the Android
and iOS native projects. Then re-run the Xcode build on your Mac.

## Notes

- Real in-app purchases only work when RevenueCat and an App Store Connect
  product are configured — see `REVENUECAT_SETUP.md`.
- The app works fully offline; it doesn't call any backend API, so no extra
  network configuration is needed in the Xcode project.
