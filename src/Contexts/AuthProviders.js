import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const user1 ={sojib:'qayum vai vlo achen'}

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const login = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo =
        { createUser, login, user, loading}

    return (
        <AuthContext.Provider value ={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;