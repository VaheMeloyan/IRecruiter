import './App.css';
import { useEffect } from 'react';
import { db } from './db/firebase'
import {collection, getDocs} from 'firebase/firestore'
import Header from './components/header/Header';
import { useState } from 'react';
import LoginPage from './components/login/LoginPage';


function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
