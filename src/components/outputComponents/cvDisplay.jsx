/* eslint-disable react/prop-types */
import InfoDisplay from "./infoDisplay"
import PersonInfoDisplay from "./personalInfoDisplay"


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
           <InfoDisplay displayInfo={careerExperiences} title={"Work Experience"}/>
           {/* { renderArray(educationCredentials)}
           { renderArray(references)} */}
        </div>
    )

}

export default CVDisplay;