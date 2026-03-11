import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Particle from "../Particle";

// Import PDF files
import resumeNet from "./AtikaTufail - .NET Developer.pdf";
import resumeFS from "./AtikaTufail Full-Stack-Developer.pdf";

// Set worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [activeResume, setActiveResume] = useState("net"); // "net" or "fs"

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPdf = activeResume === "net" ? resumeNet : resumeFS;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          {/* Resume Selection Header */}
          <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
            <Col md={12} className="text-center">
              <h1 className="project-heading" style={{ marginBottom: "40px" }}>
                My <strong className="purple">Resumes</strong>
              </h1>

              <ButtonGroup className="d-flex justify-content-center flex-wrap gap-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <Button
                  variant={null}
                  onClick={() => setActiveResume("net")}
                  className={`resume-select-btn ${activeResume === "net" ? "active" : ""}`}
                >
                  .NET Developer
                </Button>
                <Button
                  variant={null}
                  onClick={() => setActiveResume("fs")}
                  className={`resume-select-btn ${activeResume === "fs" ? "active" : ""}`}
                >
                  Full Stack Developer
                </Button>
              </ButtonGroup>
            </Col>
          </Row>

          {/* Download Button */}
          <Row style={{ justifyContent: "center", position: "relative", marginBottom: "40px" }}>
            <Col md={12} className="text-center">
              <Button
                variant="dark"
                href={currentPdf}
                target="_blank"
                style={{
                  minWidth: "320px",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  background: "#1f1e1e",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "1.1em",
                  border: "none",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
              >
                <AiOutlineDownload />
                &nbsp;Download {activeResume === "net" ? "AtikaTufail .NET Developer" : "AtikaTufail Full Stack Developer"}
              </Button>
            </Col>
          </Row>

          {/* PDF Preview */}
          <Row className="resume resume-preview-container">
            <Document file={currentPdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
