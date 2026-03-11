import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Atika Tufail</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/atikatufail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/atika-tufail-843033319"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:atikatufaik@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
              >
                <HiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
