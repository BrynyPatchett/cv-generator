/* eslint-disable react/prop-types */
function EducationSection({cred, educationCredentials, setEducationCredentials}) {

  function removeCredntial(){
    setEducationCredentials(educationCredentials.filter(elem => elem.id !== cred.id));
  }
  function updateCredntial(value,credId,field){
    setEducationCredentials(educationCredentials.map(elem =>{
      if(elem.id === cred.id){
        return {...elem,[field]: value}
      }else{
        return elem
      }
    }))
  }
  
  return (
  <div className="education-section">
  <br></br>
  <p>{cred.id + " " +  cred.school + " " +  cred.title + " " + cred.date }</p>
  <input type="text" onChange={(e)=>updateCredntial(e.target.value,"school")} placeholder="School"/>
  <input type="text" onChange={(e)=>updateCredntial(e.target.value,"title")} placeholder="Title of Study"/>
  <input type="text" onChange={(e)=>updateCredntial(e.target.value,"date")} placeholder="Date"/>
  
  <br></br>
  <button onClick={()=>removeCredntial()}>Delete</button>
  <br></br>
  </div>);
}

 export default EducationSection;