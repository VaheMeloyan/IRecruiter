import { createContext, useContext } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
} from 'firebase/auth'
import { auth } from '../db/firebase';


const UserContext = createContext();


export const AuthContextProvider = ({ children }) => { 
    const createUser = (email, password) => { 
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const loginUser = (email, password) => { 
        return signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <UserContext.Provider value={{createUser, loginUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => { 
    return useContext(UserContext)
}

