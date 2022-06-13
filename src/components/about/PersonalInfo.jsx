import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Eberechi" },
  { meta: "last name", metaInfo: "Williams" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Nigerian" },
//  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Abuja" },
  { meta: "phone", metaInfo: "+2347062630902" },
  { meta: "Email", metaInfo: "eberewill@gmail.com" },
 // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "Igbo, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
