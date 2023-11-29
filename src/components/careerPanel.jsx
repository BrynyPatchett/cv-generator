/* eslint-disable react/prop-types */
import { useState } from "react";
import {addNewCredential} from "../untils/stateUtils";
import CareerSection from "./careerSection"



function CareerPanel({careerExperiences, setcareerExperiences, largestId})
{

    const [elementCount,setElementCount] = useState(largestId + 1);


    return (
        <>
        <h1>Experience</h1>
        <p>Happy Career Panel</p>

        {careerExperiences.map((exp =>(
            <CareerSection key={exp.id} exp={exp} careerExperiences={careerExperiences} setcareerExperiences={setcareerExperiences}/>
        )))}

        {/* <CareerSection /> */}
        <button type="" onClick={()=>addNewCredential(elementCount,setElementCount,careerExperiences, setcareerExperiences)}>ADD Experience</button>

        </>
    )
}


export default CareerPanel;