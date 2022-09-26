import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const tech = technologies.map(function(item) {
    return <span>{item}</span>
  })
  // const tech = technologies.toString()
  // console.log(name)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
