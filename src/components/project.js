import React ,{forwardRef , useEffect , useState} from "react";
import "../components/Styles/project.css";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react"
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { faArrowLeft, faArrowRight } from "@fortawesome/fontawesome-free-solid";
import "slick-carousel/slick/slick.css";
import aos from 'aos'
import "slick-carousel/slick/slick-theme.css";

export const Project = forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        style={{
          position: "absolute",
          left: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "30px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#121212",  // Ensures arrow is white
          zIndex: 1000,
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        style={{
          position: "absolute",
          right: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "30px",
          fontWeight:"10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#121212",  // Ensures arrow is white
          zIndex: 1000,
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    );
  };
  

  const projects = [
    {
      title: "GitHub Analytics Dashboard",
      description:
        "Developed a full-stack web application integrating React (frontend) and Flask (backend) to analyze GitHub repository activity, including issue creation, closure rates, and trend predictions. Implemented RESTful APIs and database integration to efficiently fetch, process, and store GitHub data, optimizing query performance and ensuring real-time analytics. Deployed scalable microservices on Google Cloud using Docker, enabling high-performance forecasting models (LSTM, Prophet, StatsModel) for predictive analytics and trend visualization.",
      github: "https://github.com/nenncy/GitHub-Analytics-Dashboard-with-React-Flask",
      skills: ["React.js", "Flask", "Python", "Docker", "Google Cloud", "LSTM", "REST APIs"],
    },
  
    {
      title: "Data Curation Project - Billionaires Statistics Dataset (2023)",
      description:
        "Conducted comprehensive data curation on the Billionaires Statistics Dataset (2023), improving data accuracy and usability. Utilized Python’s Pandas and Geopy libraries for in-depth data analysis and geospatial integration, enabling insights into global wealth distribution and billionaire demographics. Implemented advanced data imputation and transformation techniques to ensure data integrity and reliability. Applied powerful data visualization tools to uncover key wealth patterns, supporting data-driven decision-making and economic research.",
      github: "https://github.com/IITTeaching/cs520-f23-group-26/tree/main/Data%20Curation%20Project", // Add actual repo link if available
      skills: ["Python", "Pandas", "Geopy", "Data Curation", "Data Visualization", "Data Imputation", "EDA"],
    },
    {
      title: "Crypto Forecast Analyzer in Machine Learning",
      description:
        "Developed a machine learning-based cryptocurrency forecasting system using Python and Jupyter Notebooks. Leveraged LSTM networks and Prophet forecasting models to predict cryptocurrency prices based on comprehensive historical data. Conducted extensive data preprocessing using Kaggle datasets, ensuring data cleaning and standardization for accurate predictions. Performed Exploratory Data Analysis (EDA) to identify market dynamics, visualize price trends, and assess risk profiles. Integrated real-time market data to improve model accuracy and ensure reliability in forecasting cryptocurrency price trends.",
      github: "https://github.com/nenncy/Crypto-Forecast-Analyzer", // Add actual repo link if available
      skills: ["Python", "Machine Learning", "LSTM", "Prophet", "Jupyter Notebooks", "Data Analysis", "EDA"],
    },
    {
      title: "Lost Persons Record",
      description:
        "I developed an innovative website using the MERN stack (MongoDB, Express, React, Node.js) to help people reconnect with lost family members. The site includes Admin and User panels, allowing administrators to input and manage detailed information about lost individuals while users can report and search for missing persons. I integrated real-time communication features using WebSockets and RESTful APIs, enabling authorized users to send and receive messages about the whereabouts of lost individuals. The project ensures a responsive and intuitive user interface and emphasizes data accuracy and reliability through thorough verification processes.",
      github: "https://github.com/nenncy/Lost-Person-Records",
      // demo: "DB",
      skills: ["HTML", "CSS", "JAVASCRIPT", "NODEJS", "MONGODB"],
    },
    {
      title: "Movie-Hub",
      description:
        "I developed Movie Hub,a dynamic web application for exploring and discovering movies, using Node.js and React.js. This project involved creating a responsive user interface for browsing movie details, ratings, and reviews. I implemented a RESTful API to fetch movie data, ensuring efficient data handling and integration. Additionally, I utilized React.js to build a seamless and interactive user experience, while managing application state with Redux. This project significantly enhanced my skills in full-stack development and modern web technologies.",
      github: "https://github.com/nenncy/movie-hub-web",
      skills: ["React.js", " Node.js", "Express", "MongoDB", "TMDB API"],

    },
    {
      title: "Developer Portfolio",
      description:
        "I am building a personal portfolio website using ReactJS to showcase my projects, skills, and professional experience. This project involves creating a clean and responsive user interface to highlight my work effectively. I have implemented various sections including an about me page, a project gallery, a resume section, and a contact form. By leveraging ReactJS, I ensured a dynamic and interactive user experience. Additionally, I utilized modern web development practices and tools to enhance the performance and accessibility of the site. This project has helped me refine my front-end development skills and demonstrate my ability to create professional and engaging web applications.",
      github: "https://github.com/nenncy/portfolio",
      demo: "https://portfolio-eight-orcin-51.vercel.app/",
      skills: ["ReactJS", "Javascript", "Bootsrap", "HTML", "CSS"]
     
    },
    {
      title: "User Management Module",
      description:
        "During my internship at Esmsys Pvt Ltd from January 2022 to March 2022, I developed a comprehensive User Management system using Node.js and React.js. This project provided a standardized solution for managing user information, modules, and access rights, featuring role-based access control for secure and efficient user management. I integrated a robust SQL database for reliable data storage and created an intuitive interface with React.js. This experience significantly enhanced my full-stack development skills and knowledge in implementing secure, scalable user management solutions.",
      // github: "https://github.com/your-repo/fitlife",
      // demo: "https://demo-url.com/fitlife",
      skills: ["Javascript", "NodeJs", "reactjs", "sql", "express"]

    },
    {
      title: "WebAPI Bot",
      description:
        "I developed WebApi-Bot,a sophisticated bot designed to interact with the Gemini API, automating cryptocurrency data retrieval and processing tasks. This project involved creating a flexible and scalable bot framework using Node.js, capable of handling multiple API requests and responses efficiently. The bot was designed to fetch real-time cryptocurrency data, process it, and deliver the information in a structured format. By implementing robust error handling and logging mechanisms, I ensured the bot's reliability and maintainability. This project enhanced my skills in back-end development and API integration, showcasing my ability to build complex, automated solutions.",
      github: "https://github.com/nenncy/WebApi-Bot",
      // demo: "https://demo-url.com/fitlife",
      skills: ["Javascript", "NodeJs", "reactjs", "sql", "express", "Gemini", "html", "css"]

    },
    {
      title: "Scratch and Win",
      description:
        "I developed Scratch and Win,a simple and engaging mobile application using Flutter. This app allows users to scratch a card on their screen to reveal a hidden prize. The project involved creating an interactive and responsive user interface that mimics the physical action of scratching a card. Using Flutter's rich set of widgets, I implemented smooth animations and touch interactions to enhance the user experience. The application also features basic game logic to determine and display random prizes. This project significantly improved my skills in mobile app development and provided hands-on experience with Flutter and Dart.",
      github: "https://github.com/nenncy/Scratch-and-Win",
      // demo: "https://demo-url.com/fitlife",
      skills: ["Dart", "Flutter", "HTML"]

    },
  ];

  var settings = {
    dots: isMobile ? true: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true,
    slidesToShow: isMobile ? 1 : 2,
    infinite: true,
    speed: 500,
    
  };

  return (
    <>
      <div className="projectbg" ref={ref}>
          <div className="header-container" data-aos="zoom-out">
            <div className="header-background">Personal</div>
            <h1 className="header-foreground">Project</h1>
          </div>
          <Container>
          <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="project-container" data-aos="zoom-in">
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
                              Demo
                            </a>

                          )}
                        </div>
                      </div>
                    </div>
                  ))}
            
              </Slider>

          </Container>
        </div>

    </>
  );
});
