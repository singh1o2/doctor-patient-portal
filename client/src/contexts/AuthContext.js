import React, { useContext,useState, useEffect } from "react";
import { auth } from "../components/Login/firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";

export const AuthContext = React.createContext();


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth,email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth,email, password)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,user => {
      setCurrentUser(user.email)
    })

    return unsubscribe
  })

  const values = {
    currentUser,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

