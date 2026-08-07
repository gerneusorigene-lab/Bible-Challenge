import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6DgnQM3xjWcabgIyojsmkaIOmrgA8nAE",
  authDomain: "bible-challenge-5c131.firebaseapp.com",
  projectId: "bible-challenge-5c131",
  storageBucket: "bible-challenge-5c131.firebasestorage.app",
  messagingSenderId: "501432241990",
  appId: "1:501432241990:web:02d5293fcf5350a627df47",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);