import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
} from 'firebase/auth'
import { auth, db } from '../db/firebase';
import { getDoc, doc, } from 'firebase/firestore'




const UserContext = createContext();


export const AuthContextProvider = ({ children }) => { 

    const [user, setUser] = useState({});
    const [currentUserData, setCurrentUserData] = useState({});
    const [userType, setUserType] = useState('recruiter')

    
    

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
        })
        return () => unsubscribe();
    }, [])
    

    function settingUser (id)  { 
        const currentUserDataRef = doc(db, userType,id)
        const getUserData = async() => { 
            const docSnap = await getDoc(currentUserDataRef)
            if (docSnap.exists()) {
                setCurrentUserData(docSnap.data())
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
        }
        getUserData()
       
    }

  
    return (
        <UserContext.Provider value={{createUser, loginUser, user, logout, currentUserData, setUserType, userType, settingUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => { 
    return useContext(UserContext)
}

