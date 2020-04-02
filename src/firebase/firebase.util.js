import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
  apiKey: "AIzaSyDHTRQF8yzbxYxTBEnwTy65lzRdeGyT3T8",
  authDomain: "crwn-db-eaf9f.firebaseapp.com",
  databaseURL: "https://crwn-db-eaf9f.firebaseio.com",
  projectId: "crwn-db-eaf9f",
  storageBucket: "crwn-db-eaf9f.appspot.com",
  messagingSenderId: "900847727742",
  appId: "1:900847727742:web:7892477390aa0b128cd42f",
  measurementId: "G-YNCSH7C74X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;