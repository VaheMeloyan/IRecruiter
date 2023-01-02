import {
    AppBar, Box, IconButton, Toolbar
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpIcon from "@mui/icons-material/Help";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderStyles.css";
import { UserAuth } from "../../context/AuthContext";



const Header = ({ setShowSignOutDrop, showSignOutDrop }) => {

const {logout, currentUserData} = UserAuth()
  const navigate = useNavigate()
  const usersName = Object.keys(currentUserData).length&&currentUserData.name[0]


  const handleLogout = async () => {
    try { 
      await logout()
      navigate('/login')
    } catch(e) {
      console.log(e.message)
     }
   }
  return (
    <Box>
      <AppBar position="sticky">
        <Box className="navbar">
          <Toolbar className="toolbar">
            <div>
              <IconButton>
                <MenuIcon fontSize="large" sx={{ color: "white" }} />
                          </IconButton>
                          <span><Link to="/profile"className="home_link">Home</Link></span>
                      </div>
                   
            <input
              className="search_input"
              type="text"
              placeholder="Search by Name, Job, Email or Client"
            ></input>
            <div>
              <IconButton>
                <AddCircleIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton className="help_icon">
                <HelpIcon sx={{ color: "white"}} />
              </IconButton>
              <div className="cont">
                <div className="user_avatar" >{usersName[0]}</div>
             
              </div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
