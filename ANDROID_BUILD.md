# Building the Android App

The `android/` folder is a native Capacitor-wrapped Android project generated from
this app's web build. It's committed to the repo so you can build it locally with
Android Studio or automatically via GitHub Actions CI.

---

## Automated release builds (GitHub Actions — recommended)

Every time you push a version tag (e.g. `v1.2`), a GitHub Actions workflow
builds, signs, and **pushes the AAB straight to the Play Console internal
track** — no Android Studio, no manual download required.

### One-time CI setup

#### Keystore secrets

1. **Generate a release keystore** (skip if you already have one):
   ```bash
   keytool -genkey -v \
     -keystore release.jks \
     -alias bible-game-key \
     -keyalg RSA -keysize 2048 -validity 10000
   ```
   Keep `release.jks` safe — losing it means you can never update the app on
   the Play Store with the same signing identity.

2. **Base64-encode the keystore**:
   ```bash
   # macOS
   base64 -i release.jks | pbcopy      # copies to clipboard
   # Linux
   base64 release.jks
   ```

3. **Add keystore GitHub Actions secrets** (repo → Settings → Secrets → Actions → New secret):

   | Secret name                        | Value                                      |
   |------------------------------------|--------------------------------------------|
   | `KEYSTORE_BASE64`                  | Paste the base64 output from step 2        |
   | `KEYSTORE_STORE_PASSWORD`          | Password you set when creating the keystore|
   | `KEYSTORE_KEY_ALIAS`               | Alias you chose (e.g. `bible-game-key`)    |
   | `KEYSTORE_KEY_PASSWORD`            | Password for that key                      |
   | `VITE_REVENUECAT_ANDROID_API_KEY`  | RevenueCat Android public key              |

#### One-time Firebase Test Lab setup

After a successful Gradle build the CI workflow runs a **robo smoke test** on
Firebase Test Lab before uploading to Play Console. The robo crawler launches
the app on a real cloud device and fails the workflow if the app crashes on
startup — no test code required.

**Prerequisites:** a Firebase project linked to the same Google account as your
Play Console.

