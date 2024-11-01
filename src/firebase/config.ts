// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBPwnuhQnl5IUcffqGv_LkIOH35Y618YR8",
  authDomain: "prueba-tecnica-4698e.firebaseapp.com",
  projectId: "prueba-tecnica-4698e",
  storageBucket: "prueba-tecnica-4698e.firebasestorage.app",
  messagingSenderId: "876679609534",
  appId: "1:876679609534:web:1349a4b19e946c7250b2ef",
  measurementId: "G-XBQ8G05LJS"
};


// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const CloudFirestore = getFirestore(FireBaseApp);