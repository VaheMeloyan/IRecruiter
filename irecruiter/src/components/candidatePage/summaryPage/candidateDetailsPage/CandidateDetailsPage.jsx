import "./CandidatesDetailsPageStyles.css";

const AddButton = ({ target }) => {
    



  return (
    <button style={{ color: "blue", border: "none", backgroundColor: "white" }}>
      + Add
    </button>
  );
};

const CandidatesDetailsPage = ({ candidate }) => {
  return (
    <div className="candidates-details-container">
      <div className="details-title">
        <span>Candidate details</span>
      </div>
      <div className="candidate-details">
        <div className="line">
          <span>Candidate Name</span>
          <span className="rigth-column">
            {candidate?.name ? candidate.name : <AddButton target="name" />}
          </span>
        </div>
        <div className="line">
          <span>Candidate Referance</span>
          <span className="rigth-column">
            {candidate?.referance ? (
              candidate.referance
            ) : (
              <AddButton target="referance" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Diploma</span>
          <span className="rigth-column">
            {candidate?.diploma ? (
              candidate.diploma
            ) : (
              <AddButton target="diploma" />
            )}
          </span>
        </div>
        <div className="line">
          <span>University</span>
          <span className="rigth-column">
            {candidate?.university ? (
              candidate.university
            ) : (
              <AddButton target="university" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Current Company</span>
          <span className="rigth-column">
            {candidate?.currentCompany ? (
              candidate.currentCompany
            ) : (
              <AddButton target="currentCompany" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Current Position</span>
          <span className="rigth-column">
            {candidate?.currentPosition ? (
              candidate.currentPosition
            ) : (
              <AddButton target="currentPosition" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Location</span>
          <span className="rigth-column">
            {candidate?.location ? (
              candidate.location
            ) : (
              <AddButton target="location" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Birthdate</span>
          <span className="rigth-column">
            {candidate?.birthdate ? (
              candidate.birthdate
            ) : (
              <AddButton target="birthdate" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Address</span>
          <span className="rigth-column">
            {candidate?.address ? (
              candidate.address
            ) : (
              <AddButton target="address" />
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
