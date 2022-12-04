import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxp-V50z0CpVdK60oEHX7T0pMYJXY9JME",
  authDomain: "proj-web-f9ecb.firebaseapp.com",
  projectId: "proj-web-f9ecb",
  storageBucket: "proj-web-f9ecb.appspot.com",
  messagingSenderId: "1023028513361",
  appId: "1:1023028513361:web:69b266f13f66479e020670"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();

export {app, database }
