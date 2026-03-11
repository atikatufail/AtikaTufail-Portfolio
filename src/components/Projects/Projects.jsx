import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import images (You must place these exact images in src/Assets/Projects/)
import hijabBazaar from "../../Assets/Projects/hijab-bazaar.png";
import taskManager from "../../Assets/Projects/task-manager.png";
import calculator from "../../Assets/Projects/calculator.png";
import rockPaperScissors from "../../Assets/Projects/rock-paper-scissors.png";
import buyEase from "../../Assets/Projects/buyease.png";
import gameHub from "../../Assets/Projects/gamehub.png";
import digiElect from "../../Assets/Projects/digielect.png";
import design2Code from "../../Assets/Projects/design2code.png";
import hospitalInsights from "../../Assets/Projects/hospital-insights.png";
import airQuality from "../../Assets/Projects/air-quality.png";
import mindSteps from "../../Assets/Projects/mindsteps.png";
import whatsappClone from "../../Assets/Projects/whatsapp-clone.png";
import quickSeats from "../../Assets/Projects/quick-seats.png";
import toDoApp from "../../Assets/Projects/to-do-app.png";

const projectsData = [
  {
    id: 1,
    category: ["Web Dev"],
    title: "Hijab Bazaar Ecommerce Website",
    description: "Built a high-performance e-commerce App using React 19 and Vite. Integrated React Router 7 for seamless browsing across dynamic collections. A fully responsive layout with sticky navigation and fluid animations.",
    imgPath: hijabBazaar,
    ghLink: "https://github.com/atikatufail",
    demoLink: "https://hijab-bazaar.netlify.app/",
  },
  {
    id: 2,
    category: ["Web Dev"],
    title: "Task Manager",
    description: "Built a modern task manager using HTML, CSS, and JavaScript. Added real-time features to create, delete, and schedule tasks with due dates. Implemented efficient DOM manipulation for a seamless user experience.",
    imgPath: taskManager,
    ghLink: "https://github.com/atikatufail/ToDo-List",
    demoLink: "https://todo-list-atika.netlify.app/",
  },
  {
    id: 3,
    category: ["Web Dev"],
    title: "Calculator",
    description: "Built a functional calculator using HTML, CSS, and JavaScript. Used Local Storage to save calculation after refreshing the page. Added Calculation History and a Delete function for better usability.",
    imgPath: calculator,
    ghLink: "https://github.com/atikatufail/Calculator-Frontend",
    demoLink: "https://calculator-atika.netlify.app/",
  },
  {
    id: 4,
    category: ["Web Dev"],
    title: "Rock Paper Scissors",
    description: "Built an interactive web game using HTML, CSS, and JavaScript. Developed random computer move logic to determine game winners. Used Local Storage to save and persist player scores across sessions.",
    imgPath: rockPaperScissors,
    ghLink: "https://github.com/atikatufail/rockPaperScissor-Game",
    demoLink: "https://rockpaperscissor-with-computer.netlify.app/",
  },
  {
    id: 5,
    category: ["Full Stack"],
    title: "BuyEase - .NET 9",
    description: "Built a full-featured e-commerce web application using .NET 9. Developed product browsing, category filtering, and shopping cart functionality. Implemented secure data storage using Entity Framework Core.",
    imgPath: buyEase,
    ghLink: "https://github.com/atikatufail/BuyEase-.NET-9",
    demoLink: "https://github.com/atikatufail",
  },
  {
    id: 6,
    category: ["Full Stack"],
    title: "GameHub - .NET",
    description: "Developed a complete game management backend system using ASP.NET Core Web API. Designed and implemented RESTful APIs for managing games, genres, and dashboard operations. Integrated Entity Framework Core with SQLite.",
    imgPath: gameHub,
    ghLink: "https://github.com/atikatufail/Game-Hub-.NET",
  },
  {
    id: 7,
    category: ["Full Stack"],
    title: "DigiElect - Java",
    description: "Developed an election management system using Java Swing and Oracle Database (JDBC). Implemented secure CRUD operations with role-based authentication. Designed normalized database schemas for faster querying.",
    imgPath: digiElect,
    ghLink: "https://github.com/atikatufail/DigiElect",
  },
  {
    id: 8,
    category: ["Mobile App"],
    title: "Design2Code - Flutter",
    description: "Built a drag-and-drop UI editor with real-time component editing and layout rendering. Added AI assistance to generate clean Flutter UI code from canvas designs automatically.",
    imgPath: design2Code,
    ghLink: "https://github.com/atikatufail/design2code",
  },
  {
    id: 9,
    category: ["AI/ML"],
    title: "Hospital Insights Dashboard",
    description: "Cleaned and transformed hospital data using Python (Pandas, NumPy) for accuracy and consistency. Designed interactive dashboards showing patient trends, admissions, and occupancy metrics using Power BI.",
    imgPath: hospitalInsights,
    demoLink: "https://www.linkedin.com/posts/atika-t-843033319_healthcareanalytics-powerbi-python-activity-7345767554004488192-eLW3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCg2_MB0Zufus_fJlYxFL-Oxldq9-3feKo",
  },
  {
    id: 10,
    category: ["AI/ML"],
    title: "Air Quality Insights",
    description: "Processed air quality datasets using Python and NumPy, removing outliers and missing values. Trained machine learning models (Regression, Random Forest) for AQI level prediction.",
    imgPath: airQuality,
    ghLink: "https://github.com/atikatufail/Air-Quality-Insights",
  },
  {
    id: 11,
    category: ["AI/ML"],
    title: "MindSteps - FYP",
    description: "A low-cost AI-based system to help ADHD kids improve attention and learning focus. Using data analysis and adaptive learning techniques to track focus patterns and adjust tasks in real time.",
    imgPath: mindSteps,
    ghLink: "https://github.com/atikatufail",
  },
  {
    id: 12,
    category: ["Mobile App"],
    title: "WhatsApp UI Clone - Flutter",
    description: "Developed a cross-platform WhatsApp interface clone using Flutter. Implemented tab-based navigation for Chats, Status, and Calls using DefaultTabController. Styled recent status updates with the DottedBorder package for an authentic native feel.",
    imgPath: whatsappClone,
    ghLink: "https://github.com/atikatufail/Whatsapp-UI",
  },
  {
    id: 13,
    category: ["UI/UX"],
    title: "Quick Seats UI",
    description: "Designed a clean, modern user interface for a ticket booking and seat selection platform. Focused on an intuitive user flow, responsive design elements, and an accessible color palette to enhance the booking experience.",
    imgPath: quickSeats,
    demoLink: "https://www.figma.com/proto/rmJIHaTNp7gCL39Juw9nIq/Figma-mobile-design?node-id=1-2&p=f&t=M367LU5eOaykbSd9-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 14,
    category: ["UI/UX"],
    title: "To-Do App UI",
    description: "Created a modern and functional to-do app user interface design. Built focusing on simplicity, smooth task management, highlighting task priority and overall user productivity.",
    imgPath: toDoApp,
    demoLink: "https://www.figma.com/proto/Y5lXLulfopgVMFDwDMCNVr/Untitled?node-id=1-2&t=hNmk9I3c6dB6K100-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  }
];

const categories = ["All Projects", "Web Dev", "Mobile App", "Full Stack", "AI/ML", "UI/UX"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projectsData
    : projectsData.filter(project => project.category.includes(activeCategory));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#8e8e8e" }}>
          Here are a few projects I've worked on recently.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "40px", marginTop: "20px" }}>
          {categories.map(cat => (
            <Button
              key={cat}
              variant={null}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: cat === "All Projects" ? "#1f1e1e" : "#f8548e",
                borderColor: cat === "All Projects" ? "#1f1e1e" : "#f8548e",
                color: "#ffffff",
                fontWeight: "600",
                padding: "10px 22px",
                transition: "all 0.3s ease",
                opacity: activeCategory === cat ? 1 : 1,
                transform: activeCategory === cat ? "scale(1.08)" : "scale(1)",
                boxShadow: activeCategory === cat ? "0 4px 15px rgba(0,0,0,0.1)" : "none",
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map(project => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                category={project.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
