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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
    return userRef;
  }
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
