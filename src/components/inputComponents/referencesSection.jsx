import { removeCredential,updateCredential } from "../../untils/stateUtils";
/* eslint-disable react/prop-types */
function ReferencesSection({cred,references,setReferences}){


    return <>
        <input type="text" onChange={(e)=>updateCredential(cred,references,setReferences,e.target.value,"name")} placeholder="name" />
        <input type="text" onChange={(e)=>updateCredential(cred,references,setReferences,e.target.value,"company")} placeholder="company" />
        <input type="text" onChange={(e)=>updateCredential(cred,references,setReferences,e.target.value,"relationship")} placeholder="relationship/position" />
        <input type="text" onChange={(e)=>updateCredential(cred,references,setReferences,e.target.value,"phoneNumber")} placeholder="phonenumber" />
        <input type="text" onChange={(e)=>updateCredential(cred,references,setReferences,e.target.value,"email")} placeholder="email" />
        <button onClick={()=>removeCredential(cred,references,setReferences)}>Delete</button>
    </>
}

export default ReferencesSection;