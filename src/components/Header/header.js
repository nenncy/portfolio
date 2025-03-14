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
import { Button } from "react-bootstrap";

export const Header = ({ scrollToSection }) => {

  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      expand="lg"
      className="colorChange navbarclass"
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
            <Nav.Link className="navbarlink" >
            </Nav.Link>
            <Nav.Link className="navbarlink">
              <button
                onClick={() => scrollToSection("about")}
                style={{ margin: "10px", color: "pink", background: "none", border: "none", cursor: "pointer" }}
              >
                About
              </button>
            </Nav.Link>
          
            <Nav.Link className="navbarlink">
              <button
                onClick={() => scrollToSection("skill")}
                style={{ margin: "10px", color: "pink", background: "none", border: "none", cursor: "pointer" }}
              >
                Skill
              </button>
            
            </Nav.Link>
            <Nav.Link className="navbarlink">
              <button
                onClick={() => scrollToSection("education")}
                style={{ margin: "10px", color: "pink", background: "none", border: "none", cursor: "pointer" }}
              >
                Education
              </button>
            </Nav.Link>
            <Nav.Link className="navbarlink">
              <button
                onClick={() => scrollToSection("experience")}
                style={{ margin: "10px", color: "pink", background: "none", border: "none", cursor: "pointer" }}
              >
                Experience
              </button>
            </Nav.Link>
            <Nav.Link className="navbarlink">
              <button
                onClick={() => scrollToSection("project")}
                style={{ margin: "10px", color: "pink", background: "none", border: "none", cursor: "pointer" }}
              >
                Project
              </button>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
