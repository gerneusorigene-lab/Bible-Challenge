# Publishing to Google Play

This guide walks through every step needed to get the app into Google Play's
internal test track and complete a real end-to-end purchase. All of these steps
happen **outside Replit** — you need a Google Play Developer account, Android
Studio, and a test Android device.

---

## Prerequisites

| What you need | Where to get it |
|---|---|
| Google Play Developer account | [play.google.com/console](https://play.google.com/console) — one-time $25 fee |
| Android Studio (latest stable) | [developer.android.com/studio](https://developer.android.com/studio) |
| Java 17+ (bundled with Android Studio) | Included in Android Studio |
| This repo cloned locally | `git pull` after any Replit changes |

---

## Step 1 — Generate a release keystore

You only do this **once**. Keep the resulting `.jks` file and your passwords in
a safe place (password manager). Losing the keystore locks you out of updating
your app on the Play Store forever.

Run this from a terminal on your PC (the `keytool` command is inside Android
Studio's JDK, usually at `~/Library/Java/JavaVirtualMachines/.../bin/keytool`
on Mac, or add Android Studio's JDK to your PATH):

```bash
keytool -genkeypair \
  -v \
  -keystore release.jks \
  -alias biblegame \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

You will be prompted for a keystore password, your name / organisation / country
(for the certificate — these can be anything), and a key password. Use strong
passwords and save them.

Place `release.jks` **one level above** the `android/` folder
(i.e. at `artifacts/bible-game/release.jks`) so Gradle can find it via the path
`../release.jks` used in the template below.

---

## Step 2 — Configure signing in the Android project

1. Copy the template:
   ```bash
   cp artifacts/bible-game/android/keystore.properties.template \
      artifacts/bible-game/android/keystore.properties
   ```

2. Edit `keystore.properties` (inside `android/`) and fill in your values:
   ```properties
   storeFile=../release.jks
   storePassword=YOUR_STORE_PASSWORD
   keyAlias=biblegame
   keyPassword=YOUR_KEY_PASSWORD
   ```
   `keystore.properties` is already git-ignored — do **not** commit it.

---

## Step 3 — Sync the web app into the Android project

On Replit (or your local machine with Node/pnpm installed), from
`artifacts/bible-game`:

```bash
pnpm run cap:sync
```

This rebuilds the React app with production settings and copies it into
`android/app/src/main/assets/public`. Make sure `VITE_REVENUECAT_ANDROID_API_KEY`
is set as a Replit secret before running this — Vite bakes it into the bundle
at build time (see `REVENUECAT_SETUP.md`).

Then `git pull` on your local machine so Android Studio picks up the synced
assets.

---

## Step 4 — Build a signed release AAB in Android Studio

1. Open Android Studio → **Open** → select `artifacts/bible-game/android`.
2. Let Gradle sync complete.
3. **Build → Generate Signed Bundle / APK…**
4. Choose **Android App Bundle** (AAB) — Play Store requires AAB, not APK.
5. Select (or create) the keystore:
   - Click **Choose existing…** → navigate to your `release.jks`.
   - Enter store password, key alias (`biblegame`), key password.
   - Tick **Remember passwords** if you want Android Studio to cache them.
6. Choose **release** build variant. Click **Next → Finish**.
7. The signed AAB appears at:
   ```
   android/app/build/outputs/bundle/release/app-release.aab
   ```

### Command-line alternative (from `artifacts/bible-game/android/`):
```bash
./gradlew bundleRelease
```
(Gradle reads `keystore.properties` automatically — no extra flags needed.)

---

## Step 5 — Create your app in Google Play Console

1. Open [play.google.com/console](https://play.google.com/console) and sign in.
2. Click **Create app**.
3. Fill in:
   - **App name:** Three Truths and One Lie (or your preferred store title)
   - **Default language:** English (United States) — or French if you prefer
   - **App or game:** Game
   - **Free or paid:** Free (the app is free; the premium unlock is an in-app purchase)
4. Accept the declarations and click **Create app**.

---

## Step 6 — Create the in-app product in Play Console

This must exist before RevenueCat can link to it.

1. In your app's Play Console page, go to **Monetize → Products →
   In-app products**.
2. Click **Create product**.
3. Fill in:
   - **Product ID:** `premium_unlock`
     *(must match what you set in RevenueCat — see `REVENUECAT_SETUP.md`)*
   - **Name:** Go Premium
   - **Description:** Unlock all quiz packs and remove ads.
   - **Default price:** $4.99 (or your chosen price)
   - **Status:** Active
4. Save.

---

## Step 7 — Link the Play Store product to RevenueCat

Follow `REVENUECAT_SETUP.md` (steps 2–5) to:
- Create a RevenueCat project (if you haven't already).
- Add an **Android app** to the project with package name
  `com.threetruths.biblegame`.
- Create the `premium` entitlement and attach the `premium_unlock` product.
- Create a default offering with a **Lifetime** package.
- Copy the Android public API key (`goog_…`) and set it as the
  `VITE_REVENUECAT_ANDROID_API_KEY` Replit secret.

After setting the secret, re-run `pnpm run cap:sync` and rebuild the AAB
(Steps 3–4) so the key is baked in.

---

## Step 8 — Upload the AAB to the internal test track

1. In Play Console, go to **Testing → Internal testing**.
2. Click **Create new release**.
3. Under **App bundles**, click **Upload** and select
   `android/app/build/outputs/bundle/release/app-release.aab`.
4. Fill in **Release notes** (e.g. "Initial internal test release").
5. Click **Save → Review release → Start rollout to Internal testing**.

> **Note on Play App Signing:** When you upload your first AAB, Play Console
> will ask you to opt in to Play App Signing (Google re-signs your app with a
> Play-managed key for distribution). Accept this — it is the recommended
> approach and is required for AABs. You keep your upload key (your `.jks`);
> Google manages the distribution key.

---

## Step 9 — Add license testers (for free test purchases)

Without this, test purchases on the internal track will charge real money.

1. In Play Console, go to **Setup → License testing**.
2. Add the Google accounts of your testers.
3. Each tester must also be added to the internal test track's tester list
   (Testing → Internal testing → Testers tab → manage email lists).

Testers must install the app **from the Play Store** (not sideload) using the
internal test link Play Console provides.

---

## Step 10 — Verify end-to-end purchase on a test device

1. On the test device, open the Play Store and search for your internal test
   link (or use the opt-in URL from Play Console's Internal testing page).
2. Install the app from the Play Store.
3. Open the app → tap **Go Premium** → the native Google Play purchase sheet
   should appear.
4. Complete the purchase (no charge for license testers).
5. The app should immediately reflect `isPremium = true` (paywall replaced by
   premium content).
6. Tap **Restore Purchases** on a fresh install — premium should be re-granted.

---

## Bumping the version for future releases

Every upload to Play Console needs a higher `versionCode` (integer) and a
new `versionName` (string). Edit these in
`artifacts/bible-game/android/app/build.gradle`:

```groovy
versionCode 2        // increment by 1 each release
versionName "1.1"    // human-readable, shown in the store
```

Then re-sync, rebuild the AAB, and upload a new release.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `INSTALL_FAILED_UPDATE_INCOMPATIBLE` | The debug APK is installed; uninstall it first, then install from Play. |
| Purchase sheet says "Item unavailable" | The product isn't Active in Play Console, or the app isn't published to any track yet. |
| RevenueCat logs "Product not found" | Product ID in RevenueCat doesn't match the one in Play Console (`premium_unlock`). |
| Build fails with "keystore not found" | Check `storeFile` path in `keystore.properties` — it's relative to the `android/` directory. |
| AAB upload rejected "version code already exists" | Bump `versionCode` in `build.gradle` and rebuild. |

---

## Files involved

| File | Purpose |
|---|---|
| `android/app/build.gradle` | Signing config (reads `keystore.properties`) |
| `android/keystore.properties` | Your secret credentials — **git-ignored, never commit** |
| `android/keystore.properties.template` | Safe template committed to the repo |
| `REVENUECAT_SETUP.md` | RevenueCat project setup & API key instructions |
| `ANDROID_BUILD.md` | Debug and release build quick-reference |
