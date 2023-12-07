/* eslint-disable react/prop-types */
import { useState } from "react";
import { addNewCredential } from "../../utils/stateUtils";
import Section from "./section";
import "../../styles/inputComponents/panel.css";


function Panel({credArray, setCredArray, largestId, panelTitle, sectionDescription}){

const [credArrayElemCount,setCredArrayElemCount] = useState(largestId + 1);


return (
    <div className="panel">
    <h1>{panelTitle}</h1>
    {credArray.map((elem =>(
        <Section key={elem.id} cred={elem} credArray={credArray} setCredArray={setCredArray} sectionDescription={sectionDescription}/>
    )))}
    <div className="add-button"><button type="" onClick={()=>addNewCredential(credArrayElemCount,setCredArrayElemCount,credArray, setCredArray)}>Add {panelTitle}</button></div>
    </div>
)





}

export default Panel;