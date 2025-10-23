import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
  // Create new user
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Sign in existing user
  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Logout
  const logOut = () => signOut(auth);

  // Google login
  const googleLogin = () => signInWithPopup(auth, provider);

  // Reset password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // Update user profile
  const updateUser = (name, photo) =>
    updateProfile(auth.currentUser, { displayName: name, photoURL: photo }).then(
      () => {
        // Instantly reflect updated info in context
        setUser({
          ...auth.currentUser,
          displayName: name,
          photoURL: photo,
        });
      }
    );

  // Watch user state
=======
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const googleLogin = () => signInWithPopup(auth, provider);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const updateUser = (name, photo) =>
    updateProfile(auth.currentUser, { displayName: name, photoURL: photo });

>>>>>>> 47f14dfab9ab515f587aa9c6197cb173fef1ba87
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    googleLogin,
    updateUser,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
