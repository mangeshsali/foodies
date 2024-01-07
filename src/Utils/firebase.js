// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhp1Dq5fRqELDxJAjVi9FVSmwlDgBK4JE",
  authDomain: "foodies-8e4ff.firebaseapp.com",
  projectId: "foodies-8e4ff",
  storageBucket: "foodies-8e4ff.appspot.com",
  messagingSenderId: "982702936061",
  appId: "1:982702936061:web:791489701fca8e8a8b5394",
  measurementId: "G-4YKDKMKR6S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
