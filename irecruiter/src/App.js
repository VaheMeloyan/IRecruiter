import './App.css';
import Header from './components/header/Header';
import { useState,useEffect} from 'react';
import LoginPage from './components/login/LoginPage';
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import ProfilePage from './components/profilePage/ProfilePage';
import SignUpPage from './components/signUp/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute';


import Layout from './components/landingPage/Layout';
import Home from './components/landingPage/Home';
import About from './components/landingPage/About';
import Contact from './components/landingPage/Contact'
import CandidatePage from './components/candidatePage/CandidatePage';




function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route> 
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path='/profile/candidates' element={<CandidatePage/>}/>
        </Routes>
      </AuthContextProvider>
    
   
    
      
    </div>
  );
}

export default App;
