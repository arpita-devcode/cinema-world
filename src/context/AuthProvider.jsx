import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../movieApi';


const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    
    const createUser=(email,password) =>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const provider = new GoogleAuthProvider();
    const signinwithgoogle =()=>{
        return signInWithPopup(auth,provider)
    }
    const singinInUser=(email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signoutUser=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
     })
     return()=>{
        unsubscribe()
     }
    },[])
    const authInfo= {
        
       createUser,
       user,
       singinInUser,signinwithgoogle,signoutUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;