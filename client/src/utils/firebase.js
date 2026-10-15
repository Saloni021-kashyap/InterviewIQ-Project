
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-236f2.firebaseapp.com",
  projectId: "interviewiq-236f2",
  storageBucket: "interviewiq-236f2.firebasestorage.app",
  messagingSenderId: "686686429037",
  appId: "1:686686429037:web:cfeb8923dbf3054d7a8464"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}