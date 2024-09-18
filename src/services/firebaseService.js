// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtaQ5LSce2Vopyt10rqdYz4J8CPtIqiZg",
  authDomain: "groovy-d2c08.firebaseapp.com",
  projectId: "groovy-d2c08",
  storageBucket: "groovy-d2c08.appspot.com",
  messagingSenderId: "147093573641",
  appId: "1:147093573641:web:bcdddaf613910d0c0228d8",
  measurementId: "G-4T685PXXT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
