// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOyyY6wTk9odgPlbO5Wj6CDL2wRX14G8o",
  authDomain: "ourbank-5d38c.firebaseapp.com",
  projectId: "ourbank-5d38c",
  storageBucket: "ourbank-5d38c.appspot.com",
  messagingSenderId: "7277650695",
  appId: "1:7277650695:web:444686eabf6e10c49c9ba2",
  measurementId: "G-GD63QG66MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);