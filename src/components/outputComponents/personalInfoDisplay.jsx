/* eslint-disable react/prop-types */
import "../../styles/outputComponents/personalInfoDisplay.css";

function PersonInfoDisplay({ personalInfo }) {

    function hasName(){
        if(personalInfo.firstName || personalInfo.lastName){
            return true;
        }
        return false
    }

  return (
    <div className="personalDisplay">
      <h1 className="fullName">
        {hasName() ? (personalInfo.firstName || "") + " " + (personalInfo.lastName || "") : "FullName"}
      </h1>
      <div className="contact">
        <div className="contactField">
            { personalInfo.phoneNumber && (<><p className="fieldTitle">Phone</p> <p className="fieldValue">{personalInfo.phoneNumber}</p></>)}
        </div>
        <div className="contactField">
        { personalInfo.email && (<><p className="fieldTitle">Email</p> <p className="fieldValue">{personalInfo.email}</p></>)}
        </div>
        <div className="contactField">
        { personalInfo.github && (<><p className="fieldTitle">GitHub</p> <p className="fieldValue">{personalInfo.github}</p></>)}
        </div>
      </div>
    </div>
  );
}

export default PersonInfoDisplay;
