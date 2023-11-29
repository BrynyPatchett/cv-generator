import { useMemo, useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo";
import EducationPanel from "./components/educationPanel";
import CareerPanel from "./components/careerPanel";
import ReferencesPanel from "./components/referencesPanel";

function App() {
  //reduced an array to the largest id
  function latestId(array) {
    let x = array.reduce((prev, curr) => {
      return prev > curr.id ? prev : curr.id;
    }, -1);
    return x;
  }

  //personinfo object contain information about a person
  const [personinfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  //array of education credentials objects [{School of Study,Title of Study, date}]
  const [educationCredentials, setEducationCredentials] = useState([
    // { id: 12, school: "Hamilton", date: "2012", title: "degree" },
  ]);

  const [careerExperiences, setcareerExperiences] = useState([
    // { id: 123123, companyName: "Briscoes", position:"manager", responsiblity:"Managing", dateStart: "2012", dateEnd:"2022" },
  ]);

  const [references, setReferences] = useState([
    // {
    //   // id: 123,
    //   // name: "Bob Smith",
    //   // relationship: "mananger",
    //   // phoneNumber: "0123123123",
    //   // email: "fake@live.com",
    // },
  ]);



  //gets the largest ID from loaded obj arrays to use for the iniital ID offset (usefull for loading fom local storage)
  const largestEducationId = useMemo(() => {
    return latestId(educationCredentials);
  }, []);

  const largestExperienceId = useMemo(() => {
    return latestId(careerExperiences);
  }, []);

  const largestReferenceId = useMemo(() => {
    return latestId(references);
  }, []);

  function updatePersonalInfo(e, field) {
    setPersonalInfo({ ...personinfo, [field]: e.target.value });
  }

  return (
    <>
      <div className="inputLeft">
        {/*Personal Info ssection, inputs edit personinfo */}
        <h1>Personal Information</h1>
        <PersonalInfo
          personalInfo={personinfo}
          updatePersonalInfo={updatePersonalInfo}
        />
        {/*Eduacational experience section */}
        <EducationPanel
          educationCredentials={educationCredentials}
          setEducationCredentials={setEducationCredentials}
          largestId={largestEducationId}
        />
        {/*Career experience section */}
        <CareerPanel
          careerExperiences={careerExperiences}
          setcareerExperiences={setcareerExperiences}
          largestId={largestExperienceId}
        />
        <ReferencesPanel
          references={references}
          setReferences={setReferences}
          largestId={largestReferenceId}
        />
      </div>

      <div className="outputRight">
        {/* Basic rendering of personal info */}
        {Object.keys(personinfo).map((field) => (
          <p key={field}>{field + " : " + personinfo[field]}</p>
        ))}
        {/* Basic rendering of education info*/}
        {educationCredentials.map((cred) => (
          <div key={cred.id} className="education-section">
            {Object.keys(cred).map((field) => (
              <p key={field}>{field + " : " + cred[field]}</p>
            ))}
          </div>
        ))}
        {/* Basic rendering of career info*/}
        {careerExperiences.map((cred) => (
          <div key={cred.id} className="education-section">
            {Object.keys(cred).map((field) => (
              <p key={field}>{field + " : " + cred[field]}</p>
            ))}
          </div>
        ))}{" "}
        {/* Basic rendering of career info*/}
        {references.map((cred) => (
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
