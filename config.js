import firebase from 'firebase';
import 'firebase/firestore';
// require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyAPAbQemLrwffDCcy55RaM5WbGH3fGMQGI",
  authDomain: "color-fall-34f47.firebaseapp.com",
  projectId: "color-fall-34f47",
  storageBucket: "color-fall-34f47.appspot.com",
  messagingSenderId: "571318003042",
  appId: "1:571318003042:web:6901547e11ae217712783b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();