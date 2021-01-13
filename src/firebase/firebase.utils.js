import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYTckGREjoxYWm5q5n1Tt3cq_N3dsnKlg",
  authDomain: "crown-clothes-5a002.firebaseapp.com",
  projectId: "crown-clothes-5a002",
  storageBucket: "crown-clothes-5a002.appspot.com",
  messagingSenderId: "111754737186",
  appId: "1:111754737186:web:593c88a1380df1ae287c7b",
  measurementId: "G-0WC8E6JH2M",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
