import React, { useCallback } from "react";
import Wave from "react-wavify";
import "./Styles/main.css";
import { Button, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import illustration from "../components/images/illustration.svg";
import { Card } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import githubIcon from "../components/images/github.svg";
import linkdinIcon from "../components/images/linkedin-in.svg";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Canvas } from "@react-three/fiber";
import robotImage from './images/robot.png'
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import AOS from "aos";
import backgroundImg from './images/background.jpg'


export const Main = () => {
  const [init, setInit] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      setOpacity(Math.min(1, window.scrollY / 300));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollY = window.scrollY;
      const newOpacity = Math.min(1, scrollY / 300); // Adjust fade-in effect

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  return (

    // </div>
    <div className="main-container">
      <p className="brandname" data-aos="fade-up">
        <>
          {["SOFTWARE", "DEVELOPER"].map((word, wordIndex) => (
            <div key={wordIndex} style={{ textAlign: "center" }}>
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={`${wordIndex}-${letterIndex}`}
                  className={`letter ${hoveredLetter === `${wordIndex}-${letterIndex}` ? "magnify" : ""}`}
                  onMouseEnter={() => setHoveredLetter(`${wordIndex}-${letterIndex}`)}
                  onMouseLeave={() => setHoveredLetter(null)}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </>

      </p>
      <div
        className="orbit"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)", // Centers the circle
        }}
      ></div>
      <TypeAnimation
        sequence={[
          // "A passionate and skilled software developer with extensive experience in Python, MERN stack, React.js, Node.js, Express, and MongoDB. Proven track record in designing and implementing efficient, scalable web applications and collaborating with cross-functional teams to deliver high-quality projects. Committed to leveraging cutting-edge technologies to solve complex problems and drive business success.",
          "Let's connect and create something great !!",
          2000,

          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        data-aos="zoom-in"
        style={{ fontSize: "1em", marginTop: "20px", maxWidth: "70%", textAlign: "center", color: "white", display: "inline-block" }}
      />
      <div className="fancy" data-aos="zoom-in">
        <a href='/SWE_Nency_Patel.pdf' download>
          <Button className="resumebtn">
            RESUME
          </Button>
        </a>

      </div>

    </div>

  );

};
