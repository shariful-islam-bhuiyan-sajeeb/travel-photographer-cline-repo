import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
   
    const googleProvider = new GoogleAuthProvider();
    
const createUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}

const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
 const logOut = ()=>{
    return signOut(auth)
 }

 const signInWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
 }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo =
        { createUser, login, logOut, signInWithGoogle, user, loading}

    return (
        <AuthContext.Provider value ={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;