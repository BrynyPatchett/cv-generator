/* eslint-disable react/prop-types */

function CareerSection({exp,careerExperiences, setcareerExperiences}){

    function removeCredntial(){
        setcareerExperiences(careerExperiences.filter(elem => elem.id !== exp.id));
      }
      function updateCredntial(value,field){
        setcareerExperiences(careerExperiences.map(elem =>{
          if(elem.id === exp.id){
            return {...elem,[field]: value}
          }else{
            return elem
          }
        }))
      }
      


    return(
        <>
        <input placeholder="Company Name" onChange={(e)=>{updateCredntial(e.target.value,"companyName")}}></input>
        <input placeholder="Position" onChange={(e)=>{updateCredntial(e.target.value,"position")}}></input>
        <input placeholder="Responsibilities" onChange={(e)=>{updateCredntial(e.target.value,"responsiblity")}}></input>
        <input placeholder="Start Date" onChange={(e)=>{updateCredntial(e.target.value,"dateStart")}}></input>
        <input placeholder="End Date" onChange={(e)=>{updateCredntial(e.target.value,"dateEnd")}}></input>
        <br></br>
        <button type="" onClick={()=>removeCredntial()}>DELETE</button>
        <br></br>
        </>
    )
}

export default CareerSection;