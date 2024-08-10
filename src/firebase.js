// Import the necessary functions from Firebase v9 modular SDK
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCptvh_hS_vz4EOywECl7VT0zvT2zhL0tg",
  authDomain: "lookalike-a01bf.firebaseapp.com",
  projectId: "lookalike-a01bf",
  storageBucket: "lookalike-a01bf.appspot.com",
  messagingSenderId: "91148417495",
  appId: "1:91148417495:web:ae09d54d40b38bbc597392",
  measurementId: "G-4RCDV4BRQT"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Export the auth object
export { auth };
