import { useEffect, useMemo, useState } from "react";
import "./App.css";
import PersonalInfo from "./components/inputComponents/personalInfo";
import CVDisplay from "./components/outputComponents/cvDisplay";
import Panel from "./components/inputComponents/panel";

function App() {
  
  function savePdf(){
    window.print();
  }
  //reduced an array to the largest id
  function latestId(array) {
    let x = array.reduce((prev, curr) => {
      return prev > curr.id ? prev : curr.id;
    }, -1);
    return x;
  }

  //personinfo object contain information about a person
 
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
      description: "Description",
    },
  };
  const [personinfo, setPersonalInfo] = useState({});

  const [educationCredentials, setEducationCredentials] = useState([]);
  const [careerExperiences, setcareerExperiences] = useState([]);
  const [references, setReferences] = useState([]);
  const [skills, setSkills] = useState([]);

  function ClearCV(){
      setPersonalInfo([]);
      setEducationCredentials([]);
      setcareerExperiences([]);
      setReferences([]);
      setSkills([]);
  }

  function LoadExample(){
    setPersonalInfo({
      firstName: "John",
      lastName: "Smith",
      phoneNumber: "021 12337 707120",
      email: "jsmith@live.com",
    });
    setEducationCredentials([
      {
        id: 12,
        location: "Waikato University",
        dateStart: "2016",
        dateEnd: "2019",
        title: "BCMS Honours",
      },
    ]);
    setcareerExperiences([
      {
        id: 123123,
        location: "ShakerX",
        title: "Junior Software Developer",
        description:
          "I worked on many projects and features across both the front-end and back-end. This role required the use and understanding of many different technologies such as Golang, HTML, CSS, databases and Docker. This experience expanded my technical knowledge of software development, as well as both front-end and back-end technologies",
        dateStart: "January 2022",
        dateEnd: "September 2022",
      },
      {
        id: 123124,
        location: "Smither",
        title: "Software Tester",
        description:
          " I was responsible for ensuring the quality and functionality of both back-end and front-end software.",
        dateStart: "August 2019",
        dateEnd: "January 2022",
      },
    ]);
    setReferences([
      {
        id: 123,
        name: "Louis Bobbins",
        //relation/position
        relationship: "Senior Test Analyst",
        company: "ShakerX",
        phoneNumber: "+100 411 6110",
        email: "louis.Bobbins@gmail.com",
      },
      {
        id: 124,
        name: "Seymour Skinner",
        //relation/position
        relationship: "VP Technology & Innovation",
        company: "Smither",
        phoneNumber: "+11230 41121 61110",
        email: "suuuperman@gmail.com",
      },
    ]);
    setSkills([
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
}

  useEffect(()=>{
   
  
    const personinfo = JSON.parse(localStorage.getItem('personinfo'));
    const educationCredentials = JSON.parse(localStorage.getItem('educationCredentials'));
    const careerExperiences = JSON.parse(localStorage.getItem('careerExperiences'));
    const references = JSON.parse(localStorage.getItem('references'));
    const skills = JSON.parse(localStorage.getItem('skills'));

    if(personinfo){
      setPersonalInfo(personinfo);
    }
    if(educationCredentials){
      setEducationCredentials(educationCredentials);
    }
    if(careerExperiences){
      setcareerExperiences(careerExperiences);
    }
    if(references){
      setReferences(references);
    }
    if(skills){
      setSkills(skills);
    }

  },[]);



  //save personInfo in local
  useEffect(()=>{
    localStorage.setItem('personinfo', JSON.stringify(personinfo));
  },[personinfo]);

  useEffect(()=>{
    localStorage.setItem('careerExperiences', JSON.stringify(careerExperiences));
  },[careerExperiences]);

  useEffect(()=>{

    localStorage.setItem('educationCredentials', JSON.stringify(educationCredentials));
  },[educationCredentials]);

  useEffect(()=>{
    localStorage.setItem('skills', JSON.stringify(skills));
  },[skills]);

  useEffect(()=>{
    localStorage.setItem('references', JSON.stringify(references));
  },[references]);


 



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
    <div className="app">
      <div className="inputLeft">
        <PersonalInfo
          personalInfo={personinfo}
          updatePersonalInfo={updatePersonalInfo}
          clearFunction={ClearCV}
          loadExample={LoadExample}
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
      <div className="save"><button className="saveButton" onClick={savePdf}>Save as PDF</button></div>
    </div>
  );
}

export default App;
