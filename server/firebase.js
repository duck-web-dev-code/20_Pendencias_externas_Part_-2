import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAI4vHf_tUVvhCA-b6cMfhTNh3hqYZM1XI",
  authDomain: "aea--pendencias-externas.firebaseapp.com",
  projectId: "aea--pendencias-externas",
  storageBucket: "aea--pendencias-externas.appspot.com",
  messagingSenderId: "659185266449",
  appId: "1:659185266449:web:528cd33814cc020bcca6b0",
  measurementId: "G-KYVK8HXWSG"
};

const firebasApp = initializeApp(firebaseConfig)
const db = getFirestore(firebasApp)
const auth = getAuth(firebasApp)

export {db,auth}