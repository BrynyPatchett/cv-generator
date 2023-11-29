/* eslint-disable react/prop-types */
import { useState } from "react";
import {addNewCredential} from "../../untils/stateUtils";
import CareerSection from "./careerSection"



function CareerPanel({careerExperiences, setcareerExperiences, largestId})
{

    const [elementCount,setElementCount] = useState(largestId + 1);


    return (
        <>
        <h1>Experience</h1>
        {careerExperiences.map((exp =>(
            <CareerSection key={exp.id} cred={exp} careerExperiences={careerExperiences} setcareerExperiences={setcareerExperiences}/>
        )))}
        <button type="" onClick={()=>addNewCredential(elementCount,setElementCount,careerExperiences, setcareerExperiences)}>ADD Experience</button>
        </>
    )
}


export default CareerPanel;