import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const [project, setProject] = useState(null);
  //   const params = useParams();
  const { id } = useParams();
  //   console.log(params);
  //   const id = 1;

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((res) => res.json())
      .then((project) => setProject(project))
      .catch((err) => console.log(err));
  }, [id]);

  if (!project) return <h2>Loading...</h2>;

  const { name, about, technologies } = project;
  const technologiesList = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));

  return (
    <div>
      <section>
        <div className="project-item">
          <h1>{name}</h1>
          <p>{about}</p>
          <div className="technologies">{technologiesList}</div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
