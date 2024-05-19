// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZBIpeFr1Wgx_KLruGUkUFMgR-UpP9E_M",
  authDomain: "gridguard-be4f6.firebaseapp.com",
  projectId: "gridguard-be4f6",
  storageBucket: "gridguard-be4f6.appspot.com",
  messagingSenderId: "78194629998",
  appId: "1:78194629998:web:46ab5630532d1ae638f57f",
  measurementId: "G-JKQHTMMRRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  
  export const googleProvider = new GoogleAuthProvider();
  export { auth };
  export const db = getFirestore(app);
  