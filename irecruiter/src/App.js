import './App.css';
import Header from './components/header/Header';
import LoginPage from './components/login/LoginPage';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/profilePage/Dashboard';
import SignUpPage from './components/signUp/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/landingPage/Layout';
import Home from './components/landingPage/Home';
import About from './components/landingPage/About';
import Contact from './components/landingPage/Contact'
import CandidatePage from './components/candidatePage/CandidatePage';
import Summary from './components/candidatePage/summaryPage/Summary';
import JobsTab from './components/candidatePage/jobs/JobsTab';
import CandidatesList from './components/candidatesList/CandidatesList';
import SettingsPage from "./components/SettingsPage/SettingsPage";
import { UserAuth } from './context/AuthContext';
import JobsList from './components/jobsList/JobsList';
import Settings from './components/SettingsPage/Settings'



function App() {
  const { user } = UserAuth();
  const isLoggedIn = user && Object.keys(user).length;
  /////IF LOGGED IN REDIRECT TO DASHBOARD/////////////

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggedIn ? <Header /> : <Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="candidate/:id"
            element={
              <ProtectedRoute>
                <CandidatePage />
              </ProtectedRoute>
            }
          >
            <Route path="summary" element={<Summary />} />
            <Route path="jobs" element={<JobsTab />} />
            
          </Route>

          <Route
            path="/candidates"
            element={
              <ProtectedRoute>
                <CandidatesList />
              </ProtectedRoute>
            }
          ></Route>
                <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <JobsList />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/settings" element={<SettingsPage />}/>
          <Route path = '/fullName' element = {<Settings prop = 'full name'/>}/>
          <Route path = '/email' element = {<Settings prop = 'email'/>}/>
          <Route path = '/number' element = {<Settings prop = 'phone number'/>}/>
          <Route path = '/password' element = {<Settings prop = 'password'/>}/>
           
      </Routes>
    </div>
  );
}

export default App;
