import { useState } from "react";
import ReferencesSection from "./referencesSection";
import {addNewCredential} from "../untils/stateUtils";

function ReferencesPanel({references,setReferences,largestId}){

    const [elementCount,setElementCount] = useState(largestId +1);

    return (
        <>
        <h1>References</h1>
        {/* {{id:123,name:"Bob Smith",relationship:"mananger", phoneNumber:"0123123123",email:"fake@live.com"}} */}
        {references.map((ref)=>(
            // <p key={ref.id}>{ref.id + " " + ref.name + " " +  ref.relationship + " " +  ref.phoneNumber + " " + ref.email }</p>
            <ReferencesSection key={ref.id} refx={ref} references={references} setReferences={setReferences} />
        ))}

        <button onClick={()=>addNewCredential(elementCount,setElementCount,references,setReferences)}>Add Reference</button>
        </>


    )

    
}

export default ReferencesPanel;