// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV3nfoZpn-BD3saYvWDw3ohvyjQiFiaII",
  authDomain: "reactproyect-b0281.firebaseapp.com",
  projectId: "reactproyect-b0281",
  storageBucket: "reactproyect-b0281.appspot.com",
  messagingSenderId: "264994191388",
  appId: "1:264994191388:web:6adb2ccecf558ab17047d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);