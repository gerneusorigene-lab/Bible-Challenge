# Building the iOS App

The `ios/` folder is a native Capacitor-wrapped Xcode project generated from
this app's web build. It's committed to the repo so you can build it locally
with Xcode on a Mac, or let the CI pipeline ship it to TestFlight automatically
on every version tag.

---

## Automated CI builds (recommended)

The `.github/workflows/ios-release.yml` workflow triggers on any `v*` tag and
handles everything — building, signing, and uploading to TestFlight — on a
GitHub-hosted macOS runner. A single `git tag` releases to **both** the App
Store (iOS) and Play Console (Android) simultaneously.

```bash
git tag v1.2.3
git push origin v1.2.3
```

### One-time GitHub Actions secrets setup

Add all of the following under **Settings → Secrets and variables → Actions**
in your GitHub repository. None of these values are stored in the repo.

| Secret name | What it is | How to get it |
|---|---|---|
| `IOS_DISTRIBUTION_CERT_BASE64` | Base64-encoded Apple Distribution `.p12` certificate | In Keychain Access, export your "Apple Distribution" cert as a `.p12`, then: `base64 -i YourCert.p12 \| pbcopy` |
| `IOS_DISTRIBUTION_CERT_PASSWORD` | Password chosen when exporting the `.p12` | You set this during the Keychain export |
| `IOS_PROVISIONING_PROFILE_BASE64` | Base64-encoded App Store distribution `.mobileprovision` | Download from [developer.apple.com/account](https://developer.apple.com/account) → Profiles, then: `base64 -i YourProfile.mobileprovision \| pbcopy` |
| `APP_STORE_CONNECT_API_KEY_ID` | Key ID (10-char string) | App Store Connect → Users and Access → Integrations → App Store Connect API |
| `APP_STORE_CONNECT_API_ISSUER_ID` | Issuer ID (UUID) | Same page as above |
| `APP_STORE_CONNECT_API_KEY_BASE64` | Base64-encoded `.p8` private key | Download the `.p8` when creating the API key (one-time only), then: `base64 -i AuthKey_XXXXXXXXXX.p8 \| pbcopy` |
| `VITE_REVENUECAT_IOS_API_KEY` | RevenueCat iOS public API key | RevenueCat dashboard → Project → Apps → iOS |

### One-time App Store Connect setup

1. Create an **App Store Connect API key** with the *App Manager* role at
   [appstoreconnect.apple.com](https://appstoreconnect.apple.com) →
   Users and Access → Integrations → App Store Connect API.
2. Download the `.p8` private key (only available at creation time).
3. Note the **Key ID** and **Issuer ID** from the same page.
4. Create an **App Store Connect app record** for your bundle ID
   (`com.threetruths.biblegame` or whatever you set in `capacitor.config.ts`).
5. Create a **Distribution certificate** and an **App Store provisioning
   profile** at [developer.apple.com/account](https://developer.apple.com/account) →
   Certificates, Identifiers & Profiles.

### Version numbering

The workflow derives the version automatically from the Git tag using the same
scheme as the Android pipeline:

```
major × 10000 + minor × 100 + patch  →  CFBundleVersion (build number)
```

Examples: `v1.0` → `10000`, `v1.3` → `10300`, `v1.2.3` → `10203`

The human-readable `CFBundleShortVersionString` is set to the tag without the
leading `v` (e.g. `1.2.3`). No manual edits to `Info.plist` are needed.

---

## Local builds on a Mac

Use this path when you want to test on a real device before tagging, or if you
need to debug something the CI pipeline doesn't cover.

### One-time setup

1. `git pull` (or clone) this repo so you have the `artifacts/bible-game/ios`
   folder.
2. Install [CocoaPods](https://cocoapods.org) if you don't have it:
   `sudo gem install cocoapods`
3. From `artifacts/bible-game/ios/App`, run `pod install`.
4. Open `artifacts/bible-game/ios/App/App.xcworkspace` in Xcode (not the
   `.xcodeproj` file — Capacitor apps use CocoaPods, so the workspace is
   required).
5. In Xcode, select your Team under **Signing & Capabilities** so Xcode can
   sign a build for a device or simulator.

### Building and running

- Select a simulator or your connected device as the run target, then hit
  **Run (⌘R)** in Xcode.
- For a manual TestFlight upload use Xcode's **Archive** workflow
  (**Product → Archive**), then distribute via **App Store Connect**.

### Re-syncing after you change the app's UI/code

Whenever you update the React app and want the iOS project to pick up the
changes, run this from `artifacts/bible-game` (needs Node/pnpm — do this on
Replit or any machine with the repo):

```bash
pnpm run cap:sync
```

This rebuilds the web app and copies the output into `ios/App/App/public`,
then re-syncs both the Android and iOS native projects. Then re-run the Xcode
build on your Mac.

---

## Notes

- Real in-app purchases only work when RevenueCat and an App Store Connect
  product are configured — see `REVENUECAT_SETUP.md`.
- The app works fully offline; it doesn't call any backend API, so no extra
  network configuration is needed in the Xcode project.
- For the Android equivalent of this pipeline, see `ANDROID_BUILD.md` and
  `.github/workflows/android-release.yml`.
