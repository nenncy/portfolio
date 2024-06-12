import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router } from 'react-router-dom';
import { Header } from './components/Header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from './components/main';
import { Container } from 'react-bootstrap';
import { Skill } from './components/skill';

function App() {
  return (
    <>
    
    <Header></Header>
    <Main></Main>
    <Skill></Skill>
    
    </>
  );
}

export default App;
