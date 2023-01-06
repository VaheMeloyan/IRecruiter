import { db } from '../../db/firebase'
import { useState, useEffect, useMemo } from 'react'
import { collection, getDocs } from "firebase/firestore";
import {AgGridReact} from 'ag-grid-react';
import './CandidatesListStyles.css'
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { Button } from '@mui/material';






const CandidatesList = () => {

  const [docs, setDocs] = useState([]);






  useEffect(() => {
    let arr = []
    getDocs(collection(db, "employee")).then((docs) => {
      docs.forEach(doc => arr.push(doc.data()))
      setDocs(arr)
    })
    
  }, [])

  //////DEF AGGrid options///////////////////////////////////////
  const  rowData =  docs
  const columnDefs = [
    {headerName: "Candidate Name", field: "name"},
    { headerName: "Phone", field: "phone" },
    { headerName: "Candidate Location", field: "candidateAddress" },
    { headerName: "Current Position", field: "phone" },
    { headerName: "Current Company", field: "phone" },
    { headerName: "Current salary", field: "phone" },
    { headerName: "Expected salary", field: "phone" },
    { headerName: "Candidate Created", field: "created" },
    { headerName: "Current salary", field: "phone" },
  ]

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
    };
  }, []);

  const styles = {
    button: {
      maxWidth:"200px",
      height: '25px',
      marginBottom:'10px'
    },
  }

console.log(docs)
  return (

    <>
      <div className='create-candidate-header'>
        <h1>Candidates</h1>
        <Button variant='contained' sx={styles.button }>+ Create candidate</Button>
      </div>
      
       

     <div className="ag-theme-alpine"
				style={{
					height: '50vh',
          width: '100%',
          border:"1px solid black"
				}}
			>
				<AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
					rowData={rowData}>
				</AgGridReact>
			</div>
    
    </>
   
  )
}

export default CandidatesList