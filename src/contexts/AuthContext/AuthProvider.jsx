import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../fireabase/firebase.init';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const loginUser = (email, password) => {
    //     setLoading(true)
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    // const updateUser = (auth) => {
    //     return onAuthStateChanged(auth, (user) => {
    //         if (user) { }
    //     })
    // }

    // const signOut = (auth) => {
    //     return signOut()
    // }




    const authInfo = {
        loading,
        createUser,
        // loginUser,
        // updateUser,
        // signOut

    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;