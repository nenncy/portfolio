import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/header.css";
import { useState } from "react";
import linkdinIcon from "../images/linkedin-in.svg";
import githubIcon from "../images/github.svg";
import linkdinicon1 from "../images/linkedin1.svg"
import githubIcon1 from "../images/github1.svg"
import mailIcon from "../images/envelope-solid.svg"
import mailIcon1 from "../images/envelope-solid1.svg"

export const Header = () => {
  
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      expand="lg"
      className={colorChange ? "navbar colorChange" : "navbarclass"}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <span>{"<Nency "}</span>
          <span>{" Patel/>"}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="circle-justify-content-end">
            <Nav.Link className="navbarlink" href="#home">
            </Nav.Link>
            <Nav.Link className="navbarlink" href="#about">
            <a
                  href="https://www.linkedin.com/in/nency-patel-68aa751a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="sociallink"
                >
                  <img
                    className="socialicon"
                    src={ colorChange ? linkdinIcon: linkdinicon1}
                    alt="Linkedin"
                  />
                </a>
            </Nav.Link>
            <Nav.Link className="navbarlink" href="#project">
              {" "}
              <a
                href="https://github.com/nenncy/"
                target="_blank"
                rel="noreferrer"
                className="sociallink"
              >
                <img className="socialicon" src={colorChange ? githubIcon: githubIcon1} alt="GitHub" />
              </a>
            </Nav.Link>
    
            <Nav.Link className="navbarlink" href="#resume">
            <a
                href="mailto:nencyvpatel3010@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="sociallink"
              >
                <img className="socialicon" src={colorChange ? mailIcon1 : mailIcon} alt="GitHub" />
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
