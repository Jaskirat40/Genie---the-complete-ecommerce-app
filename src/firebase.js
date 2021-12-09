import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ418U8_wS5ev1dx6q7eqLg4duA4rNqoQ",
  authDomain: "clone-31175.firebaseapp.com",
  projectId: "clone-31175",
  storageBucket: "clone-31175.appspot.com",
  messagingSenderId: "104053605710",
  appId: "1:104053605710:web:2d967993b54add8c3dca1f",
  measurementId: "G-31TVYDH6J4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };