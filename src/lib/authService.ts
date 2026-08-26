import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  deleteUser,
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

import { auth } from "./firebase";

export async function registerUser(name: string, email: string, password: string) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  if (name.trim()) {
    await updateProfile(credential.user, { displayName: name });
  }
  return credential.user;
}

export async function loginUser(email: string, password: string) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function resetPassword(email: string) {
  await sendPasswordResetEmail(auth, email.trim());
}

export async function changePassword(
  email: string,
  currentPassword: string,
  newPassword: string
) {
  const normalizedEmail = email.trim();
  let user = auth.currentUser;

  if (
    user &&
    user.email &&
    user.email.toLowerCase() === normalizedEmail.toLowerCase()
  ) {
    const credential = EmailAuthProvider.credential(
      normalizedEmail,
      currentPassword
    );
    await reauthenticateWithCredential(user, credential);
  } else {
    const credential = await signInWithEmailAndPassword(
      auth,
      normalizedEmail,
      currentPassword
    );
    user = credential.user;
  }

  await updatePassword(user, newPassword);
}

export async function logoutUser() {
  await signOut(auth);
}

export async function deleteCurrentUserAccount() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No user is currently signed in.");
  }
  await deleteUser(user);
}
