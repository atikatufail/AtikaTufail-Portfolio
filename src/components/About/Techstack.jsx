import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDotnet,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiSqlite,
  SiTableau,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiKubernetes,
  SiOracle,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiPython, DiReact, DiGit, DiDocker, DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

function Techstack() {
  const skills = [
    { icon: <TbBrandCSharp />, name: "C#" },
    { icon: <SiDotnet />, name: "ASP.NET Core" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiTableau />, name: "Power BI" },
    { icon: <GiBrain />, name: "AI/ML" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "Numpy" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn" },
    { icon: <SiJupyter />, name: "Jupyter" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <SiPostgresql />, name: "SQL Server" },
    { icon: <SiOracle />, name: "Oracle" },
    { icon: <DiGit />, name: "Git/GitHub" },
    { icon: <DiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {skill.icon}
          <div className="tech-icons-text">{skill.name}</div>
        </Col>
      ))}
      <Col xs={12} style={{ marginTop: "20px" }}>
        <p className="purple" style={{ textAlign: "center", fontSize: "1.2em", fontWeight: "500" }}>
          Specialized in: Data Cleaning & Preprocessing • Cross-platform development • Data analysis and visualization
        </p>
      </Col>
    </Row>
  );
}

export default Techstack;
