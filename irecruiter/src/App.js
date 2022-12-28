import './App.css';
import { useEffect } from 'react';
import { db } from './db/firebase'
import {collection, getDocs} from 'firebase/firestore'
import Header from './components/header/Header';
import { useState } from 'react';
import LoginPage from './components/login/LoginPage';
import SignUp from './components/signUp/SignUp'
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
   
    
      
    </div>
  );
}

export default App;
