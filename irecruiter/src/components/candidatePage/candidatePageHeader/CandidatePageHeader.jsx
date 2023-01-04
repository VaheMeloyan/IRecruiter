import "./CandidatePageHeaderStyles.css";
import avatar from "./avatar.png";
import { Link } from "react-router-dom";
import SummarizeIcon from '@mui/icons-material/Summarize';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';


const CandidatePageHeader = () => {

  const styles = {
    icons: {
      width:"15px",
      marginRight: '5px',
      color:'grey'
    }
  }


  return (
    <>
      <div className="header-container">
        <div className="avatar-container">L</div>

        <div className="user-details">
          <div>Levon</div>
          <div>Yerevan, Amrenia</div>
        </div>
      </div>
      <div className="link-list-container">
        <ul>
          <Link to="summary">
            <li> <div className="link-div"><SummarizeIcon sx={styles.icons} />Summary</div></li>
          </Link>
          <Link to="cadidates/jobs">
            <li><div className="link-div"><WorkIcon sx={styles.icons}/>Jobs</div></li>
          </Link>
          <Link to="cadidates/resume">
            <li><div className="link-div"><DescriptionIcon sx={styles.icons}/>Resume</div></li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default CandidatePageHeader;
