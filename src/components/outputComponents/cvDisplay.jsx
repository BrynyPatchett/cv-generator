/* eslint-disable react/prop-types */
import InfoDisplay from "./infoDisplay";
import PersonInfoDisplay from "./personalInfoDisplay";
import ReferenceDisplay from "./referenceDisplay";
import SkillDisplay from "./skillDisplay";
import "../../styles/outputComponents/infoDisplay.css";
import "../../styles/outputComponents/infoDisplay-education.css";


function CVDisplay({personalInfo,careerExperiences,educationCredentials,skills,references}){
    return(
        <div className="cvDisplay">
           <PersonInfoDisplay personalInfo={personalInfo}/>
           <InfoDisplay className="career-experience" displayInfo={careerExperiences} title={"Work Experience"}/>
           <InfoDisplay className="education-experience" displayInfo={educationCredentials} title={"Education"}/>
           <SkillDisplay className="skill-display" skills={skills}/>
           <ReferenceDisplay references={references} />
        </div>
    )
}

export default CVDisplay;