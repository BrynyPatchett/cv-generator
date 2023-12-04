import { useState } from "react";
import { addNewCredential } from "../../untils/stateUtils";
 import SkillSection from "./skillSection";
function SkillPanel({skills,setSkills, largestId }) {
  const [elementCount, setElementCount] = useState(largestId + 1);

  return (
    <>
      <h1>Skills</h1>
      {skills.map((elem)=>(
        <SkillSection key={elem.id} cred={elem} skills={skills} setSkills={setSkills}  />
      ))}

    <button type="" onClick={()=>addNewCredential(elementCount,setElementCount,skills,setSkills)}>ADD Skill</button>
    </>
  );
}

export default SkillPanel;
