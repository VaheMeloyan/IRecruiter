import CandidatesDetailsPage from "./candidateDetailsPage/CandidateDetailsPage";
import Skills from "./skills/Skills";
import './SummaryPageStyles.css'
import { useOutletContext } from "react-router-dom";





const Summary = () => {

  const candidate = useOutletContext()
  
  return (
    <div className="summary-container">
      <CandidatesDetailsPage candidate={candidate } />
      <Skills  candidate={candidate }/>

    </div>
  );
};

export default Summary;
