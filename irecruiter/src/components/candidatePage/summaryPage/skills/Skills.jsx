import { Button } from "@mui/material";
import "./SkillsStyles.css";
import { UserAuth } from "../../../../context/AuthContext";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from './../../../../db/firebase';
import { useState } from 'react';



const Skills = ({ candidate }) => {

  const { user, currentUserData } = UserAuth()
  const [showInput, setShowInput] = useState(false)
  const [input, setInput] = useState('')

  console.log(candidate)
  //if (!Object.keys(skills).length) return

  const handleAddButon = () => { 
    if (input) {
    const skillsRef = doc(db, "employee", candidate.id);
    updateDoc(skillsRef, {
      skills: arrayUnion(input)
    }).then(() => setInput("")).catch(e => console.log(e))
      
  } };
  




  
if(!Object.keys(candidate).length) return 
  return (
    <div className="skills-container">
      <div className="skills-title">
        <span>Skills</span>
      </div>
      <div className="skills-list">
       <div className="sk-List">{candidate.skills.length ? (
          candidate.skills.map((skill) => {
            return <div className="skill-item"><li >{skill}</li></div>;
          })
        ) : (<h4 style={{ margin: "40px 0px 0px 0px" }}>No skills added yet</h4>
        )}</div> 
        <div className="footer">
        {<input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>}
        <Button variant="contained" sx={{marginTop:"10px",}} onClick={handleAddButon}> + Add</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
