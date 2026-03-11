import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.svg";
import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineDatabase,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineBookOpen,
  HiOutlineCamera,
  HiOutlineHome
} from "react-icons/hi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ padding: "0 10px" }}>

          <Row style={{ alignItems: "center", marginBottom: "40px" }}>
            <Col md={8}>
              <div className="about-intro">
                <p style={{ textAlign: "justify", fontSize: "1.2em", color: "var(--text-body)", lineHeight: "1.8", opacity: "0.95" }}>
                  Currently in my final year of Computer Science, I have spent my academic career mastering
                  <span className="purple"> scalable, data-driven systems</span> through Clean Architecture.
                  <br /><br />
                  My core strength lies in the <span className="purple">.NET ecosystem</span>, combining C#, ASP.NET Core, React, and Tailwind CSS to transform complex requirements into high-performance digital products.
                  <br /><br />
                  Beyond web development, I build smooth cross-platform mobile apps with <span className="purple">Flutter & Dart</span> and create insightful data solutions with <span className="purple">AI and Power BI</span>.
                </p>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <img src={laptopImg} alt="about" className="img-fluid" style={{ maxHeight: "250px" }} />
            </Col>
          </Row>
          <br /><br /><br />
          <Row className="expertise-interests-row" style={{ alignItems: "stretch", marginBottom: "20px" }}>
            {/* Core Expertise Column */}
            <Col lg={7} md={12}>
              <div className="expertise-section" style={{ height: "100%", paddingRight: "15px" }}>
                <h5 style={{ fontWeight: "700", fontSize: "1.3em", color: "var(--color-primary-dark)", borderLeft: "4px solid var(--color-primary-dark)", paddingLeft: "15px", marginBottom: "25px" }}>
                  CORE EXPERTISE
                </h5>

                <div className="expertise-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                  <div className="expertise-card">
                    <div className="expertise-icon-box"><HiOutlineCode /></div>
                    <div className="expertise-title">Full-Stack Ecosystem</div>
                    <div className="expertise-desc">Building robust backends with .NET and modern interfaces with React & Tailwind.</div>
                  </div>

                  <div className="expertise-card">
                    <div className="expertise-icon-box"><HiOutlineDeviceMobile /></div>
                    <div className="expertise-title">Mobile Engineering</div>
                    <div className="expertise-desc">Crafting seamless cross-platform experiences using Flutter and Dart.</div>
                  </div>

                  <div className="expertise-card">
                    <div className="expertise-icon-box"><HiOutlineChartBar /></div>
                    <div className="expertise-title">Data Analytics</div>
                    <div className="expertise-desc">Designing insightful Power BI dashboards and data-driven AI solutions.</div>
                  </div>

                  <div className="expertise-card">
                    <div className="expertise-icon-box"><HiOutlineDatabase /></div>
                    <div className="expertise-title">System Architecture</div>
                    <div className="expertise-desc">Architecting secure and efficient database systems using SQL & Firebase.</div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Beyond The Screen Column */}
            <Col lg={5} md={12}>
              <div className="interests-wrapper" style={{ marginTop: "0", height: "100%", display: "flex", flexDirection: "column", padding: "30px", background: "rgba(246, 231, 219, 0.4)", borderRadius: "24px" }}>
                <h5 style={{ fontWeight: "700", fontSize: "1.3em", color: "var(--color-primary-dark)", borderLeft: "4px solid var(--color-primary-dark)", paddingLeft: "15px", marginBottom: "25px" }}>
                  BEYOND THE SCREEN
                </h5>
                <div className="interest-chips-container" style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px",
                  flexGrow: 1
                }}>
                  <div className="interest-chip">
                    <HiOutlineSparkles style={{ fontSize: "2em", color: "var(--color-primary-dark)", marginBottom: "10px" }} />
                    <span style={{ fontWeight: "600", fontSize: "1.2em" }}>Academic Excellence</span>
                  </div>
                  <div className="interest-chip">
                    <HiOutlineHome style={{ fontSize: "2em", color: "var(--color-primary-dark)", marginBottom: "10px" }} />
                    <span style={{ fontWeight: "600", fontSize: "1.2em" }}>Interior Aesthetics</span>
                  </div>
                  <div className="interest-chip">
                    <HiOutlineCamera style={{ fontSize: "2em", color: "var(--color-primary-dark)", marginBottom: "10px" }} />
                    <span style={{ fontWeight: "600", fontSize: "1.2em" }}>Digital Photography</span>
                  </div>
                  <div className="interest-chip">
                    <HiOutlineBookOpen style={{ fontSize: "2em", color: "var(--color-primary-dark)", marginBottom: "10px" }} />
                    <span style={{ fontWeight: "600", fontSize: "1.2em" }}>Reading Books</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
