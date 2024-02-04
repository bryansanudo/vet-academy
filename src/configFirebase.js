import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAgCt5cE7-QwqavjuDnqQ0LQusYFK3sX8",
  authDomain: "vetacademy-beea6.firebaseapp.com",
  projectId: "vetacademy-beea6",
  storageBucket: "vetacademy-beea6.appspot.com",
  messagingSenderId: "993020328728",
  appId: "1:993020328728:web:77dbf1bad795cd1fa8bc6d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
