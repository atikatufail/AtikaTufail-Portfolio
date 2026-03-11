import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Render GitHub button for all categories except UI/UX */}
        {(!props.category || !props.category.includes("UI/UX")) && (
          <Button variant="dark" href={props.ghLink || "https://github.com/atikatufail"} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"  "}

        {/* Render Live Demo button for EVERY project */}
        <Button
          variant="primary"
          href={props.demoLink || "https://github.com/atikatufail"}
          target="_blank"
          style={{ marginLeft: (!props.category || !props.category.includes("UI/UX")) ? "10px" : "0" }}
        >
          <CgWebsite /> &nbsp;
          {"Live Demo"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
