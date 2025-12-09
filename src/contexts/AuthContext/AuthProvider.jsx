import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../fireabase/firebase.init';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // if (user) {
            setUser(currentUser);
            setLoading(false);
            if (currentUser?.email) {
                const userData = { email: currentUser.email };
                axios.post('http://localhost:5000/jwt', userData)
                    .then(res => {
                        console.log("Token by JWT : ", res.data);
                        const token = res.data.token;
                        localStorage.setItem('token', token);
                    })
            }


            // console.log("onAuthStateChanged : ", currentUser);
            // }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    const authInfo = {
        loading,
        setUser,
        user,
        createUser,
        loginUser,
        signInWithGoogle,
        logOut
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;