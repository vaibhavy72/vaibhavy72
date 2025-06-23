// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKwUKKHKJFib0UvSM-WzNXOHBa3K91tGo",
  authDomain: "vaibhavy-72.firebaseapp.com",
  projectId: "vaibhavy-72",
  storageBucket: "vaibhavy-72.firebasestorage.app",
  messagingSenderId: "1024763162279",
  appId: "1:1024763162279:web:cb79693fb83b1ec43b7582",
  measurementId: "G-7ERXKR9EK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);