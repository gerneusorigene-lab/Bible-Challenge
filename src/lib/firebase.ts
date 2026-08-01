import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

/**
 * Firebase client configuration.
 *
 * These values are intentionally non-secret (Firebase client config is
 * designed to be public — security is enforced by Firebase Security Rules,
 * not by keeping these keys hidden). They are read from Vite env vars so
 * different Firebase projects can be used for dev vs production without
 * changing source code.
 *
 * Set VITE_FIREBASE_* as Replit env vars (shared scope covers both dev and
 * production). See FIREBASE_SETUP.md for the full list of required variables.
 */

const REQUIRED_VARS = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
] as const;

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

/** True when all required env vars are present and non-empty. */
export const isFirebaseConfigured: boolean = REQUIRED_VARS.every(
  (key) => !!import.meta.env[key]
);

const missing = REQUIRED_VARS.filter((key) => !import.meta.env[key]);
if (missing.length > 0) {
  console.error(
    `[Firebase] Missing environment variable(s): ${missing.join(", ")}. ` +
      "Sign-in and progress sync are disabled. " +
      "Add the VITE_FIREBASE_* variables to your Replit environment (shared scope). " +
      "See artifacts/bible-game/FIREBASE_SETUP.md for details."
  );
}

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    // Explicitly request local (IndexedDB / localStorage) persistence so the
    // session survives page refreshes and browser restarts. This is already the
    // default on web, but declaring it here makes the intent clear and ensures
    // it can't be accidentally overridden elsewhere.
    setPersistence(auth, browserLocalPersistence).catch((err) => {
      console.warn("[Firebase] Could not set auth persistence:", err);
    });
    db = getFirestore(app);
  } catch (err) {
    console.error("[Firebase] Initialization failed:", err);
  }
}

export { app, auth, db };
