import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

function ProjectCard(props) {
  return (
    <div className="project">
      <Card className="text-center p-3">
        <div className="project-image mb-3">
          <img src={props.image} alt="Project" id="projectImg" />
        </div>
        <p className="project-description mb-3">{props.description}</p>
        <Button
          className=" cardBtn"
          variant="outline-dark"
          target="_blank"
          href={props.repoOrDeploy}
          rounded
        >
          <h5>{props.btnText}</h5>
        </Button>
      </Card>
      <br />
    </div>
  );
}

export default ProjectCard;
