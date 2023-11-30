import "../../styles/outputComponents/infoDisplay.css";

function InfoDisplay({ displayInfo, title }) {
  if (displayInfo.length > 0) {
    return (
      <div className="displayInfo">
        <h2 className="sectionTitle">{title}</h2>
        <div className="info">
          {displayInfo.map((elem) => {
            return (
              <div key={elem.id} className="info-section">
                <div className="date">
                  {(elem.dateStart || "Start Date") + " - " + (elem.dateEnd || "End Date")}
                </div>
                <div className="description">
                  <h3 className="title">{elem.title}</h3>
                  <h3 className="location">{elem.location}</h3>
                  <p className="paragraph">{elem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default InfoDisplay;
