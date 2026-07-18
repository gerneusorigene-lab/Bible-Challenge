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

4. **Set the API keys as env vars** (not secrets — RevenueCat's client SDK
   keys are public by design, but they still shouldn't be hardcoded in
   source):
   - `VITE_REVENUECAT_IOS_API_KEY`
   - `VITE_REVENUECAT_ANDROID_API_KEY`

   These are read by `src/lib/revenuecat.ts` via `import.meta.env`, so they
   must be set before running `pnpm run cap:sync` / building the app — Vite
   bakes them into the JS bundle at build time. Ask the Replit agent to set
   them for you once you have the keys ("set VITE_REVENUECAT_IOS_API_KEY to
   ...").

5. **Sync and build** the native project:
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
