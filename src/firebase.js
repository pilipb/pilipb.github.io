
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBkoTbJaF4f93o4YVkEFwDN2nFnOkdscyU',
  authDomain: 'portfolio-72650.firebaseapp.com',
  projectId: 'portfolio-72650',
  storageBucket: 'portfolio-72650.appspot.com',
  messagingSenderId: '192741006028',
  appId: '1:192741006028:web:10a5336bcebbe4112e0069',
  measurementId: 'G-55656NLVJK',
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);