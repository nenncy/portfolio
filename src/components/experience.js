import React from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import "../components/Styles/experience.css";
import ScrollAnimation from "react-animate-on-scroll";
import iit from "../components/images/iit_seal.png";
import infilon from "../components/images/infilon.jpeg";
import esmsys from "../components/images/esmsys.jpeg";
import pruthatek from "../components/images/pruthatek.jpeg";
import infolabz from "../components/images/infolabz.jpeg";
import sparks from "../components/images/sparks.jpeg";

export const Experience = () => {
  const experiences = [
    {
      company: "Illinois Institute of Technology",
      role: "Graduate Teaching Assistant",
      dates: "Aug 2022 - Present",
      description: `As a Graduate Teaching Assistant, I assist the instructor in developing course materials and providing guidance to students. I facilitate discussion sections and offer extra assistance to undergraduates and graduates, ensuring they understand the course content. My responsibilities also include grading tests and assignments, where I provide constructive feedback to help students improve their performance and grasp complex concepts better.`,
      logo: `${iit}`,
    },
    {
      company: "Infilon Technologies Pvt Ltd",
      role: "Jr Software Engineer",
      dates: "Aug 2022 - Present",
      description: `During my tenure as a Jr Software Engineer, I played a key role in analyzing, designing, and developing websites and modifying existing applications. I was responsible for creating UI mockups, managing Redux stored data, and integrating third-party React libraries. I deployed backend solutions using the MERN stack, providing accessible Restful APIs. I also designed APIs for admin panels, time management software, and e-commerce applications, significantly improving the user experience. My efforts in enhancing software development processes led to increased project effectiveness and productivity.`,
      logo:`${infilon}`
    },
    {
      company: "Esmsys Pvt Ltd",
      role: "Node Js Developer",
      dates: "Aug 2022 - Present",
      description: `As a Node Js Developer, I handled backend development and upgrades for existing software applications. I developed scalable and efficient server-side applications using NodeJS and Express frameworks, ensuring a fast and responsive user experience. I collaborated closely with front-end developers to fix coding issues and ensure proper database communication. Additionally, I designed and implemented security measures to protect sensitive data and prevent unauthorized access.`,
      logo: `${esmsys}`
    },
    {
      company: "Pruthatek",
      role: "Full Stack Developer Intern",
      dates: "Aug 2022 - Present",
      description: `I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.`,
      logo: `${pruthatek}`
    },
    {
      company: "The Sparks Foundation",
      role: "Data Science & Analytics Intern",
      dates: "Aug 2022 - Present",
      description: `As a Data Science & Analytics Intern, I collected and analyzed data from various sources to identify trends and patterns. I created data visualizations and reports to communicate insights and findings effectively. My assignments included machine learning and data analysis tasks for data modeling and statistical analysis, which assisted in decision-making processes and provided valuable business insights.`,
      logo: `${sparks}`
    },
    {
      company: "Infolabz",
      role: "IoT Intern",
      dates: "Aug 2022 - Present",
      description: `During my two-month IoT internship at Infolabz, I worked on developing and integrating IoT solutions for various applications. I was involved in designing and implementing IoT systems, including sensor data collection, processing, and visualization. I collaborated with the team to ensure seamless connectivity and functionality of IoT devices, contributing to innovative projects that leveraged IoT technology to solve real-world problems. This experience enhanced my understanding of IoT frameworks and technologies, preparing me for future challenges in the field.`,
      logo: `${infolabz}`
    },
  ];

  return (
    <div className="experiencebg">
      <Container className="experiencecontainer">
        <h2 className="exprproject">EXPERIENCE</h2>
    
        
      <div className="timeline">
       
        {experiences.map((exp, index) => (
          <div
          key={index}
          className={`timeline-container ${
            index % 2 === 0 ? "left" : "right"
          }`}
          >
            <div className="experience-container">
              <div className="experience-header">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="experience-logo"
                  />
                <div>
                  <h2 className="experience-company">{exp.company}</h2>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-dates">{exp.dates}</p>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
        </Container>
    </div>
  );
};
