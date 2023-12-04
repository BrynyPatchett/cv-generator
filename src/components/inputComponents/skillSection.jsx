import { removeCredential,updateCredential } from "../../untils/stateUtils";
function SkillSection({cred, skills,setSkills}){

    return <>
    <input type="text" onChange={(e)=>updateCredential(cred,skills,setSkills,e.target.value,"title")} placeholder="Title" />
    <input type="text" onChange={(e)=>updateCredential(cred,skills,setSkills,e.target.value,"description")} placeholder="description"/>
    <button onClick={()=>removeCredential(cred,skills,setSkills)}>Delete</button>
</>
}

export default SkillSection;