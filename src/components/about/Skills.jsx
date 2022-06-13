import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "85", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "85", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "80", skillName: "Typescript" },
  { skillClass: "p95", skillPercent: "90", skillName: "REACT" },
  { skillClass: "p50", skillPercent: "80", skillName: "Node js" },
  { skillClass: "p65", skillPercent: "70", skillName: "GraphQL" },
  { skillClass: "p45", skillPercent: "60", skillName: "Web 3" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
