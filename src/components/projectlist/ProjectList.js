import React, { useEffect, useState } from "react";
import ProjectItem from "../projectitem/ProjectItem";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../../db/db.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.log(err));
  }, []);

  const projectItems = projects.map((project) => (
    <ProjectItem
      key={projects.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
