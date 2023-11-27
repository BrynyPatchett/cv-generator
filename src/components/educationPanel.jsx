import { useState } from 'react';
import EducationSection from './educationSection'

function EducationPanel({educationCredentials,setEducationCredentials}) {
  const [elementCount,setElementCount] = useState(0);

  function AddNewEducationCred(){
    setEducationCredentials([...educationCredentials,{id:elementCount}]);
    setElementCount(elementCount+ 1);
  }
  
  return (
  <div>

  {/*Needs Add, clicling add will add an extra educational segment to the output*/}

  <h1>Education</h1>

  {educationCredentials.map((cred) =>(
    
      <EducationSection key={cred.id} cred={cred} educationCredentials={educationCredentials} setEducationCredentials={setEducationCredentials} />

   ))}



  <button type="" onClick={()=>AddNewEducationCred()} >ADD</button>
  <button type="submit">Submit</button>
  </div>);
}

 export default EducationPanel;