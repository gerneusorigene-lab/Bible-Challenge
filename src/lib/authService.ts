import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  deleteUser,
} from "firebase/auth";

import { auth } from "./firebase";

/**
 * Register a new user
 */
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (name.trim()) {
    await updateProfile(credential.user, {
      displayName: name,
    });
  }

  return credential.user;
}

/**
 * Login
 */
export async function loginUser(
  email: string,
  password: string
) {
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return credential.user;
}

/**
 * Logout
 */
export async function logoutUser() {
  await signOut(auth);
}

/**
 * Permanently delete the currently signed-in Firebase account.
 *
 * Firebase may require the user to sign in again if their
 * authentication session is no longer recent enough.
 */
export async function deleteCurrentUserAccount() {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No user is currently signed in.");
  }

  await deleteUser(user);
}