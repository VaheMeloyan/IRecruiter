import React from "react";
import Header from "../header/Header";
import './ProfilePageStyles.css'
import { Box, Button } from "@mui/material";
import { useState, useEffect } from 'react';
import CreateCandidate from "./CreateCandidateModal/CreateCandidate";
import { UserAuth } from "../../context/AuthContext";

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

  const styles = {
    button: {
      width: "200px",
      
    }
  }

  /////////////CREATE CANDIDATE HANDLER////////////////////////
  const createCandidate = () => { 
    setShowModal((prev) => !prev)
  } 
  
  
  return (
    <div className="profile-container">
      <Header setShowSignOutDrop={setShowSignOutDrop}
        showSignOutDrop={showSignOutDrop}
      />
      <div>
        <div className="greething-username">Hello {usersName},</div>
        <div className="greething">
          Here are three steps to get you started.
        </div>
      </div>
      <div className="create-candidate-box-container">
        <div className="box" onClick={createCandidate}>
          <div>
            <img
              src="https://app.manatal.com/img/createCandidates.0cff4784.png"
              alt="na"
            />
          </div>
          <h4>Create a Candidate</h4>
          <span>
            Let's start by creating your
            <br /> first candidate.
          </span>
          <Box>
            <Button variant="contained"
              sx={styles.button }
              className="mui-btn"
              size="small">Create a Candidate
            </Button>
          </Box>
        </div>

        <div className="box">
          <div>
            <img
              src="https://app.manatal.com/img/createDepartment.a226c27a.png"
              alt="na"
            />
          </div>

          <h4>Create a Client</h4>

          <span>
            Clients host the different jobs under your agency's account.
          </span>
          <Box>
            <Button variant="contained"
              sx={styles.button }
              className="mui-btn"
              size="small">Create a Client
            </Button>
          </Box>
        </div>

        <div className="box">
          <div>
            <img
              src="https://app.manatal.com/img/createJob.9530d415.png"
              alt="na"
            />
          </div>

          <h4>Create a Job</h4>

          <span>
            A new position opened up?
            <br />
            Let's add it to the job list.
          </span>
          <Box>
            <Button variant="contained"
              sx={styles.button }
              className="mui-btn"
              size="small">Create a Job
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
