import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [isfrom,setIsfrom] = useState('')
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegisterBtn = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLoginBtn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const handleGithubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  const handleResetBtn = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const signout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    handleRegisterBtn,
    handleLoginBtn,
    handleGoogleLogin,
    handleGithubLogin,
    signout,
    handleResetBtn,
    loading,
    isfrom,
    setIsfrom,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
