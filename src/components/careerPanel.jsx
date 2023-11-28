/* eslint-disable react/prop-types */
import { useState } from "react";
import CareerSection from "./careerSection"



function CareerPanel({careerExperiences, setcareerExperiences, largestId})
{

    const [elementCount,setElementCount] = useState(largestId + 1);
    function addNewCareerExperience(){
        setcareerExperiences([...careerExperiences,{id:elementCount}]);
        setElementCount(elementCount + 1);
    }

    return (
        <>
        <h1>Experience</h1>
        <p>Happy Career Panel</p>

        {careerExperiences.map((exp =>(
            <CareerSection key={exp.id} exp={exp} careerExperiences={careerExperiences} setcareerExperiences={setcareerExperiences}/>
        )))}

        {/* <CareerSection /> */}
        <button type="" onClick={addNewCareerExperience}>ADD Experience</button>

        </>
    )
}


export default CareerPanel;