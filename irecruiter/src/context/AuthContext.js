import { createContext, useContext, useEffect, useState } from 'react';
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

    const [user, setUser] = useState({});

    const createUser = (email, password) => { 
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const loginUser = (email, password) => { 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => { 
        return signOut(auth)
    }


    ////////Checking if user set//////////////
    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
        })
        return () => unsubscribe();
    },[])

    console.log(user)
    return (
        <UserContext.Provider value={{createUser, loginUser, user, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => { 
    return useContext(UserContext)
}

