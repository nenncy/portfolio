import React, { useState, useEffect, forwardRef } from "react";
import { Col, Row, Card, Button, Container, Modal } from "react-bootstrap";
import "../components/Styles/experience.css";
import ScrollAnimation from "react-animate-on-scroll";
import iit from "../components/images/iit_seal.png";
import hyp from "../components/images/hyp.jpeg"
import infilon from "../components/images/infilon.jpeg";
import esmsys from "../components/images/esmsys.jpeg";
import pruthatek from "../components/images/pruthatek.jpeg";
import infolabz from "../components/images/infolabz.jpeg";
import sparks from "../components/images/sparks.jpeg";
import lof from "../components/images/lof.jpeg";
import Aos from "aos";
import { motion, useScroll } from "motion/react";  // 
import aos from "aos";
import { useRef } from "react"


const experiences = [
    {
    company: "Leap of Faith technologies",
    role: "Software Developer",
    dates: "June 2025 - Present",
    description: ` I’m developing and deploying core features for an AI-driven healthcare platform using Python and React. My work focuses on improving provider efficiency and patient outcomes by integrating FHIR-based APIs, optimizing clinical workflows, and leading bug resolution for CCD components. I also contribute to model deployment decisions, write robust API tests ensuring 99.9% uptime, and collaborate in Agile sprints to enhance overall system reliability and performance.`,
    logo: `${lof}`,
  },
  {
    company: "Hyphenova Network",
    role: "Software Devloper Intern",
    dates: "Sep 2024 - Dec 2024",
    description: `Currently Developing cross-platform mobile and web applications using FlutterFlow for front-end and Python FastAPI for back-end, ensuring seamless
integration and responsiveness, which boosts user engagement.
Collaborating with teams and using Supabase for efficient database integration, while refining UI/UX design and optimizing app performance for faster load times
and smoother user experiences`,
    logo: `${hyp}`,
  },
  {
    company: "Illinois Institute of Technology",
    role: "Graduate Teaching Assistant",
    dates: "Jan 2024 - Present",
    description: `As a Graduate Teaching Assistant, I assist the instructor in developing course materials and providing guidance to students. I facilitate discussion sections and offer extra assistance to undergraduates and graduates, ensuring they understand the course content. My responsibilities also include grading tests and assignments, where I provide constructive feedback to help students improve their performance and grasp complex concepts better.`,
    logo: `${iit}`,
  },
  {
    company: "Infilon Technologies Pvt Ltd",
    role: "Jr Software Engineer",
    dates: "July 2022 - June 2023",
    description: `During my tenure as a Jr Software Engineer, I played a key role in analyzing, designing, and developing websites and modifying existing applications. I was responsible for creating UI mockups, managing Redux stored data, and integrating third-party React libraries. I deployed backend solutions using the MERN stack, providing accessible Restful APIs. I also designed APIs for admin panels, time management software, and e-commerce applications, significantly improving the user experience. My efforts in enhancing software development processes led to increased project effectiveness and productivity.`,
    logo: `${infilon}`
  },
  {
    company: "Esmsys Pvt Ltd",
    role: "Node Js Developer",
    dates: "Jan 2022 - June 2022",
    description: `As a Node Js Developer, I handled backend development and upgrades for existing software applications. I developed scalable and efficient server-side applications using NodeJS and Express frameworks, ensuring a fast and responsive user experience. I collaborated closely with front-end developers to fix coding issues and ensure proper database communication. Additionally, I designed and implemented security measures to protect sensitive data and prevent unauthorized access.`,
    logo: `${esmsys}`
  },
  {
    company: "Pruthatek",
    role: "Full Stack Developer Intern",
    dates: "July 2021 - Oct 2021",
    description: `I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.`,
    logo: `${pruthatek}`
  },
  {
    company: "The Sparks Foundation",
    role: "Data Science & Analytics Intern",
    dates: "Sep 2020 - Oct 2020",
    description: `As a Data Science & Analytics Intern, I collected and analyzed data from various sources to identify trends and patterns. I created data visualizations and reports to communicate insights and findings effectively. My assignments included machine learning and data analysis tasks for data modeling and statistical analysis, which assisted in decision-making processes and provided valuable business insights.`,
    logo: `${sparks}`
  },
  {
    company: "Infolabz",
    role: "IoT Intern",
    dates: "May 2021 - June 2021",
    description: `During my two-month IoT internship at Infolabz, I worked on developing and integrating IoT solutions for various applications. I was involved in designing and implementing IoT systems, including sensor data collection, processing, and visualization. I collaborated with the team to ensure seamless connectivity and functionality of IoT devices, contributing to innovative projects that leveraged IoT technology to solve real-world problems. This experience enhanced my understanding of IoT frameworks and technologies, preparing me for future challenges in the field.`,
    logo: `${infolabz}`
  },
];

