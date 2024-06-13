import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router } from 'react-router-dom';
import { Header } from './components/Header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from './components/main';
import { Container } from 'react-bootstrap';
import { Skill } from './components/skill';
import { Education } from './components/education';
import { Experience } from './components/experience';
import { Project } from './components/project';
import { Footer } from './components/footer';

function App() {
  return (
    <>
    
    <Header></Header>
    <Main></Main>
    <Skill></Skill>
    <Education></Education>
    <Experience></Experience>
    <Project></Project>
    <Footer></Footer>
    
    </>
  );
}

export default App;
