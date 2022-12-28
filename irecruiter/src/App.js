import './App.css';
import { useEffect } from 'react';
import { db } from './db/firebase'
import {collection, getDocs} from 'firebase/firestore'
import Header from './components/header/Header';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp'


function App() {
  return (
    <div>
   <SignUp/>
    </div>
  );
}

export default App;
