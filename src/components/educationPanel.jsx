/* eslint-disable react/prop-types */
import { useState } from 'react';
import {addNewCredential} from "../untils/stateUtils";

import EducationSection from './educationSection'

function EducationPanel({educationCredentials,setEducationCredentials,largestId}) {


  const [elementCount,setElementCount] = useState(largestId + 1);

 
  return (
  <div className="education-section">

  {/*Needs Add, clicling add will add an extra educational segment to the output*/}

  <h1>Education</h1>

  {educationCredentials.map((cred) =>(
    
      <EducationSection key={cred.id} cred={cred} educationCredentials={educationCredentials} setEducationCredentials={setEducationCredentials} />

   ))}



  <button type="" onClick={()=>addNewCredential(elementCount,setElementCount,educationCredentials,setEducationCredentials)} >ADD EDUCATION</button>

  </div>);
}

 export default EducationPanel;