import React, { useState, useEffect, useRef, forwardRef } from "react";
import "../components/Styles/skill.css";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiPostgresql, SiMongodb, SiMysql, SiSqlite } from "react-icons/si";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react"
import Aos from "aos";



const SkillBar = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(percentage);
    }, 500); // Start animation after mounting
  }, [percentage]);

  return (
    <div className="skill">
      <div className="skill-title">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};


// const skillsData = [
//   { name: "HTML5", icon: <FontAwesomeIcon icon={faHtml5} size="2x" /> },
//   { name: "CSS3", icon: <FontAwesomeIcon icon={faCss3Alt} size="2x" /> },
//   { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} size="2x" /> },
//   { name: "ReactJS", icon: <FontAwesomeIcon icon={faReact} size="2x" /> },
//   { name: "NodeJS", icon: <FontAwesomeIcon icon={faNodeJs} size="2x" /> },
//   { name: "Python", icon: <FontAwesomeIcon icon={faPython} size="2x" /> },
//   { name: "Docker", icon: <FontAwesomeIcon icon={faDocker} size="2x" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
//   { name: "MongoDB", icon: <SiMongodb size={40} /> },
//   { name: "MySQL", icon: <SiMysql size={40} /> },
//   { name: "SQLite", icon: <SiSqlite size={40} /> },
//   { name: "AWS", icon: <FontAwesomeIcon icon={faAws} size="2x" /> },
//   { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} size="2x" /> }
// ];


const skillsData = [
  { name: "JavaScript", percentage: 90 },
  { name: "TypeScript", percentage: 75 },
  { name: "jQuery", percentage: 75 },
  { name: "HTML5", percentage: 85 },
  { name: "CSS3", percentage: 80 },
  { name: "WordPress", percentage: 60 },
  { name: "PHP", percentage: 60 },
  { name: "React.js", percentage: 85 },
  { name: "Next.js", percentage: 75 },
  { name: "Node.js", percentage: 80 },
  { name: "Express.js", percentage: 75 },
  { name: "FastAPI", percentage: 70 },
  { name: "Flutter", percentage: 65 },
  { name: "FlutterFlow", percentage: 60 },
  { name: "GraphQL", percentage: 70 },
  { name: "MongoDB", percentage: 80 },
  { name: "PostgreSQL", percentage: 75 },
  { name: "MySQL", percentage: 75 },
  { name: "SQLite", percentage: 65 },
  { name: "AWS", percentage: 70 },
  { name: "GCP", percentage: 70 },
  { name: "Docker", percentage: 75 },
  { name: "Git", percentage: 85 },
  { name: "GitHub", percentage: 85 },
  { name: "CI/CD", percentage: 70 },
  { name: "Postman", percentage: 75 },
  { name: "Linux Shell Commands", percentage: 65 },
  { name: "Agile Development", percentage: 80 },
  { name: "Testing & Debugging", percentage: 85 }
];




export const Skill = forwardRef((props, ref) => {
  return (

    <div className="skillsbg" ref={ref}>
      <div className="header-container">
        <div className="header-background">Expertise</div>
        <h1 className="header-foreground">Skills</h1>
      </div>

      <Container>
        <div style={{
          display: "grid",
          marginBottom:"50px",
          gridTemplateColumns: "repeat(2, 1fr)", // Creates two equal columns
          gap: "20px" // Adds spacing between items
        }}>
          {skillsData.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </Container>
    </div>

  );
});
