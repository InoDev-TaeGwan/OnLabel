// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIxS1mzVTL1NUGlIm4_KRs1UVTqwgLEuY",
  authDomain: "onlabel-cbe22.firebaseapp.com",
  projectId: "onlabel-cbe22",
  storageBucket: "onlabel-cbe22.appspot.com",
  messagingSenderId: "485083663101",
  appId: "1:485083663101:web:c091f4b15e00c44bf14c94",
  measurementId: "G-2DK1X6TW1N",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

export const dbService = firebase.firestore();
