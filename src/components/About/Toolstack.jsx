import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAnaconda,
  SiGooglecolab,
  SiApachenetbeanside,
  SiGit,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

function Toolstack() {
  const tools = [
    { icon: <DiVisualstudio />, name: "VS Code" },
    { icon: <DiVisualstudio />, name: "Visual Studio" },
    { icon: <SiAnaconda />, name: "Anaconda" },
    { icon: <SiGooglecolab />, name: "Google Colab" },
    { icon: <SiApachenetbeanside />, name: "NetBeans" },
    { icon: <SiGit />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tool.icon}
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
