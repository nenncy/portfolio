import logo from './components/images/N.PNG';
import './App.css';
import { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
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
import ChatWidget from 'react-chatify';


function App() {
  // const [chatWindowOpen, setChatWindowOpen] = useState(true);
  // const [context, setContext] = useState('');

  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      about: aboutRef,
      skill: skillRef,
      experience: experienceRef,
      education: educationRef,
      project: projectRef,

    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

   const [messages, setMessages] = useState([
    { text: "Hi! You can ask me anything.", sender: "bot" }
  ]);

  const handleUserMessage = async (message) => {
    setMessages(prev => [...prev, { text: message, sender: "user" }]);
    try {
      const res = await fetch('/api/geminiChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { text: data?.reply || "No response", sender: "bot" }]);
    } catch (error) {
      console.error('Error talking to Gemini:', error);
      setMessages(prev => [...prev, { text: "Sorry, something went wrong.", sender: "bot" }]);
    }
  };

  // const handleToggle = (chatWindowOpen) => {
  //   setChatWindowOpen(!chatWindowOpen);
  // };

  // useEffect(() => {
  //   addResponseMessage('Hi, You are talking to me!');
  // }, []);

  // const handleNewUserMessageFun = async (message) => {
  //   console.log("User said:", message);
  //   // addResponseMessage("Thanks for reaching out! I’ll get back to you soon.");

  //   try {
  //     const res = await fetch('http://localhost:5000/api/geminiChat', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ message }),
  //     });

  //     const data = await res.json();
  //     addResponseMessage(data?.reply);
  //   } catch (error) {
  //     console.error('Error talking to Gemini:', error);
  //     addResponseMessage("Sorry, something went wrong.");
  //   }
  // };

  return (
    <>
      <Header scrollToSection={scrollToSection}></Header>
      <About ref={aboutRef}></About>
      <Skill ref={skillRef}></Skill>
      <Education ref={educationRef}></Education>
      <Experience ref={experienceRef}></Experience>
      <Project ref={projectRef}></Project>
      <Footer></Footer>
      <ChatWidget
        title="Chat with me"
        messages={messages}
        onUserMessage={handleUserMessage}
      />
      {/* <Widget
      title="Chat with me"
      subtitle="Ask me anything!"
      handleToggle={handleToggle}
      handleNewUserMessage={(message) => {
        handleNewUserMessageFun(message);
      }}
      profileAvatar={logo}
      showCloseButton={true}
      showFullScreenButton={true}

    ></Widget> */}
    </>
  );
}

export default App;
