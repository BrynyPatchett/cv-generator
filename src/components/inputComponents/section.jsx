import { removeCredential, updateCredential } from "../../untils/stateUtils";

function Section({ cred, credArray, setCredArray, sectionDescription }) {
  return (
    <>
      

      {Object.keys(sectionDescription).map((elem) => {
        return (
          <input
            key={elem}
            type="text"
            value={cred[elem] ? cred[elem] : ""}
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
      })}

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
