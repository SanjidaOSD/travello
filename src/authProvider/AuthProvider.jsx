import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Handle Github Login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Handle email register
    const emailRegister = (email, pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Handle email login
    const emailLogin = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // Handle update user data
    const handleUpdateUserData = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
        })
    }

    // Handle sign out
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // Get User
    const userData = auth.currentUser;


    // User Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    

    const authInfo ={
        user, 
        setUser,
        userData,
        loading,
        setLoading,
        googleLogin,
        githubLogin,
        emailRegister,
        emailLogin, 
        signOutUser,
        handleUpdateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;