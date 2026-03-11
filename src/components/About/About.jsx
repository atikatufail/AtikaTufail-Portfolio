import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      {/* <Particle /> */}
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={12}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "0px",
              }}
            >
              <h1 style={{ fontSize: "3.2em", paddingBottom: "20px" }}>
                About <strong className="purple"> ME</strong>
              </h1>
              <Aboutcard />
            </Col>
          </Row>
          <h1 className="p-skill-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="p-skill-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
