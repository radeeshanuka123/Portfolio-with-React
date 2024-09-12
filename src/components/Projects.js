

import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaReact, FaPython, FaPhp, FaNodeJs, FaDatabase, FaCode, FaCog } from 'react-icons/fa';
import { MdAndroid } from 'react-icons/md';
import { SiVisualstudio, SiVisualstudiocode, SiCplusplus, SiCsharp, SiSpringboot, SiNotepadplusplus } from 'react-icons/si';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../assets/img/color-sharp2.png';
import empImg from "../assets/img/Employee-Management-System-770x515.png";
import posImg from "../assets/img/pos.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description: "Design & Development Front End and Back End",
      imgUrl: empImg,
      projectUrl: "https://github.com/radeeshanuka123/Employee-Management-System"
    },
    {
      title: "Point of Sale System",
      description: "Design & Development Front End only",
      imgUrl: posImg,
      projectUrl: "https://github.com/radeeshanuka123/Point-of-Sale-System"
    },
    // Additional projects here
  ];

  const technologies = {
    "Frontend": [
      { name: 'HTML 5', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <MdAndroid /> },
    ],
    "Backend": [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
    ],
    "Databases": [
      { name: 'MySQL', icon: <FaDatabase /> },
      { name: 'MongoDB', icon: <FaDatabase /> },
    ],
    "Languages": [
      { name: 'C', icon: <FaCode /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C#', icon: <SiCsharp /> },
    ],
    "Tools": [
      { name: 'Visual Studio', icon: <SiVisualstudio /> },
      { name: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
      { name: 'Notepad++', icon: <SiNotepadplusplus /> },
      { name: 'Axure RP9', icon: <FaCog /> },  // Placeholder icon
      { name: 'Sublime Text', icon: <FaCog /> },  // Placeholder icon
      { name: 'Android Studio', icon: <MdAndroid /> },
    ]
  };

  const TechnologyList = ({ category, techs }) => (
    <div className="technology-category">
      <h3>{category}</h3>
      <ul className="technology-list">
        {techs.map(tech => (
          <li key={tech.name} className="technology-item">
            <span className="technology-icon">{tech.icon}</span>
            <span className="technology-name">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    I am a web developer and graphic designer with a passion for creating innovative web solutions and compelling visual designs.
                    My work focuses on blending functionality with aesthetics, solving complex problems, and enhancing user experiences.
                    With a keen eye for detail and a commitment to quality, I strive to deliver projects that not only meet but exceed client expectations.
                    Explore my portfolio to see how I bring ideas to life through modern design principles and cutting-edge technology.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">PROJECTS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">TECHNOLOGIES</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">GITHUB REPOSITORIES</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col md={6}>
                            <h3>Frontend Technologies</h3>
                            <TechnologyList category="Frontend" techs={technologies["Frontend"]} />
                          </Col>
                          <Col md={6}>
                            <h3>Backend Technologies</h3>
                            <TechnologyList category="Backend" techs={technologies["Backend"]} />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            
                            <TechnologyList category="Databases" techs={technologies["Databases"]} />
                          </Col>
                          <Col md={6}>
                            
                            <TechnologyList category="Languages" techs={technologies["Languages"]} />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            
                            <TechnologyList category="Tools" techs={technologies["Tools"]} />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h4>GitHub Repositories</h4>
                        <ul>
                          {projects.map((project, index) => (
                            <li key={index}>
                              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="nav-link">
                                {project.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
