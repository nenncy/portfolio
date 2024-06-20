import React from "react";
import "../components/Styles/skill.css";
import { Row, Col, Container } from "react-bootstrap";
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
import ScrollAnimation from "react-animate-on-scroll";

export const Skill = () => {
  return (
    <div className="skillsbg">
      <Container>
        <div className="nameproject">
          <h2 className="headskill">SKILLS</h2>
        </div>

        <Row className="skillrow">
          <Col>
            <div className="skills-section">
              {/* <h2>Technical Skills</h2> */}
              <div className="skills-category">
                <h3>Frontend Development</h3>
                <div className="icon-grid">
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faHtml5} />
                    HTML5
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faCss3Alt} />
                    CSS3
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faJsSquare} />
                    JavaScript
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faReact} />
                    ReactJS
                  </div>
                </div>
              </div>
              <div className="skills-category">
                <h3>Backend Development</h3>
                <div className="icon-grid">
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faNodeJs} />
                    NodeJS
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faPython} />
                    Python
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faDocker} />
                    Docker
                  </div>
                </div>
              </div>
              <div className="skills-category">
                <h3>Database Skills</h3>
                <div className="icon-grid">
                  <div className="icon-item">
                    <SiPostgresql size={40} />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="icon-item">
                    <SiMongodb size={40} />
                    <span>MongoDB</span>
                  </div>
                  <div className="icon-item">
                    <SiMysql size={40} />
                    <span>MySQL</span>
                  </div>
                  <div className="icon-item">
                    <SiSqlite size={40} />
                    <span>SQLite</span>
                  </div>
                </div>
              </div>
              <div className="skills-category">
                <h3>Other Skills</h3>
                <div className="icon-grid">
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faAws} />
                    AWS
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <h2>What I do</h2>
            <p className="description">
              Passionate full stack developer with a focus on building scalable
              and efficient applications.
            </p>
            <ul className="skills-text">
              <li>
                ⚡ Building responsive single-page applications with React
              </li>
              <li>
                ⚡ Developing interactive web interfaces with JavaScript, HTML,
                and CSS
              </li>
              <li>⚡ Creating static websites using Next.js</li>
              <li>
                ⚡ Developing server-side applications with Node.js and Express
              </li>
              <li>
                ⚡ Deploying applications using Vercel,Github and AWS services
              </li>
              <li>⚡ Designing and managing databases with PostgreSQL</li>
              <li>⚡ Developing scalable solutions with MongoDB</li>
              <li>⚡ Writing efficient queries with SQL and MySQL</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
