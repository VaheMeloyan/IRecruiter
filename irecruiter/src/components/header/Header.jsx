import {
    AppBar, Box, IconButton, Toolbar
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Box className="navbar">
          <Toolbar className="toolbar">
            <div>
              <IconButton>
                <MenuIcon fontSize="large" sx={{ color: "white" }} />
                          </IconButton>
                          <span><Link to="/"className="home_link">Home</Link></span>
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
              <IconButton>
                <HelpIcon sx={{ color: "white" }} />
              </IconButton>
              <div className="container">
                <div className="user_avatar">L</div>
              </div>
            </div>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
