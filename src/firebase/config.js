import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVUNCmOePHNtVsr_7F0tUp8oY9ARLP4gE",
  authDomain: "vmeet-fa19f.firebaseapp.com",
  projectId: "vmeet-fa19f",
  storageBucket: "vmeet-fa19f.appspot.com",
  messagingSenderId: "703472669867",
  appId: "1:703472669867:web:27f5be24e4a0a9d80413ee",
  measurementId: "G-FPXFR4WHFH"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