function Experience1({ experiences, isLast }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const styles = {
    timelineContainer: {
      padding: "2rem 1rem",
    },
    timelineTitle: {
      fontSize: "1.875rem",
      fontWeight: "700",
      textAlign: "center",
      color: "white",
      marginBottom: "3rem",
    },
    timelineWrapper: {
      position: "relative",
    },
    experienceSection: {
      minHeight: "50vh",
      maxHeight: "fit-content",
      padding: isMobile ? "0rem 0rem" : "2rem 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    experienceCard: {
      width: "100%",
      maxWidth: "48rem",
      margin: isMobile ? "10px" : "0px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row", // Mobile: column, Desktop: row
      gap: isMobile ? "0.5rem" : "1.5rem",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      border: "2px dashed pink",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(4px)",
    },
    logoContainer: {
      flexShrink: 0,
      position: "relative",
    },
    progressIconContainer: {
      position: isMobile ? "relative" : "sticky",
      top: isMobile ? "0" : "2rem",
      display: "flex",
      flexDirection: isMobile ? "row" : "column",
      alignItems: "center",
      margin: 0,
      padding: 0,
    },
    logoWrapper: {
      width: isMobile ? "4rem" : "4rem",
      height: isMobile ? "4rem" : "4rem",
      borderRadius: "9999px",
      overflow: "hidden",
      objectfit: "cover",
      marginBottom: isMobile ? "0.5rem" : "1rem",
      backgroundColor: "rgba(255, 0, 136, 0.1)",
      padding: isMobile ? "0px" : "0rem",
      zIndex: 2,
      position: "relative",
     
    },
 
    logoImage: {
      borderRadius: "9999px",
      objectFit: "cover",
    },
    progressIcon: {
      transform: "translateX(-50px) rotate(-90deg)",
      position: "relative",
      zIndex: 2,
      left: isMobile ? "-28%" : "",
      width: "4rem",
      height:"4rem"
    },
    processCircle: {
      strokeDashoffset: 0,
      strokeWidth: 5,
      fill: "none",
      display: "flex",
      alignitems: "center",
      justifycontent: "center"
    },
    progressIconBg: {
      stroke: "pink",
      opacity: 0.2,
      strokeWidth: 5,
      fill: "none",
    },
    progressIconIndicator: {
      stroke: "pink",
      strokeWidth: 5,
      fill: "none",
    },
    timelineConnector: {
      position: "absolute",
      top: "calc(100% - 10px)",
      left: isMobile ? "-5%" : "50%",
      width: "2px",
      height: isMobile ? "100vh" : "70vh", // Adjust height for mobile
      transform: "translateX(-50%)",
      zIndex: 1,
      overflow: "hidden",
    },
    timelineConnectorInner: {
      width: "100%",
      height:  "50%",
      backgroundColor: "pink",
      opacity: 0.4,
      transformOrigin: "top",
    },
    contentContainer: {
      flex: 1,
    },
    companyName: {
      fontSize: isMobile ? "0.7rem" : "1.25rem",
      fontWeight: "600",
      color: "white",
    },
    roleContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginTop: "0.25rem",
      marginBottom: "0.75rem",
    },
    roleName: {
      fontSize: isMobile ? "0.7rem" : "1.125rem",
      fontWeight: "500",
      color: "pink",
    },
    separator: {
      color: "rgba(255, 255, 255, 0.4)",
    },
    dates: {
      fontSize: isMobile ? "0.5rem" : "0.875rem",
      color: "rgba(255, 255, 255, 0.6)",
    },
    description: {
      fontSize: isMobile ? "0.5rem" : "1rem",
      color: "rgba(255, 255, 255, 0.8)",
      lineHeight: "1.5",
      whiteSpace: "pre-line",
    },
  };

  return (
    <section style={styles.experienceSection} data-aos="zoom-in">
      <div ref={ref} style={ styles.experienceCard}>
        <div style={styles.logoContainer}>
          <figure style={ styles.progressIconContainer}>
            <div style={styles.logoWrapper}>
              <img
                src={experiences.logo || "/placeholder.svg"}
                alt={`${experiences.company} logo`}
                width={64}
                height={64}
                style={styles.logoImage}
              />
            </div>
            <svg style={styles.progressIcon} width="75" height="75" viewBox="0 0 100 100">
              <circle style={styles.progressIconBg} cx="50" cy="50" r="30" pathLength="1" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                style={{
                  ...styles.progressIconIndicator,
                  pathLength: scrollYProgress,
                }}
              />
            </svg>
            {!isLast && (
              <div style={styles.timelineConnector}>
                <motion.div
                  style={{
                    ...styles.timelineConnectorInner,
                    scaleY: scrollYProgress,
                  }}
                />
              </div>
            )}
          </figure>
        </div>

        <div style={styles.contentContainer}>
          <h3 style={styles.companyName}>{experiences.company}</h3>
          <div style={styles.roleContainer}>
            <h4 style={styles.roleName}>{experiences.role}</h4>
            <span style={styles.separator}>•</span>
            <span style={styles.dates}>{experiences.dates}</span>
          </div>
          <p style={styles.description}>{experiences.description}</p>
        </div>
      </div>
    </section>
  );
}




export const Experience = forwardRef((props, ref) => {

  return (
    <Card>
      <div className="experiencebg" ref={ref} >
        <Container className="experiencecontainer">
          <div className="header-container" data-aos="zoom-out">
            <div className="header-background">Professional</div>
            <h1 className="header-foreground">Experience</h1>
          </div>
          <>
            {experiences.map((exp, index) => (
              <>
                <Experience1 key={index} experiences={exp} isLast={index === experiences.length - 1} />
              </>

            ))}
          </>
          {/* <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-container ${index % 2 === 0 ? "left" : "right"
                  }`}
                onClick={() => handleShowModal(exp)}
                style={{ cursor: "pointer" }}
              >
                <div className="experience-container" data-aos="flip-left">
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
                  {/* <p className="experience-description">{exp.description}</p> */}
          {/* </div>
              </div>
            ))} */}
          {/* </div> */}

        </Container>
      </div>


    </Card>
  );
});
