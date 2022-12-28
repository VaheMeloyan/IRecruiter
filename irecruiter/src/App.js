import './App.css';
import { useEffect } from 'react';
import { db } from './db/firebase'
import {collection, getDocs} from 'firebase/firestore'
import Header from './components/header/Header';
import { useState } from 'react';
import LoginPage from './components/login/LoginPage';
import { Routes, Route } from 'react-router-dom';


function App() {

  
  const [currentUser, setCurrentUser] = useState(null)
  const candidatesCollectionRef = collection(db, 'candidates');
  

  // useEffect(() => { 
  //   const getUsers = async () => { 
  //     const data = await getDocs(usersCollectionRef)
  //     setUsers(data.docs.map(doc => ({...doc.data(), id:doc.id})))
  //   }
  //   getUsers()
  // },[])


  console.log(currentUser?.user)
  
  return (

    

    <div className="App">
      
      <Routes>
      <Route path='/' element={<Header /> } />
        <Route path='/login' element={<LoginPage setCurrentUser={ setCurrentUser} /> } />
      </Routes>
     
      
    </div>
  );
}

export default App;
