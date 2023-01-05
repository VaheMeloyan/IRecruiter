import "./CandidatesDetailsPageStyles.css";
import { UserAuth } from "../../../../context/AuthContext";



///////////ADD BUTTON FUNCTIONALITY/////////////
const AddButton = ({ target }) => {
  return (
    <button style={{ color: "blue", border: "none", backgroundColor: "white" }} onClick={() => console.log(target) }>
      + Add
    </button>
  );
};



const CandidatesDetailsPage = () => {

  const {currentUserData} = UserAuth()

  return (
    <div className="candidates-details-container">
      <div className="details-title">
        <span>Candidate details</span>
      </div>
      <div className="candidate-details">
        <div className="line">
          <span>Candidate Name</span>
          <span className="rigth-column">
            {currentUserData?.name ? currentUserData.name : <AddButton target="name" />}
          </span>
        </div>
        <div className="line">
          <span>Candidate Referance</span>
          <span className="rigth-column">
            {currentUserData?.referance ? (
              currentUserData.referance
            ) : (
              <AddButton target="referance" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Diploma</span>
          <span className="rigth-column">
            {currentUserData?.diploma ? (
              currentUserData.diploma
            ) : (
              <AddButton target="diploma" />
            )}
          </span>
        </div>
        <div className="line">
          <span>University</span>
          <span className="rigth-column">
            {currentUserData?.university ? (
              currentUserData.university
            ) : (
              <AddButton target="university" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Current Company</span>
          <span className="rigth-column">
            {currentUserData?.currentCompany ? (
              currentUserData.currentCompany
            ) : (
              <AddButton target="currentCompany" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Current Position</span>
          <span className="rigth-column">
            {currentUserData?.currentPosition ? (
              currentUserData.currentPosition
            ) : (
              <AddButton target="currentPosition" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Location</span>
          <span className="rigth-column">
            {currentUserData?.location ? (
              currentUserData.location
            ) : (
              <AddButton target="location" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Birthdate</span>
          <span className="rigth-column">
            {currentUserData?.birthdate ? (
              currentUserData.birthdate
            ) : (
              <AddButton target="birthdate" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Address</span>
          <span className="rigth-column">
            {currentUserData?.address ? (
              currentUserData.address
            ) : (
              <AddButton target="address" />
            )}
          </span>
        </div>
        <div className="line">
          <span>Candidate Phone Number</span>
          <span className="rigth-column">
            {currentUserData?.phone ? currentUserData.phone : <AddButton target="phone" />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CandidatesDetailsPage;
