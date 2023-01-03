import './App.css';
import Header from './components/header/Header';
import { useState,useEffect} from 'react';
import LoginPage from './components/login/LoginPage';
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import ProfilePage from './components/profilePage/ProfilePage';
import SignUpPage from './components/signUp/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './components/landingPage/LandingPage';
import Layout from './components/landing/Layout';
import Home from './components/landing/Home';
import About from './components/landing/About';
import Contact from './components/landing/Contact'




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
          <Route path='/profile' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    
   
    
      
    </div>
  );
}

export default App;
