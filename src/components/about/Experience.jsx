import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: "Full-stack Developer (WEB 3) ",
    compnayName: "Rigel Protocol",
    details: ` Development of Decentralized applications, including a Decentralized and AMM exchange and an NFT markertplace techniologies used include React and Type script, solidity`,
  },
  {
    year: "   2020 - 2021",
    position: "Freelance Full-stack",
    compnayName: "Freelance",
    details: `  Was heavily involved on freelancing role, where i worked both on frontend and backend  Technologies `,
  },
  {
    year: "2019 - 2020",
    position: "Software Engineer, Full-Stack",
    compnayName: "Wills Smart Technology Limited",
    details: `Fulstack software Engineering role, worked both on frontend with react and writing API services using
    Express js, Mongo Db and Postgress SQl for Relational database. 
    `,
  },
  {
    year: "2017 - 2018",
    position: "Web Developer",
    compnayName: "Centrifuge Information Technology LTD",
    details: `Frontend Web devlopement with HTML, CSS and Javascript`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
