import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { BrowserRouter,Router } from 'react-router-dom';
import { Header } from './components/Header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from './components/main';
import { About } from './components/About';
import { Container } from 'react-bootstrap';
import { Skill } from './components/skill';
import { Education } from './components/education';
import { Experience } from './components/experience';
import { Project } from './components/project';
import { Footer } from './components/footer';
import "aos/dist/aos.css";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      about: aboutRef,
      skill: skillRef,
      experience : experienceRef,
      education: educationRef,
      project: projectRef,

    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Header scrollToSection={scrollToSection}></Header>
    <About ref={aboutRef}></About>
    <Skill ref={skillRef}></Skill>
    <Education ref= {educationRef}></Education>
    <Experience ref= {experienceRef}></Experience>
    <Project ref={projectRef}></Project>
    <Footer></Footer> 
    </>
  );
}

export default App;
