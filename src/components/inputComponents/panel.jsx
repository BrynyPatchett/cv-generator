import { useState } from "react";
import { addNewCredential } from "../../untils/stateUtils";
import Section from "./section";


function Panel({credArray, setCredArray, largestId, panelTitle, sectionDescription}){

const [credArrayElemCount,setCredArrayElemCount] = useState(largestId + 1);


return (
    <>
    <h1>{panelTitle}</h1>
    {credArray.map((elem =>(
        <Section key={elem.id} cred={elem} credArray={credArray} setCredArray={setCredArray} sectionDescription={sectionDescription}/>
    )))}
    <button type="" onClick={()=>addNewCredential(credArrayElemCount,setCredArrayElemCount,credArray, setCredArray)}>ADD {panelTitle}</button>
    </>
)





}

export default Panel;