// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqEB6t3Ic8g3Gs7icRArF6EuYKGWFHyQY",
  authDomain: "react-firebase-41144.firebaseapp.com",
  databaseURL: "https://react-firebase-41144-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-firebase-41144",
  storageBucket: "react-firebase-41144.appspot.com",
  messagingSenderId: "725856879943",
  appId: "1:725856879943:web:96fe66343ad32f8d843862",
  measurementId: "G-1DFCTLYLG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.databaseURL();
// const analytics = getAnalytics(app);

export {app, db};