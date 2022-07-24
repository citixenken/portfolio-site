import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//default technologies on display
const technologyList = [
  "JavaScript",
  "React",
  "Ruby",
  "Ruby on Rails",
  "Git",
  "SQL",
  "TailwindCSS",
  "Figma",
];
function NewProject() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      about,
      technologies,
    };
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const localDB = "http://localhost:3000/projects";
    fetch(localDB, postOptions)
      .then((res) => res.json())
      .then((project) => {
        //redirect to projects/:id
        history.push(`/projects/${project.id}`);
      })
      .catch((err) => console.log(err));

    //reset form once submitted
    setName("");
    setAbout("");
    setTechnologies([]);
  }

  const checkboxes = technologyList.map((tech) => {
    const label = tech.toLowerCase();
    const checked = technologies.includes(tech);
    function handleChange(e) {
      if (e.target.checked) {
        setTechnologies((technologies) => [...technologies, tech]);
      } else {
        setTechnologies((technologies) =>
          technologies.filter((uncheckedTech) => uncheckedTech !== tech)
        );
      }
    }
    //returns checkbox item
    return (
      <div key={tech}>
        <input
          type="checkbox"
          name={label}
          id={label}
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={label}>{tech}</label>
      </div>
    );
  });
  return (
    <section id="form">
      <h3>Add New Project</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="about">About</label>
        <textarea
          id="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          cols="30"
          rows="10"
        />
        <fieldset>
          <legend>Technologies</legend>
          {checkboxes}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default NewProject;
