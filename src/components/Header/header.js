import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../Styles/header.css'
import { useState } from 'react';
 

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
   
    
    <Navbar expand="lg"  className={
        colorChange
            ? "navbar colorChange"
            : "navbarclass"
    } fixed="top">
        <Container >
            <Navbar.Brand href="#home">
            <span>{"<Nency "}</span>
            <span>{" Patel/>"}</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="circle-justify-content-end">
                    <Nav.Link className='navbarlink' href="#home">Home</Nav.Link>
                    <Nav.Link className='navbarlink' href="#about">About Me</Nav.Link>
                    <Nav.Link className='navbarlink' href="#project">Projects</Nav.Link>
                    <Nav.Link className='navbarlink' href="#contact">Contact</Nav.Link>
                    <Nav.Link className='navbarlink' href="#resume">Resume</Nav.Link>
                   
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

      );
  
}

