import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPageStyles.css";
import { auth } from "../../db/firebase";
import {signInWithEmailAndPassword} from 'firebase/auth'

const LoginPage = ({setCurrentUser}) => {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  



  const loginButtonHandler = async () => { 
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      )
   
      setCurrentUser(user)
      setLogInEmail("")
      setLogInPassword("")
      
    } catch (error) { 
      console.log(error.message)
      setLogInEmail("")
      setLogInPassword("")
    }
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-form">
        <h1>Log in to IRecruiter</h1>
        <form>
          <TextField
            sx={{ display: "block", margin: "30px" }}
            size="small"
            placeholder="Email address"
            value={logInEmail}
            onChange={e => setLogInEmail(e.target.value) }
          ></TextField>
          <TextField
            sx={{ display: "block", margin: "30px" }}
            size="small"
            type='password'
            placeholder="Password"
            onChange={e => setLogInPassword(e.target.value)}
            value={logInPassword}
          ></TextField>
          <Button
            sx={{ width: "44%", margin: "30px", borderRadius: "15px" }}
            variant="contained"
            onClick={loginButtonHandler}
          >
            Log in
          </Button>
        </form>
        <div> Not registered on IRecruiter yet? </div>
        <Link>Create your account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
