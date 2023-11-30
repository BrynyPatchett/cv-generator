/* eslint-disable react/prop-types */

import { removeCredential,updateCredential } from "../../untils/stateUtils";

function CareerSection({cred,careerExperiences, setcareerExperiences}){

    return(
        <>
        <input placeholder="Company Name" onChange={(e)=>{updateCredential(cred,careerExperiences, setcareerExperiences,e.target.value,"location")}}></input>
        <input placeholder="Position" onChange={(e)=>{updateCredential(cred,careerExperiences, setcareerExperiences,e.target.value,"title")}}></input>
        <input placeholder="Responsibilities" onChange={(e)=>{updateCredential(cred,careerExperiences, setcareerExperiences,e.target.value,"description")}}></input>
        <input placeholder="Start Date" onChange={(e)=>{updateCredential(cred,careerExperiences, setcareerExperiences,e.target.value,"dateStart")}}></input>
        <input placeholder="End Date" onChange={(e)=>{updateCredential(cred,careerExperiences, setcareerExperiences,e.target.value,"dateEnd")}}></input>
        <br></br>
        <button type="" onClick={()=>removeCredential(cred,careerExperiences, setcareerExperiences)}>DELETE</button>
        <br></br>
        </>
    )
}

export default CareerSection;