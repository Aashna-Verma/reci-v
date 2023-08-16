import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "reci-v.firebaseapp.com",
  projectId: "reci-v",
  storageBucket: "reci-v.appspot.com",
  messagingSenderId: "456946836960",
  appId: APP_ID,
  measurementId: "G-8L9GTBB0WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();
const user = auth.currentUser;
const provider = new GoogleAuthProvider();

export {db, auth, user, provider};