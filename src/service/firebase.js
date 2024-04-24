// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA32OXqu5vbNmzvNZR0Cl-byrhJPF4I18Q",
  authDomain: "chcyntiagimenez.firebaseapp.com",
  projectId: "chcyntiagimenez",
  storageBucket: "chcyntiagimenez.appspot.com",
  messagingSenderId: "1079791202879",
  appId: "1:1079791202879:web:29ba32846cc783aff9be8a",
  measurementId: "G-R5MD6D2QH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)