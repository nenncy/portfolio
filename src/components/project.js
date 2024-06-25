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
      github: "https://github.com/nenncy/lost-persons-record",
      demo: "DB",
      skills: ["HTML", "CSS", "JAVASCRIPT", "NODEJS", "MONGODB"],
    },
    {
      title: "Movie-Hub",
      description:
        "I developed Movie Hub,a dynamic web application for exploring and discovering movies, using Node.js and React.js. This project involved creating a responsive user interface for browsing movie details, ratings, and reviews. I implemented a RESTful API to fetch movie data, ensuring efficient data handling and integration. Additionally, I utilized React.js to build a seamless and interactive user experience, while managing application state with Redux. This project significantly enhanced my skills in full-stack development and modern web technologies.",
      github: "https://github.com/nenncy/movie-hub",
      skills: ["React.js" ," Node.js" , "Express" , "MongoDB" ,"TMDB API"],
     
    },
    {
      title: "Developer Portfolio",
      description:
        "I am building a personal portfolio website using ReactJS to showcase my projects, skills, and professional experience. This project involves creating a clean and responsive user interface to highlight my work effectively. I have implemented various sections including an about me page, a project gallery, a resume section, and a contact form. By leveraging ReactJS, I ensured a dynamic and interactive user experience. Additionally, I utilized modern web development practices and tools to enhance the performance and accessibility of the site. This project has helped me refine my front-end development skills and demonstrate my ability to create professional and engaging web applications.",
      github: "https://github.com/your-repo/developer-portfolio",
      demo: "https://demo-url.com/developer-portfolio",
      skills:["ReactJS","Javascript","Bootsrap","HTML","CSS"]
      // skills: [
      //   { name: "React.js", icon: "path/to/react-icon.png" },
      //   { name: "Next.js", icon: "path/to/nextjs-icon.png" },
      //   { name: "Bootstrap", icon: "path/to/bootstrap-icon.png" },
      // ],
    },
    {
      title: "User Management Module",
      description:
        "During my internship at Esmsys Pvt Ltd from January 2022 to March 2022, I developed a comprehensive User Management system using Node.js and React.js. This project provided a standardized solution for managing user information, modules, and access rights, featuring role-based access control for secure and efficient user management. I integrated a robust SQL database for reliable data storage and created an intuitive interface with React.js. This experience significantly enhanced my full-stack development skills and knowledge in implementing secure, scalable user management solutions.",
      github: "https://github.com/your-repo/fitlife",
      demo: "https://demo-url.com/fitlife",
      skills:["Javascript","NodeJs","reactjs","sql","express"]
  
    },
    {
      title: "WebAPI Bot",
      description:
        "I developed WebApi-Bot,a sophisticated bot designed to interact with the Gemini API, automating cryptocurrency data retrieval and processing tasks. This project involved creating a flexible and scalable bot framework using Node.js, capable of handling multiple API requests and responses efficiently. The bot was designed to fetch real-time cryptocurrency data, process it, and deliver the information in a structured format. By implementing robust error handling and logging mechanisms, I ensured the bot's reliability and maintainability. This project enhanced my skills in back-end development and API integration, showcasing my ability to build complex, automated solutions.",
      github: "https://github.com/nenncy/WebApi-Bot",
      demo: "https://demo-url.com/fitlife",
      skills:["Javascript","NodeJs","reactjs","sql","express", "Gemini","html","css"]
  
    },
    {
      title: "Scratch and Win",
      description:
        "I developed Scratch and Win,a simple and engaging mobile application using Flutter. This app allows users to scratch a card on their screen to reveal a hidden prize. The project involved creating an interactive and responsive user interface that mimics the physical action of scratching a card. Using Flutter's rich set of widgets, I implemented smooth animations and touch interactions to enhance the user experience. The application also features basic game logic to determine and display random prizes. This project significantly improved my skills in mobile app development and provided hands-on experience with Flutter and Dart.",
      github: "https://github.com/nenncy/WebApi-Bot",
      demo: "https://demo-url.com/fitlife",
      skills:["Dart","Flutter","HTML"]
  
    },
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
