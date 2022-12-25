import './App.css';
import { useEffect } from 'react';
import { db } from './db/firebase'
import { query, collection } from 'firebase/firestore'
import Header from './components/header/Header';


function App() {

  useEffect(() => { 
    const q = query(collection(db, 'users'))
    console.log(q)
  },[])
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
