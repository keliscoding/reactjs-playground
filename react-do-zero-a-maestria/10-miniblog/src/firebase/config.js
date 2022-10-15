
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYfGBr2MIy1I-zq-owEnNDmrPJ-H1bqG4",
  authDomain: "miniblog-9a8a9.firebaseapp.com",
  projectId: "miniblog-9a8a9",
  storageBucket: "miniblog-9a8a9.appspot.com",
  messagingSenderId: "250129340486",
  appId: "1:250129340486:web:f23b3f25cfbf781ee1d247"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
