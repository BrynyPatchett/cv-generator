import { removeCredential,updateCredential } from "../untils/stateUtils";


/* eslint-disable react/prop-types */
function EducationSection({cred, educationCredentials, setEducationCredentials}) {


  return (
  <div className="education-section">
  <br></br>
  <p>{cred.id + " " +  cred.school + " " +  cred.title + " " + cred.date }</p>
  <input type="text" onChange={(e)=>updateCredential(cred, educationCredentials, setEducationCredentials,e.target.value,"school")} placeholder="School"/>
  <input type="text" onChange={(e)=>updateCredential(cred, educationCredentials, setEducationCredentials,e.target.value,"title")} placeholder="Title of Study"/>
  <input type="text" onChange={(e)=>updateCredential(cred, educationCredentials, setEducationCredentials,e.target.value,"date")} placeholder="Date"/>
  
  <br></br>
  <button onClick={()=>removeCredential(cred, educationCredentials, setEducationCredentials)}>Delete</button>
  <br></br>
  </div>);
}

 export default EducationSection;