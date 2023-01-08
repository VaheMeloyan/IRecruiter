import { Box, CssBaseline, IconButton, Toolbar} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpIcon from "@mui/icons-material/Help";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderStyles.css";
import { UserAuth } from "../../context/AuthContext";
import Sidebar from "../sidebar/Sidebar";
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
    <Box sx={{display:"flex"}}>
      <CssBaseline/>
      <AppBar position="fixed">
        <Box className="navbar">
          <Toolbar className="toolbar">
            <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=>{setOpenDrawer(!openDrawer)}}
              edge="start"
            >
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
                <div className="dropDown">
             <a href = '#' onClick={handleLogout}>Logout* </a>
             <a href = "#"> Settings* </a>
             </div>
              </div>
              
            </div>
          </Toolbar>
        </Box>
      </AppBar>
      {openDrawer?<Sidebar/>:<></>}
    </Box>
  );
};

export default Header;
