import { removeCredential, updateCredential } from "../../untils/stateUtils";
import "../../styles/inputComponents/section.css"

function Section({ cred, credArray, setCredArray, sectionDescription }) {
  return (
    <>
      <div className="section">
      
        {Object.keys(sectionDescription).map((elem) => {
          if(elem !== "description"){
          return (
      
            <div className="sectioninput" key={elem}>
              <label htmlFor="{elem}">{sectionDescription[elem]}</label>
              <input
                type="text"
                name={elem}
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
            </div>
          );
        }else{
          return (<textarea
              key={elem}
              rows={6}
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
        className="delete-button"
          type=""
          onClick={() => removeCredential(cred, credArray, setCredArray)}
        >
          Delete
        </button>
      </div>
      <div  className="seperator"></div>
    </>
  );
}
export default Section;
