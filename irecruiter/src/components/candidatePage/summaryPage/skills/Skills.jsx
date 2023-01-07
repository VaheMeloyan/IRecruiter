import { Button } from "@mui/material";
import "./SkillsStyles.css";



const Skills = ({ skills }) => {


  //if (!Object.keys(skills).length) return
  

  return (
    <div className="skills-container">
      <div className="skills-title">
        <span>Skills</span>
      </div>
      <div className="skills-list">
        {skills ? (
          skills.map((skill) => {
            return <li>{skill}</li>;
          })
        ) : (
          <>
            <h4 style={{ margin: "40px 0px 0px 0px" }}>No skills added yet</h4>
            <Button variant="contained" sx={{marginTop:"20px"}}> + Add</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
