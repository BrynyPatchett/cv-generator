/* eslint-disable react/prop-types */
function PersonalInfo({personalInfo,updatePersonalInfo}) {

  return (
    <>
      <div className="personalInfo">
        <input
          onChange={(e) => updatePersonalInfo(e, "firstName")}
          placeholder="First Name"
          defaultValue={personalInfo.firstName !== "" ? personalInfo.firstName : ""}
        />
        <input
          onChange={(e) => updatePersonalInfo(e, "lastName")}
          placeholder="Last Name"
          defaultValue={personalInfo.lastName !== "" ? personalInfo.lastName : ""}
        />
        <input
          onChange={(e) => updatePersonalInfo(e, "phoneNumber")}
          placeholder="Phone Number"
         defaultValue={personalInfo.phoneNumber !== "" ? personalInfo.phoneNumber : ""}
        />
        <input
          onChange={(e) => updatePersonalInfo(e, "email")}
          placeholder="Email address"
          defaultValue={personalInfo.email !== "" ? personalInfo.email : ""}
        />
      </div>
    </>
  );
}

export default PersonalInfo;
