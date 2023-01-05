import React, { useEffect } from "react";
import Header from "../header/Header";
import './ProfilePageStyles.css'
import { Box, Button } from "@mui/material";
import { useState } from 'react';
import CreateCandidate from "./CreateCandidateModal/CreateCandidate";
import { UserAuth } from "../../context/AuthContext";

import BlankProfilePage from "./blankProfilePage/BlankProfilePage";
import CandidatePage from './../candidatePage/CandidatePage';

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showSignOutDrop, setShowSignOutDrop] = useState(false);
  const { currentUserData, settingUser, user } = UserAuth()



  /////////////HANDLING REFRESH TO RELOAD USER DETAILS///////////////////////
  useEffect(() => { 
    if (Object.keys(user).length && !Object.keys(currentUserData).length) { 
      settingUser(user.uid)
    }
  })



  const usersName = Object.keys(currentUserData).length&&currentUserData.name

  if (showModal) return (<CreateCandidate setShowModal={setShowModal} />)



  /////////////CREATE CANDIDATE HANDLER////////////////////////
  const createCandidate = () => { 
    setShowModal((prev) => !prev)
  } 
  




  return (
    <div className="profile-container">
      <Header setShowSignOutDrop={setShowSignOutDrop}
        showSignOutDrop={showSignOutDrop}
      />
      
      {/* <CandidatePage /> */}
      
      <BlankProfilePage />
      
      
    </div>
  );
};

export default ProfilePage;
