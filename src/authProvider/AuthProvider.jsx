import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    // Providers
    const googleProvider = new GoogleAuthProvider();


    const googleLogin = () =>{
        
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo ={
        googleLogin
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