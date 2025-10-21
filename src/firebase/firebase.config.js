// src/firebase/firebase.config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPvMzdxKg7I5XzdBh2p5pSuS0vKJwvIGw",
  authDomain: "green-nest-assignment.firebaseapp.com",
  projectId: "green-nest-assignment",
  storageBucket: "green-nest-assignment.firebasestorage.app",
  messagingSenderId: "67075772401",
  appId: "1:67075772401:web:a78a10c2811f8109643e50",
  measurementId: "G-DHJJWHZKQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
