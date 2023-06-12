// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3fK3-TfK6Hlqn0ADPe2QAjHmZ21Wa7Ec",
  authDomain: "clone-ddf17.firebaseapp.com",
  projectId: "clone-ddf17",
  storageBucket: "clone-ddf17.appspot.com",
  messagingSenderId: "651445456206",
  appId: "1:651445456206:web:3ace904f4007ebb952e21f",
  measurementId: "G-QGCJLG7FT8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
