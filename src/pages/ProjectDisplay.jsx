import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="projects" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.href} target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
