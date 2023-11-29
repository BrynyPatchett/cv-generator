import { useState } from "react";
import ReferencesSection from "./referencesSection";
import {addNewCredential} from "../untils/stateUtils";
/* eslint-disable react/prop-types */

function ReferencesPanel({references,setReferences,largestId}){

    const [elementCount,setElementCount] = useState(largestId +1);

    return (
        <>
        <h1>References</h1>
        {references.map((ref)=>(
            <ReferencesSection key={ref.id} cred={ref} references={references} setReferences={setReferences} />
        ))}

        <button onClick={()=>addNewCredential(elementCount,setElementCount,references,setReferences)}>Add Reference</button>
        </>


    )

    
}

export default ReferencesPanel;