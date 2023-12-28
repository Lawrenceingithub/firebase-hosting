// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD36g1lrGW8Dezr_UydrA3lzuv0YODcSS8",
  authDomain: "thewebsit-423fa.firebaseapp.com",
  projectId: "thewebsit-423fa",
  storageBucket: "thewebsit-423fa.appspot.com",
  messagingSenderId: "929989591321",
  appId: "1:929989591321:web:5e39c2f4e3497561b7c588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);