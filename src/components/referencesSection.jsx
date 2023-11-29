

function ReferencesSection({refx,references,setReferences}){

    function removeCredntial(){
        setReferences(references.filter(elem => elem.id !== refx.id));
    }

    function updateCredntial(value,field){
        setReferences(references.map((elem)=>{
            if(elem.id === refx.id){
                return {...elem,[field]:value}
            }
            else{
                return elem;
            }
        }))

    }


    return <>
        <input type="text" onChange={(e)=>updateCredntial(e.target.value,"name")} placeholder="name" />
        <input type="text" onChange={(e)=>updateCredntial(e.target.value,"relationship")} placeholder="relationship" />
        <input type="text" onChange={(e)=>updateCredntial(e.target.value,"phonenumber")} placeholder="phonenumber" />
        <input type="text" onChange={(e)=>updateCredntial(e.target.value,"email")} placeholder="email" />
        <button onClick={removeCredntial}>Delete</button>
    </>
}

export default ReferencesSection;