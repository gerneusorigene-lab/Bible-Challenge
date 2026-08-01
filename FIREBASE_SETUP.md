# Firebase Setup

The app reads its Firebase configuration from environment variables at build time. No credentials are hardcoded in source.

## Required environment variables

| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase Web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain (e.g. `your-project.firebaseapp.com`) |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket (e.g. `your-project.firebasestorage.app`) |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Cloud Messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase Web App ID |

## On Replit

All 6 variables are set in the **shared** environment scope, which is automatically available in both the development preview and the production deployment. No additional setup is needed.

If you ever need to point a deployed build at a **different Firebase project** (e.g. a separate staging project), set the override values in Replit Secrets using the `production` environment scope. A `production`-scoped value takes precedence over the matching `shared` value at build time.

> **Note:** Firebase client-side config values are not secret — they identify your Firebase project to the Firebase SDK. Security is enforced by [Firebase Security Rules](https://firebase.google.com/docs/rules), not by keeping these values hidden.

## Missing config behaviour

If any of the 6 variables are absent when the app starts, Firebase is **not initialized** and the app falls back to guest mode:

- A warning is logged to the browser console listing the missing variable names.
- Auth and Firestore sync are disabled; the user can still play.
- No crash or blank screen occurs.

## Enabling Google Sign-In

Google Sign-In must be turned on in your Firebase project before it works:

1. Go to [Firebase console](https://console.firebase.google.com/) → your project → **Authentication** → **Sign-in method**.
2. Click **Google**, toggle **Enable**, and save.

## Adding authorized domains (required before publishing)

Firebase blocks Google Sign-In on any domain not in its allowlist. The `.firebaseapp.com` and `localhost` domains are added automatically; your Replit production URL **must be added manually** before users can sign in on the published app.

Without this step, the sign-in popup throws an `auth/unauthorized-domain` error. The app will display a message naming the blocked domain so you know exactly what to add.

### Steps

1. Open [Firebase console](https://console.firebase.google.com/) → your project → **Authentication** → **Settings** → **Authorized domains**.
2. Click **Add domain**.
3. Paste your published Replit URL, e.g. `your-app-name.replit.app` (**without** `https://`).
4. Click **Add**.

The change takes effect immediately — no redeployment needed.

### Finding your production URL

- In the Replit workspace, open the **Deployments** panel (rocket icon in the left sidebar).
- The URL shown there (e.g. `https://bible-game.replit.app`) is your production URL. Add the hostname part only (strip `https://`).

### Development preview

The `.replit.dev` preview domain used during development is **not** the same as the production URL. Firebase automatically allows `localhost`; the preview domain may need to be added too if you want Google Sign-In to work inside the preview pane.

## Password Reset Email — keeping the flow inside the app

By default Firebase sends reset emails whose link opens Firebase's generic hosted page. The app avoids this in two complementary ways.

### 1. `continueUrl` (already implemented)

`sendPasswordReset` passes an `ActionCodeSettings` object with

```ts
url: `${window.location.origin}/login`
```

This means that after the user resets their password — whether on Firebase's hosted page or a custom action-handler page — Firebase redirects them to the app's `/login` screen. No additional Firebase console change is needed for this part.

### 2. Custom action-handler page (optional but recommended)

To replace Firebase's generic UI entirely, host your own action-handler page and tell Firebase to use it:

1. **Create the page** — Add a route in the app (e.g. `/auth-action`) that reads the `mode` and `oobCode` query parameters Firebase appends to the link and calls [`verifyPasswordResetCode`](https://firebase.google.com/docs/reference/js/auth#verifypasswordresetcode) followed by [`confirmPasswordReset`](https://firebase.google.com/docs/reference/js/auth#confirmpasswordreset). On success, redirect to `/login`.

2. **Register the URL in Firebase Console**
   - Go to [Firebase console](https://console.firebase.google.com/) → your project → **Authentication** → **Templates**.
   - Click the **Password reset** template → edit the pencil icon → **Customize action URL**.
   - Enter the full URL of your action-handler page, e.g. `https://your-app.replit.app/auth-action`.
   - Save. Firebase will now use this URL in every password-reset email it sends.

3. **Add the domain to Authorized Domains** (see the section above) if it is not already listed, so Firebase accepts the handoff.

> **Development:** During development, set the action URL to your `.replit.dev` preview domain, or test with the Firebase Auth emulator (`firebase emulators:start --only auth`).

## Firestore Security Rules

The rules file lives at `firestore.rules` in the repo root and is referenced by `firebase.json`. They restrict the `users/{uid}` collection so that only the signed-in user whose UID matches the document ID can read or write it. Unauthenticated access and cross-user access are both denied.

### Deploying the rules

You need the [Firebase CLI](https://firebase.google.com/docs/cli) installed and logged in to your Firebase account:

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # pick your Firebase project when prompted
firebase deploy --only firestore:rules
```

Run this once after cloning and again any time `firestore.rules` changes. The rules take effect immediately after a successful deploy — no app rebuild needed.

> **Emulator testing:** To verify the rules locally before deploying, run `firebase emulators:start --only firestore` and point the app at the emulator by setting `VITE_FIRESTORE_EMULATOR_HOST=localhost:8080`.

---

## Standalone / self-hosted

Create a `.env` file in `artifacts/bible-game/` (or in the project root if running from there) and add:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=1:your_sender_id:web:your_app_id
```

You can find all these values in the [Firebase console](https://console.firebase.google.com/) → Project settings → Your apps → Web app → SDK setup and configuration.