1. **Enable the required APIs** in [Google Cloud Console](https://console.cloud.google.com/)
   for your Firebase project:
   - Cloud Testing API (`testing.googleapis.com`)
   - Cloud Tool Results API (`toolresults.googleapis.com`)

   Quick way: run this once with `gcloud` (or use the Console UI):
   ```bash
   gcloud services enable testing.googleapis.com toolresults.googleapis.com \
     --project YOUR_FIREBASE_PROJECT_ID
   ```

2. **Create a service account** for Test Lab CI access:
   1. Go to **IAM & Admin → Service Accounts → Create Service Account**.
      Name it something like `github-testlab-ci`.
   2. Grant it the role **Firebase Test Lab Admin**
      (`roles/cloudtestservice.testAdmin`).
   3. Open the new account → **Keys → Add Key → Create new key → JSON**
      and download the `.json` file.

3. **Add the secrets to GitHub** (repo → Settings → Secrets → Actions):

   | Secret name                  | Value                                                     |
   |------------------------------|-----------------------------------------------------------|
   | `FIREBASE_TEST_LAB_SA_JSON`  | Full contents of the `.json` service-account key file     |
   | `FIREBASE_PROJECT_ID`        | Your Firebase project ID (e.g. `my-app-a1b2c`)            |

   > The project ID is visible in the Firebase console under
   > **Project Settings → General → Project ID**.

   > **Security tip:** delete the local `.json` file after pasting it into
   > GitHub Secrets.

Once configured, every CI run will automatically:
- Launch the signed AAB on each device in the matrix below
- Fail and block the Play Console upload if the app crashes on launch on **any** device
- Log the Test Lab result URL in the CI output for easy inspection

#### Test Lab device matrix

The smoke test runs in parallel on three representative form factors to catch
device-specific crashes before they reach testers:

| Device | Firebase model ID | Android API | Why included |
|---|---|---|---|
| Pixel 2 | `Pixel2` | 28 (Android 9) | Baseline mid-range phone; the original smoke-test device |
| Pixel 6 | `Pixel6` | 33 (Android 13) | Modern flagship; catches regressions on current OS versions |
| Nexus 5 | `Nexus5` | 26 (Android 8) | Older/smaller device; catches API 26 and low-end screen issues |

A launch failure on **any** device fails the workflow and blocks the Play
Console upload.

#### One-time Play Console setup

4. **Create a Google Cloud service account** for CI uploads:
   1. Open [Google Cloud Console](https://console.cloud.google.com/) and select
      (or create) the project linked to your Play Console account.
   2. Go to **IAM & Admin → Service Accounts → Create Service Account**.
      Name it something like `github-play-ci`.
   3. Skip role assignment on the Cloud side — permissions are granted in Play
      Console instead.
   4. Open the new service account, go to **Keys → Add Key → Create new key →
      JSON** and download the `.json` file.

5. **Grant the service account access in Play Console**:
   1. Open [Google Play Console](https://play.google.com/console) →
      **Setup → API access**.
   2. Link your Play Console account to the same Google Cloud project from
      step 4 (one-time; you may already be linked).
   3. Find the service account in the list and click **Grant access**.
   4. Choose your app, set the role to **Release manager** (or at minimum
      grant the "Releases" permission), and save.

6. **Add the service-account secret** to GitHub:

   | Secret name                        | Value                                      |
   |------------------------------------|--------------------------------------------|
   | `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` | Paste the full contents of the `.json` key file |

   > **Security tip:** delete the local `.json` file after pasting it into
   > GitHub Secrets — it never needs to live on disk.

#### Trigger a release

7. **Push a release tag**:
   ```bash
   git tag v1.0
   git push origin v1.0
   ```

The workflow (`.github/workflows/android-release.yml`) will:
- Build and sign the AAB
- Upload a copy as a GitHub Actions artifact (30-day backup)
- Push the AAB to the **internal track** in Play Console automatically

Once it lands in the internal track you can promote it to alpha/beta/production
directly inside Play Console with no file uploads.

---

## One-time setup on your PC (manual builds)

1. `git pull` (or clone) this repo so you have the `artifacts/bible-game/android` folder.
2. Open Android Studio → **Open** → select `artifacts/bible-game/android`.
3. Let Gradle sync finish (first sync can take a few minutes).

---

## Debug build (quick testing, sideload only)

Option A — Android Studio UI:
- Build → Build Bundle(s) / APK(s) → Build APK(s)
- Find the file at `android/app/build/outputs/apk/debug/app-debug.apk`

Option B — command line, from `artifacts/bible-game/android`:
```
./gradlew assembleDebug
```

Share `app-debug.apk` with testers (AirDrop, email, Drive, etc). They'll need to
allow "Install unknown apps" the first time. This is fine for a handful of testers
but **not** suitable for the Play Store.

---

## Release build (manual / Play Store distribution)

For a Play Store upload you need a **signed AAB**. Full step-by-step instructions
are in **`GOOGLE_PLAY_PUBLISH.md`** — read that first. The short version:

1. Generate a release keystore once with `keytool` (see `GOOGLE_PLAY_PUBLISH.md`).
2. Copy `android/keystore.properties.template` → `android/keystore.properties`
   and fill in your keystore path and passwords (this file is git-ignored).
3. Run `pnpm run cap:sync` on Replit (or locally) to bake the latest web build
   and the `VITE_REVENUECAT_ANDROID_API_KEY` secret into the bundle.
4. Build the signed AAB:

   Option A — Android Studio: **Build → Generate Signed Bundle / APK… →
   Android App Bundle → release**

   Option B — command line:
   ```
   ./gradlew bundleRelease
   ```
   Output: `android/app/build/outputs/bundle/release/app-release.aab`

5. Upload the AAB to Google Play Console (see `GOOGLE_PLAY_PUBLISH.md`).

---

## Re-syncing after you change the app's UI/code

Whenever you update the React app and want the Android project to pick up the
changes, run this from `artifacts/bible-game` (needs Node/pnpm — do this on
Replit or any machine with the repo):

```
pnpm run cap:sync
```

This rebuilds the web app with the right settings for a packaged app (no Replit
base-path assumptions) and copies the output into `android/app/src/main/assets/public`.
Then re-run the Gradle build on your PC (or push a tag for CI) to produce a fresh AAB.

---

## Versioning (automatic via CI)

`versionCode` and `versionName` are set **automatically** by the CI workflow
from the Git tag — you never need to touch `build.gradle` manually.

### Convention

| Git tag | `versionName` | `versionCode` |
|---------|---------------|---------------|
| `v1.0`  | `1.0`         | `10000`       |
| `v1.3`  | `1.3`         | `10300`       |
| `v1.2.3`| `1.2.3`       | `10203`       |

The formula is `major × 10 000 + minor × 100 + patch`. This guarantees a
strictly-increasing integer as long as you increment any semver component
between releases, which Play Store requires.

### Rules

- **Always use a new tag for each Play Store upload.** Re-pushing the same tag
  produces the same `versionCode` and the upload will be rejected.
- Tags must follow semver format: `vMAJOR.MINOR` or `vMAJOR.MINOR.PATCH`.
  Non-numeric suffixes (e.g. `v1.0-beta`) will cause the calculation to fail.
- The value baked into `android/app/build.gradle` in the repo is a placeholder;
  the CI step overwrites it before every Gradle build.

### Releasing a new version

```bash
git tag v1.1          # or v1.1.1, v2.0, etc.
git push origin v1.1
```

The workflow will compute `versionCode 10100`, set `versionName "1.1"`,
build the signed AAB, and push it to the Play Console internal track.

---

## Notes

- **Debug builds** work fine for sharing with a few testers via sideload.
- **Release builds** require the signing keystore setup described above and in
  `GOOGLE_PLAY_PUBLISH.md`.
- The "Go Premium" in-app purchase requires a RevenueCat project, Play Store
  product, and the `VITE_REVENUECAT_ANDROID_API_KEY` Replit secret — see
  `REVENUECAT_SETUP.md`. Without that configuration, the Unlock/Restore buttons
  will show a "store unavailable" message (the DEV toggle on the Home screen
  still works for testing without any store setup).
