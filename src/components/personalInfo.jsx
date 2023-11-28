/* eslint-disable react/prop-types */
function PersonalInfo({updatePersonalInfo}) {

  return (
    <>
      <div className="personalInfo">
        <input
          onChange={(e) => updatePersonalInfo(e, "firstName")}
          placeholder="First Name"
        />
        <input
          onChange={(e) => updatePersonalInfo(e, "lastName")}
          placeholder="Last Name"
        />
        <input
          onChange={(e) => updatePersonalInfo(e, "phoneNumber")}
          placeholder="Phone Number"
        />
        <input
          onChange={(e) => updatePersonalInfo(e, "email")}
          placeholder="Email address"
        />
      </div>
    </>
  );
}

export default PersonalInfo;
