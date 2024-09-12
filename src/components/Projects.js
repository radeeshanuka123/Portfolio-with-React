import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import empImg from "../assets/img/Employee-Management-System-770x515.png";
import posImg from "../assets/img/pos.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
    /*
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    */
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
I am web developer, graphic designer with a passion for creatin innovative web solutions, compelling visual designs.
 My work focuses on blending functionality with aesthetics, solving complex problems, and enhancing user experiences. 
 
 With a keen eye for detail and a commitment to quality, 
 I strive to deliver projects that not only meet but exceed client expectations. 
 Explore my portfolio to see how I bring ideas to life through modern design principles and cutting-edge technology.

---

Feel free to adjust the details to better reflect your specific skills and projects!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">CV</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Github</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <a 
      href="https://radeeshanuka123.github.io/My_Portfolio/U%20Shanuka%20Radeeshan%20Gunathilalaka.pdf" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn-download"
    >
      Download My CV
    </a>
                    
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
