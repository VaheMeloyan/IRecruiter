import "./CandidatePageStyles.css";
import CandidatePageHeader from "./candidatePageHeader/CandidatePageHeader";
import { Routes, Route } from "react-router-dom";
import Summary from "./summaryPage/Summary";
import JobsTab from "./jobs/JobsTab";
import ResumeTab from "./resume/ResumeTab";

const CandidatePage = () => {
  return (
    <>
      <CandidatePageHeader />
      <Summary />
      <Routes>
       
        <Route path="/cadidates/jobs" element={<JobsTab />} />
        <Route path="/cadidates/resume" element={<ResumeTab />} />
      </Routes>
    </>
  );
};

export default CandidatePage;
