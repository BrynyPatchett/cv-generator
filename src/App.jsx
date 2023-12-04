import { useMemo, useState } from "react";
import "./App.css";
import PersonalInfo from "./components/inputComponents/personalInfo";
import CVDisplay from "./components/outputComponents/cvDisplay";
import Panel from "./components/inputComponents/panel";

function App() {
  //will need to load thing from local storage here once;

  //reduced an array to the largest id
  function latestId(array) {
    let x = array.reduce((prev, curr) => {
      return prev > curr.id ? prev : curr.id;
    }, -1);
    return x;
  }

  //personinfo object contain information about a person
  const [personinfo, setPersonalInfo] = useState({
    firstName: "Bryny",
    lastName: "Patchett",
    phoneNumber: "021 237 7070",
    email: "bryny@live.com",
  });
  //Description object of panel inputs, Key is variable that input edits, value is placeholder for input.
  const panelDescriptions = {
    education: {
      title: "Title of Study",
      location: "School",
      dateStart: "Start Year",
      dateEnd: "Start End",
    },
    career: {
      location: "Company Name",
      title: "Position",
      description: "Responsibilities",
      dateStart: "Start Date",
      dateEnd: "End Date",
    },
    references: {
      name: "Name",
      company: "Company Name",
      relationship: "Relationship/Position",
      phoneNumber: "Phone Number",
      email: "Email Address",
    },
    skills: {
      title: "Title",
      description: "ASDASD",
    },
  };

  //array of education credentials objects [{School of Study,Title of Study, date}]
  const [educationCredentials, setEducationCredentials] = useState([
    {
      id: 12,
      location: "Waikato University",
      dateStart: "2016",
      dateEnd: "2019",
      title: "BCMS Honours",
    },
  ]);

  const [careerExperiences, setcareerExperiences] = useState([
    {
      id: 123123,
      location: "Shift72",
      title: "Junior Software Developer",
      description:
        "I worked on many projects and features across both the front-end and back-end. This role required the use and understanding of many different technologies such as Golang, HTML, CSS, databases and Docker. This experience expanded my technical knowledge of software development, as well as both front-end and back-end technologies",
      dateStart: "January 2022",
      dateEnd: "September 2022",
    },
    {
      id: 123124,
      location: "Shift72",
      title: "Junior Software Developer",
      description:
        " was responsible for ensuring the quality and functionality of both back-end and front-end software.",
      dateStart: "August 2019",
      dateEnd: "January 2022",
    },
  ]);

  const [references, setReferences] = useState([
    {
      id: 123,
      name: "Louis Saunders",
      //relation/position
      relationship: "Senior Test Analyst",
      company: "Shift72",
      phoneNumber: "020 4118 6560",
      email: "louis.saunders@gmail.com",
    },
    {
      id: 124,
      name: "Shannon Skinner",
      //relation/position
      relationship: "VP Technology & Innovation",
      company: "Shift72",
      phoneNumber: "021 150 1409",
      email: "shannonsnz@gmail.com",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: 0,
      title: "Software Development and Analytical Skills",
      description:
        "As a Software Tester, I was responsible for regression testing and the creation of unit tests as well as utilising automation frameworks to streamline the testing process which required a strong understanding of software development and strong analytical skills.",
    },
    {
      id: 1,
      title: "Software Development and Analytical Skills",
      description:
        "As a Software Tester, I was responsible for regression testing and the creation of unit tests as well as utilising automation frameworks to streamline the testing process which required a strong understanding of software development and strong analytical skills.",
    },
    {
      id: 2,
      title: "Software Development and Analytical Skills",
      description:
        "As a Software Tester, I was responsible for regression testing and the creation of unit tests as well as utilising automation frameworks to streamline the testing process which required a strong understanding of software development and strong analytical skills.",
    },
    {
      id: 3,
      title: "Software Development and Analytical Skills",
      description:
        "As a Software Tester, I was responsible for regression testing and the creation of unit tests as well as utilising automation frameworks to streamline the testing process which required a strong understanding of software development and strong analytical skills.",
    },
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

  const largestSkillId = useMemo(() => {
    return latestId(skills);
  });

  function updatePersonalInfo(e, field) {
    setPersonalInfo({ ...personinfo, [field]: e.target.value });
  }
  return (
    <>
      <div className="inputLeft">
        <h1>Personal Information</h1>
        <PersonalInfo
          personalInfo={personinfo}
          updatePersonalInfo={updatePersonalInfo}
        />
        <Panel
          credArray={careerExperiences}
          setCredArray={setcareerExperiences}
          largestId={largestExperienceId}
          panelTitle={"Experience"}
          sectionDescription={panelDescriptions["career"]}
        />
        <Panel
          credArray={educationCredentials}
          setCredArray={setEducationCredentials}
          largestId={largestEducationId}
          panelTitle={"Education"}
          sectionDescription={panelDescriptions["education"]}
        />
        <Panel
          credArray={skills}
          setCredArray={setSkills}
          largestId={largestSkillId}
          panelTitle={"Skills"}
          sectionDescription={panelDescriptions["skills"]}
        />

        <Panel
          credArray={references}
          setCredArray={setReferences}
          largestId={largestReferenceId}
          panelTitle={"References"}
          sectionDescription={panelDescriptions["references"]}
        />
      </div>
      <div className="outputRight">
        <CVDisplay
          personalInfo={personinfo}
          careerExperiences={careerExperiences}
          educationCredentials={educationCredentials}
          skills={skills}
          references={references}
        />
      </div>
    </>
  );
}

export default App;
