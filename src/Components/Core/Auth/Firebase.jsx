// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCIWvm8S73ADUZ8TnjQfOm8VFiuNaI-3PM",
  authDomain: "neurahealth-2.firebaseapp.com",
  projectId: "neurahealth-2",
  storageBucket: "neurahealth-2.firebasestorage.app",
  messagingSenderId: "186842060873",
  appId: "1:186842060873:web:fa00897b0c34c51e640798",
  measurementId: "G-GV4QYMTSEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
