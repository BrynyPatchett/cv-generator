/* eslint-disable react/prop-types */
import InfoDisplay from "./infoDisplay"
import PersonInfoDisplay from "./personalInfoDisplay"
import "../../styles/outputComponents/infoDisplay.css";
import "../../styles/outputComponents/infoDisplay-education.css";


function CVDisplay({personalInfo,careerExperiences,educationCredentials,references}){


    function renderFields(obj){
        return Object.keys(obj).map((field => {
            return<p key={field}>{obj[field]}</p> 
        }))
    }

    function renderArray(array){
       return array.map(elem =>{
            return (<div key={elem.id} className="credential">
                {renderFields(elem)}
            </div>)
        })
        
    }

    return(
        <div className="cvDisplay">
           {/* { renderFields(personalInfo)} */}
           <PersonInfoDisplay personalInfo={personalInfo}/>
           {/* { renderArray(careerExperiences)} */}
           <InfoDisplay className="career-experience" displayInfo={careerExperiences} title={"Work Experience"}/>
           {/* { renderArray(educationCredentials)}

           { renderArray(references)} */}
           <InfoDisplay className="education-experience" displayInfo={educationCredentials} title={"Education"}/>
        </div>
    )

}

export default CVDisplay;