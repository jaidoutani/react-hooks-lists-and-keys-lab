import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const tech = technologies.map((item) => () => {
    console.log(item[0])
  })
  console.log(tech)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span /> 
      </div>
    </div>
  );
}

export default ProjectItem;
