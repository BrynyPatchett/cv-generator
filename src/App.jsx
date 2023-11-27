import { useState } from "react";
import "./App.css";
import TextBox from "./components/textbox";
import PersonalInfo from "./components/personalInfo";
import EducationPanel from "./components/educationPanel";

function App() {
  //global variables

  //personinfo object contain information about a person
  const [personinfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  //array of education credentials objects [{School of Study,Title of Study, date}]
  const [educationCredentials, setEducationCredentials] = useState([
    { id: 12, school: "Hamilton", date: "2012", title: "degree" },
    { id: 11232 },
  ]);

  //going to be two sides

  //one side is input, other is output

  //declare state variables here in main

  //pass the edit functions over to the input side and pass the just the states over to the output side

  // use objects per section and pass them to the resume to render

  //Changed personal info object with pass in field
  function updatePersonalInfo(e, field) {
    setPersonalInfo({ ...personinfo, [field]: e.target.value });
  }

  // function updateEducationInfo(creds) {
  //   setEducationCredentials([...educationCredentials,creds]);
  // }

  return (
    <>
      <div className="inputLeft">
        {/*Personal Info ssection, inputs edit personinfo */}
        <PersonalInfo updatePersonalInfo={updatePersonalInfo} />
        {/*Eduacational experience section */}
        <EducationPanel
          educationCredentials={educationCredentials}
          setEducationCredentials={setEducationCredentials}
        />
        {/*Career experience section */}
        {/* <PersonalInfo updatePersonalInfo={updatePersonalInfo}/> */}
      </div>

      <div className="outputRight">
        <TextBox text={personinfo.firstName + " " + personinfo.lastName} />

        {/* Basic rendering of personal info */}
        {Object.keys(personinfo).map((field) => (
          <p key={field}>{field + " : " + personinfo[field]}</p>
        ))}
        {/* Basic education info of personal info */}
        {educationCredentials.map((cred) => (
          <div key={cred.id} className="education-section">
            {Object.keys(cred).map((field) => (
              <p key={field}>{field + " : " + cred[field]}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
