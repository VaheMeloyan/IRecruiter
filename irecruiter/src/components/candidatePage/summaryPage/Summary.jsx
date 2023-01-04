import CandidatesDetailsPage from "./candidateDetailsPage/CandidateDetailsPage";
import Skills from "./skills/Skills";
import './SummaryPageStyles.css'

const Summary = () => {
  return (
    <div className="summary-container">
      <CandidatesDetailsPage />
      <Skills />
    </div>
  );
};

export default Summary;
