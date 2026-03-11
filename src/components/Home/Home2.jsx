import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Full-Stack Developer </b> specializing in  <b className="purple">.NET</b> and <b className="purple">Flutter</b> to build scalable web and mobile applications. I focus on creating clean, efficient backend systems using <b className="purple"> C#</b>  and <b className="purple"> ASP.NET Core </b> paired with modern, responsive frontends.
              <br />
              <br />
              With a strong background in <b className="purple"> Database Management </b>
              (SQL & Firebase) and <b className="purple"> RESTful APIs, </b>
              I deliver complete end-to-end solutions. I am committed to writing structured code and using modern tools to build high-quality digital products.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

