import { db } from '../../db/firebase'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";






const CandidatesList = () => {

  const [candidates, setCandidates] = useState([]);






  useEffect(() => {
    let arrayOfCand = []
    getDocs(collection(db, "employee")).then((docs) => {
      docs.forEach((doc) => {
        arrayOfCand.push( doc.data())
      })
    })
    setCandidates(arrayOfCand)
  }, [])


console.log(candidates)
  return (
    <div>
		
    </div>
  )
}

export default CandidatesList