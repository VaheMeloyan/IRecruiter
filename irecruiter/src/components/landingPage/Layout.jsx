import "./Landing.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { Button  } from "@mui/material";

function Layout() {

 




  return (
    <>
      <nav className="landing-navbar">
        <div>
          <Link to="/">
            <HandshakeIcon
              sx={{ width: "60px",height: "80px", marginLeft:"40px", marginTop: "5px" }}
              color="primary"
            />
          </Link>
        </div>
        <div>
          <ul className="navlink">
            <Link  to="/home">
              Home
            </Link>

            <Link  to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>
            <Link to="login" >
                          <Button variant="contained" sx={{backgroundColor:"#1ebd53"}}>
                          Sign In
                          </Button>
            </Link>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
