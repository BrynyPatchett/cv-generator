/* eslint-disable react/prop-types */
import "../../styles/inputComponents/personalInfo.css"

function PersonalInfo({personalInfo,updatePersonalInfo,clearFunction,loadExample}) {

  return (
    <div className="panel">
    <h1>Personal Information</h1>
      <div className="personalInfo">
    
      <div className="personalInput">
        <label htmlFor="firstname">First Name</label>
          <input
            onChange={(e) => updatePersonalInfo(e, "firstName")}
            placeholder="First Name"
            name="firstname"
            value={(personalInfo && personalInfo.firstName !== "" ? personalInfo.firstName : "") || ''}
          />
      </div>
      <div className="personalInput">
        <label htmlFor="lastname">Last Name</label>
        <input
          onChange={(e) => updatePersonalInfo(e, "lastName")}
          placeholder="Lastname"
          name="lastname"
          value={(personalInfo && personalInfo.lastName !== "" ? personalInfo.lastName : "")|| ''}
        />
        </div>
        <div className="personalInput">
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          onChange={(e) => updatePersonalInfo(e, "phoneNumber")}
          placeholder="Phone Number"
          name="phonenumber"
         value={(personalInfo && personalInfo.phoneNumber !== "" ? personalInfo.phoneNumber : "") || ''}
        />
        </div>
        <div className="personalInput">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => updatePersonalInfo(e, "email")}
          placeholder="Email address"
          name="email"
          value={(personalInfo && personalInfo.email !== "" ? personalInfo.email : "")|| ''}
        />
        </div>
        <div className="personalInput">
        <label htmlFor="github">GitHub</label>
        <input
          onChange={(e) => updatePersonalInfo(e, "github")}
          placeholder="GitHub link"
          name="github"
          value={(personalInfo && personalInfo.github !== "" ? personalInfo.github : "") || ""}
        />
         </div>
         <div className="personalButtons">
         <button className="load-button" onClick={loadExample}>Load Example</button>
          <button className="delete-button" onClick={clearFunction}>Clear CV</button>
         </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
