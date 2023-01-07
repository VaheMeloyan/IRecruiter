import {
   Box, IconButton, Toolbar
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpIcon from "@mui/icons-material/Help";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./HeaderStyles.css";
import Sidebar from "../sidebar/Sidebar.jsx";
import { UserAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));








const Header = ({ setShowSignOutDrop, showSignOutDrop }) => {
  const [openDrawer, setOpenDrawer]= useState(false)  
const { logout, currentUserData, settingUser, user } = UserAuth()
const navigate = useNavigate()
const usersName = Object.keys(currentUserData).length && currentUserData.name[0]
const organisation = Object.keys(currentUserData).length?currentUserData.organisation:"Self-employed"

  /////////////HANDLING REFRESH TO RELOAD USER DETAILS///////////////////////
  useEffect(() => { 
    if (Object.keys(user).length && !Object.keys(currentUserData).length) { 
      settingUser(user.uid)
    }
  })



const handleLogout = async () => {
  try { 
    await logout()
    navigate('/login')
  } catch(e) {
    console.log(e.message)
   }
 }
return (
  <>
   <Box>
    <AppBar position="sticky">
      <Box className="navbar">
        <Toolbar className="toolbar">
          <div>
            <IconButton  onClick={() => setOpenDrawer(prev => !prev) }>
                <MenuIcon fontSize="large" sx={{ color: "white" }} />
                        </IconButton>
                        <span><Link to="/dashboard
                        "className="home_link">{organisation}</Link></span>
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
    {openDrawer?<Sidebar/>:null}
  <Outlet/>
  </>
 
);
};

export default Header;
