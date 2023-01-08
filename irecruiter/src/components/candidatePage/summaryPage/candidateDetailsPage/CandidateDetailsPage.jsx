import "./CandidatesDetailsPageStyles.css";

///////////ADD BUTTON FUNCTIONALITY/////////////
const AddButton = ({ target, candidate }) => {
  return (
    <button style={{ color: "blue", border: "none", backgroundColor: "white" }} onClick={() => {
      
    } }>
      + Add
    </button>
  );
};



const CandidatesDetailsPage = ({candidate}) => {

  return (
    <div className="candidates-details-container">
      <div className="details-title">
        <span>Candidate details</span>
      </div>
      <div className="candidate-details">
        <div className="line">
          <span>Candidate Name</span>
          <span className="rigth-column">
            {candidate?.name ? candidate.name : <AddButton target="name" candidate={candidate }/>}
          </span>
        </div>
        <div className="line">
          <span>Candidate Referance</span>
          <span className="rigth-column">
            {candidate?.referance ? (
              candidate.referance
            ) : (
              <AddButton target="referance" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>Diploma</span>
          <span className="rigth-column">
            {candidate?.diploma ? (
              candidate.diploma
            ) : (
              <AddButton target="diploma" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>University</span>
          <span className="rigth-column">
            {candidate?.university ? (
              candidate.university
            ) : (
              <AddButton target="university" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>Current Company</span>
          <span className="rigth-column">
            {candidate?.currentCompany ? (
              candidate.currentCompany
            ) : (
              <AddButton target="currentCompany" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>Current Position</span>
          <span className="rigth-column">
            {candidate?.currentPosition ? (
              candidate.currentPosition
            ) : (
              <AddButton target="currentPosition" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Location</span>
          <span className="rigth-column">
            {candidate?.location ? (
              candidate.location
            ) : (
              <AddButton target="location" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>Birthdate</span>
          <span className="rigth-column">
            {candidate?.birthdate ? (
              candidate.birthdate
            ) : (
              <AddButton target="birthdate" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Address</span>
          <span className="rigth-column">
            {candidate?.address ? (
              candidate.address
            ) : (
              <AddButton target="address" candidate={candidate }/>
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Phone Number</span>
          <span className="rigth-column">
            {candidate?.phone ? candidate.phone : <AddButton target="phone" />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CandidatesDetailsPage;
