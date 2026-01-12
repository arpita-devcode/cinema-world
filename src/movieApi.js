// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvLNsRfIZmyo7jl_NrNBpPbkhkaEwp_J4",
  authDomain: "movie-collection-caba3.firebaseapp.com",
  projectId: "movie-collection-caba3",
  storageBucket: "movie-collection-caba3.firebasestorage.app",
  messagingSenderId: "900228817414",
  appId: "1:900228817414:web:7ac231c90d8fec7b195987",
  measurementId: "G-D3RF2QMMJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
