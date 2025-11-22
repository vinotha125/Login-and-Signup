// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD6nRAwlUMOEBaj01eenHYykiQTEF6jJRg",
  authDomain: "authentication-82fa0.firebaseapp.com",
  projectId: "authentication-82fa0",
  storageBucket: "authentication-82fa0.firebasestorage.app",
  messagingSenderId: "537189493014",
  appId: "1:537189493014:web:f39ee3eb1a5790ad8c0837",
  measurementId: "G-HBNKLN17XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
