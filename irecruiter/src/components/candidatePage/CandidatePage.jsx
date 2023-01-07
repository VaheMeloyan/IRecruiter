import "./CandidatePageStyles.css";
import { doc, getDoc } from "firebase/firestore";
import CandidatePageHeader from "./candidatePageHeader/CandidatePageHeader";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../db/firebase";
import { useNavigate } from "react-router-dom";


const CandidatePage = () => {
  const { id } = useParams()
  const candidateRef = doc(db, 'employee', id)
  const [candidate, setCandidate] = useState({})
  const navigate = useNavigate()



  useEffect(() => { 
    getDoc(candidateRef).then((r) => setCandidate(r.data())).catch(e => console.log(e))
    navigate('summary')
  },[])


  
  return (
    <>
      <CandidatePageHeader candidate={candidate } />
      <Outlet context={candidate }/>
    </>
  );
};

export default CandidatePage;
