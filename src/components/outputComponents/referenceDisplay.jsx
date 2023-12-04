import '../../styles/outputComponents/referenceDisplay.css'


function ReferenceDisplay({ references }) {
  if (references.length > 0) {
    return (
      <div className={"referenceDisplay"}>
        <h2 className="sectionTitle">References</h2>
        <div className="references">
            {references.map((elem) => {
                return (<div key={elem.id} className="reference">
                    <h3>{elem.name}</h3>
                    <div className="reference-relation">{elem.relationship && <p>{elem.relationship}</p>}{elem.relationship && elem.company && <p>•</p>}{elem.company && <p>{elem.company}</p>}</div>
                    <div className='reference-contact'>
                    {elem.email && <p>{elem.email}</p>}
                    {elem.phoneNumber &&  <p>{elem.phoneNumber}</p>}
                    </div>
                </div>)
            })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ReferenceDisplay;
