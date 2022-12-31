import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
} from 'firebase/auth'
import { auth, db } from '../db/firebase';
import {collection, getDoc, doc} from 'firebase/firestore'




const UserContext = createContext();


export const AuthContextProvider = ({ children }) => { 

    const [user, setUser] = useState({});
    const [currentUserData, setCurrentUserData] = useState([]);

    
    

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
            const currentUserDataRef = doc(db, 'users', currentUser.uid)
            const getUserData = async () => { 
              
                
                const data = await getDoc(currentUserDataRef)
                setCurrentUserData(data.data())
               
            }
            getUserData()
           
        })
        
        return () => unsubscribe();
    }, [])
    


  
    console.log(currentUserData)
    return (
        <UserContext.Provider value={{createUser, loginUser, user, logout, currentUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => { 
    return useContext(UserContext)
}

