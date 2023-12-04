import "../..//styles/outputComponents/skillDisplay.css"


function SkillDisplay({ skills }) {
  if (skills.length > 0) {
    return (
      <div className="displayInfo">
        <h2>Skills</h2>
        {skills.map((elem) => {
          return (
            <div key={elem.id} className="skill">
              <h3>{elem.title}</h3>
              <p>{elem.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillDisplay;
