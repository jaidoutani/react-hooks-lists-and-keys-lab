import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // const items = projects.filter((project) => () => {
  //   console.log(project)
  // })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* <ProjectItem key="0" name={items[0].name} about={items[0].about}/>  
        <ProjectItem key="1" name={items[1].name} about={items[1].about}/> 
        <ProjectItem key="2" name={items[2].name} about={items[2].about}/>  */}
      </div>
    </div>
  );
}

export default ProjectList;
