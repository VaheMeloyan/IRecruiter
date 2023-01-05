import "./CandidatePageStyles.css";
import CandidatePageHeader from "./candidatePageHeader/CandidatePageHeader";
import { Routes, Route, Outlet } from "react-router-dom";
import Summary from "./summaryPage/Summary";
import JobsTab from "./jobs/JobsTab";
import ResumeTab from "./resume/ResumeTab";

const CandidatePage = () => {
  return (
    <>
      <CandidatePageHeader />
      <Outlet />
      
    </>
  );
};

export default CandidatePage;
