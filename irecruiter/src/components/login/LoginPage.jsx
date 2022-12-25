import { Button, TextField } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
import "./LoginPageStyles.css";

const LoginPage = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-form">
        <h1>Log in to IRecruiter</h1>
        <form>
          <TextField sx={ {display:"block", margin:"30px"}} size="small" placeholder="Email address"></TextField>
          <TextField sx={ {display:"block",  margin:"30px"}} size="small" placeholder="Password"></TextField>
          <Button sx={{width:"44%",  margin:"30px", borderRadius:"15px"}} variant="contained">Log in</Button>
        </form>
        <div> Not registered on IRecruiter yet? </div>
        <Link>Create your account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
