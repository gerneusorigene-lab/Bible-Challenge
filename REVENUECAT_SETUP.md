# In-App Purchase Setup (RevenueCat)

"Go Premium" ($4.99, one-time, non-consumable) is implemented with
[RevenueCat](https://www.revenuecat.com), which sits in front of Apple
StoreKit and Google Play Billing so the app never needs its own receipt
validation or purchase backend.

This doc is for the app owner. None of these steps can be done from Replit —
they require your own Apple Developer and Google Play Developer accounts.

## What's already implemented

- `@revenuecat/purchases-capacitor` is installed and wired into
  `src/hooks/useEntitlement.ts` (the single source of truth for `isPremium`,
  consumed by the Paywall and all gating logic).
- On a native build, the app configures RevenueCat on launch, checks the
  `premium` entitlement, and offers Unlock / Restore backed by real store
  purchases. In the web preview there is no store, so the dev toggle
  (bottom of the Home screen, dev builds only) is used instead.
- Errors are mapped to bilingual (EN/FR) messages: cancelled, no connection,
  store unavailable, or "no previous purchase found" for restore.
- API keys are read from env vars, never hardcoded (see below).

## One-time setup

1. **Apple Developer account** ($99/yr) and **Google Play Developer account**
   ($25 one-time), if you don't already have them.

2. **Create the non-consumable product** in both stores, using the *same*
   logical product on each side (pick one product ID convention and keep it,
   e.g. `premium_unlock`):
   - App Store Connect → your app → Features → In-App Purchases → new
     **Non-Consumable**.
   - Google Play Console → your app → Monetize → Products → In-app products →
     new **one-time product**.

3. **Create a RevenueCat project** at [app.revenuecat.com](https://app.revenuecat.com):
   - Add an iOS app (App Store) and an Android app (Play Store) to the
     project, using the bundle ID / package name `com.threetruths.biblegame`
     (see `capacitor.config.ts`).
   - Create an **entitlement** with identifier exactly `premium` (this is
     hardcoded as `PREMIUM_ENTITLEMENT_ID` in `src/lib/revenuecat.ts`).
   - Attach the App Store and Play Store products you created in step 2 to
     that entitlement.
   - Create a **default offering** with a package (type "Lifetime" fits a
     one-time purchase best) containing those products.
   - Under each app's settings, copy the **public** API key (Project settings
     → API keys — one key per app, safe to embed in a client build).

4. **Find your Android API key** in the RevenueCat dashboard:
   - Open [app.revenuecat.com](https://app.revenuecat.com) and select your project.
   - Go to **Project settings → API keys** (left sidebar).
   - Under **Public app-specific keys**, find the row for your Android app.
     The key starts with `goog_` and is safe to embed in a client build.
   - Copy that value — you'll need it in the next step.

5. **Add the key as a Replit secret** so Vite bakes it into the APK bundle:
   - In the Replit workspace, open the **Secrets** tab (🔒 padlock icon in
     the left sidebar, or Tools → Secrets).
   - Confirm (or add) a secret named **`VITE_REVENUECAT_ANDROID_API_KEY`**
     with the `goog_…` value you copied.
   - If you also have an iOS key, add **`VITE_REVENUECAT_IOS_API_KEY`** the
     same way (iOS key starts with `appl_`).

   `src/lib/revenuecat.ts` reads these via `import.meta.env`. Because Vite
   bakes secrets into the JS bundle at **build time**, the secrets must be
   present before you run `pnpm run cap:sync` or open Android Studio to
   build the APK. Ask the Replit agent to verify the secret is set ("is
   VITE_REVENUECAT_ANDROID_API_KEY set?") before you kick off a build.

6. **Sync and build** the native project:
   ```
   pnpm run cap:sync
   ```
   Then build in Android Studio (`ANDROID_BUILD.md`) or Xcode on a Mac
   (`IOS_BUILD.md`).

## Testing purchases

- **Without store accounts yet**: use the DEV toggle on the Home screen
  (visible only in development builds) to flip `isPremium` locally — this
  never touches RevenueCat.
- **With real accounts, before release**: use each store's sandbox/test
  track (App Store Connect sandbox testers, Play Console internal testing +
  license testers) so purchases don't charge real money. RevenueCat detects
  sandbox purchases automatically.
- Tapping **Unlock Premium** launches the native store sheet; a successful
  purchase updates `isPremium` immediately. **Restore Purchases** re-grants
  premium to anyone who already bought it on the same store account.
  Cancelling the store sheet or losing connectivity shows a specific
  bilingual message instead of a generic failure.

## Notes

- No custom backend or database table is used for purchase state — RevenueCat
  is the single source of truth, matched by store account (Apple ID / Google
  account), not by any account system in this app.
- This app doesn't have user accounts, so entitlement is tied to the device's
  store account. If a user reinstalls or switches devices under the same
  store account, "Restore Purchases" on the Paywall recovers it.


## Optional: selling on the web (RevenueCat Web Billing)

The deployed web version of the game (played in a browser, not the packaged
app) can sell the same $4.99 premium unlock through
[RevenueCat Web Billing](https://www.revenuecat.com/docs/web/web-billing),
which is backed by Stripe instead of the App/Play Store. This is entirely
optional — skip this section if you only plan to sell through the app stores.

**What's already implemented:** `src/lib/revenuecat-web.ts` and
`src/hooks/useEntitlement.ts` automatically detect the runtime platform. A
packaged iOS/Android build always uses the native store path above. A browser
build uses the Web Billing path below whenever a web API key is configured;
otherwise it falls back to the local dev toggle, exactly like today.

1. **Connect Stripe** to your RevenueCat project (Project settings →
   Web Billing → Connect Stripe). This is required — Web Billing charges
   through Stripe.
2. **Add a Web Billing app** to the same RevenueCat project used for iOS/
   Android (or a fresh project if you're only selling on the web).
3. **Create a web product** for the same non-consumable ($4.99 one-time)
   purchase, and attach it to the existing `premium` entitlement (the same
   identifier already hardcoded as `PREMIUM_ENTITLEMENT_ID`) alongside the
   App Store / Play Store products.
4. **Create an offering** (or reuse the default one) with a package —
   "Lifetime" fits a one-time purchase best — containing the web product.
5. **Copy the Web Billing public API key** (Project settings → API keys →
   the Web Billing app's key) and set it as `VITE_REVENUECAT_WEB_API_KEY`
   (ask the Replit agent to set it once you have it). Like the iOS/Android
   keys, this is a public client key, safe to embed in the built JS bundle.
6. Redeploy the web app. Vite bakes the key in at build time, so it must be
   set before building/publishing.

**Testing:** RevenueCat's Web Billing sandbox mode uses Stripe test API keys
under the hood — no real charges — so you can test the full checkout flow
before going live. See RevenueCat's Web Billing docs for switching between
sandbox and production keys.


### Known limitation: web purchases don't carry to the mobile apps

This app has no user accounts, so each billing path identifies the customer
differently:

- **Native (iOS/Android):** tied to the device's Apple ID / Google account.
- **Web:** tied to an anonymous ID generated once and stored in that
  browser's `localStorage` — there is no login step.

A player who buys premium on the web will **not** automatically see it
unlocked in the mobile app (and vice versa), because there's nothing
connecting the two identities. They would need to purchase (or restore) once
per platform. Clearing browser data, using a different browser, or switching
devices also loses the connection to a web purchase, since it isn't tied to
an account.

Fixing this would require adding user accounts / sign-in and calling
RevenueCat's `logIn` with a shared user ID on all platforms, tying the web
browser identity and the store account identity together — a larger change,
out of scope here.
