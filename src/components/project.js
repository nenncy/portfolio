import React from "react";
import "../components/Styles/project.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faReact,
  faAws,
  faDocker,
  faGithub,
  faNodeJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { SiPostgresql, SiMongodb, SiMysql, SiSqlite } from "react-icons/si";

export const Project = () => {
  const projects = [
    {
      title: "Lost Persons Record",
      description:
        "Developed a website to help people reconnect with lost family members. The site features two panels, Admin and User. Admins can input accurate information and gather data from users about lost individuals. Authorized users can contact lost individuals and receive messages verifying their whereabouts.",
      github: "https://github.com/your-repo/lost-persons-record",
      demo: "DB",
      skills: ["HTML", "CSS", "JAVASCRIPT", "NODEJS", "MONGODB"],
    },
    {
      title: "Movie-Hub",
      description:
        "Created a comprehensive movie database application where users can search for movies, view details, and read reviews. Implemented user authentication and a rating system to enhance user engagement and interaction.",
      github: "https://github.com/your-repo/movie-hub",
      demo: "React.js | Node.js | Express | MongoDB | TMDB API",
      // skills: [
      //   { name: "React.js", icon: "path/to/react-icon.png" },
      //   { name: "Node.js", icon: "path/to/nodejs-icon.png" },
      //   { name: "Express", icon: "path/to/express-icon.png" },
      //   { name: "MongoDB", icon: "path/to/mongodb-icon.png" },
      //   { name: "TMDB API", icon: "path/to/tmdb-icon.png" },
      // ],
    },
    {
      title: "Developer Portfolio",
      description:
        "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
      github: "https://github.com/your-repo/developer-portfolio",
      demo: "https://demo-url.com/developer-portfolio",
      // skills: [
      //   { name: "React.js", icon: "path/to/react-icon.png" },
      //   { name: "Next.js", icon: "path/to/nextjs-icon.png" },
      //   { name: "Bootstrap", icon: "path/to/bootstrap-icon.png" },
      // ],
    },
    {
      title: "FitLife",
      description:
        "Built a mobile application to help users track their fitness activities, set goals, and monitor progress. The app includes features like workout logs, nutrition tracking, and social sharing to encourage a healthy lifestyle.",
      github: "https://github.com/your-repo/fitlife",
      demo: "https://demo-url.com/fitlife",
      // skills: [
      //   { name: "React Native", icon: "path/to/react-native-icon.png" },
      //   { name: "Firebase", icon: "path/to/firebase-icon.png" },
      //   { name: "Node.js", icon: "path/to/nodejs-icon.png" },
      // ],
    },
    // Add more project objects here...
  ];

  return (
    <>
      <div className="projectbg">
        <h2 className="projecthead">PROJECT</h2>

        <Container>
          <Row>
            <Col>
              <div className="projects">
                {projects.map((project, index) => (
                  <div key={index} className="project-container">
                    <div className="project-card">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="project-skills">
                        {project?.skills?.map((SkillIcon) => (
                          <button className="skill-icon">{SkillIcon}</button>
                        ))}
                      </div>

                      <div className="project-buttons">
                        {project.github && (
                          <a
                            href={project.github}
                            className="btn btn-github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                          href={project.demo}
                          className="btn btn-demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                         
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        {/* </ScrollAnimation> */}
      </div>
    </>
  );
};
