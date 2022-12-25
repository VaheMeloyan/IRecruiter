import './App.css';
import { useEffect } from 'react';
import { db } from './db/firebase'
import {collection, getDocs} from 'firebase/firestore'
import Header from './components/header/Header';
import { useState } from 'react';
import LoginPage from './components/login/LoginPage';


function App() {

  const usersCollectionRef = collection(db, 'users');
  const [users, setUsers] = useState([])

  useEffect(() => { 
    const getUsers = async () => { 
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map(doc => ({...doc.data(), id:doc.id})))
    }
    getUsers()
  },[])


  console.log(users)
  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
