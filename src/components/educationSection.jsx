function EducationSection({cred, educationCredentials, setEducationCredentials}) {

  function removeCredntial(credId){
    setEducationCredentials(educationCredentials.filter(cred => cred.id !== credId));
  }
  function updateCredntial(value,credId,field){
    setEducationCredentials(educationCredentials.map(cred =>{
      if(cred.id === credId){
        return {...cred,[field]: value}
      }else{
        return cred
      }
    }))
  }
  
  return (
  <>
  <br></br>
  <p>{cred.id + " " +  cred.school + " " +  cred.title + " " + cred.date }</p>
  <input type="text" onChange={(e)=>updateCredntial(e.target.value,cred.id,"school")}/>
  




  <button onClick={()=>removeCredntial(cred.id)}>Delete</button>
  <br></br>
  </>);
}

 export default EducationSection;