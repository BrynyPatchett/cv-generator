import { removeCredential, updateCredential } from "../../untils/stateUtils";

function Section({ cred, credArray, setCredArray, sectionDescription }) {
  return (
    <>
      

      {Object.keys(sectionDescription).map((elem) => {
        if(elem !== "description"){
        return (
          <input
            key={elem}
            type="text"
            defaultValue={cred[elem] !== "" ? cred[elem] : ""}
            placeholder={sectionDescription[elem]}
            onChange={(e) => {
              updateCredential(
                cred,
                credArray,
                setCredArray,
                e.target.value,
                elem
              );
            }}
          />
        );
      }else{
        return (<textarea
            key={elem}
            type="text"
            defaultValue={cred[elem] !== "" ? cred[elem] : ""}
            placeholder={sectionDescription[elem]}
            onChange={(e) => {
              updateCredential(
                cred,
                credArray,
                setCredArray,
                e.target.value,
                elem
              );
            }}
          />)
      }})}

      <button
        type=""
        onClick={() => removeCredential(cred, credArray, setCredArray)}
      >
        DELETE
      </button>
      <br></br>
    </>
  );
}
export default Section;
