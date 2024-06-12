import React from "react";
import Wave from "react-wavify";
import "./Styles/main.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import Nency from "../components/images/nency_image.jpg";
import illustration from "../components/images/illustration.svg";
import { Card } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import githubIcon from "../components/images/github.svg";
import linkdinIcon from "../components/images/linkedin-in.svg";


export const Main = () => {
  return (
    <div className="mainbg">
      <div id="home">
        <div className="hero">
          <Row>
            <Col>
              <div className="mypitch">
                <h1 className="myinfo">
                  <TypeAnimation
                    sequence={[
                      "Hii ! I am Nency Patel",
                      2000,

                      () => {
                        console.log("Sequence completed");
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "2em", display: "inline-block" }}
                  />
                </h1>
                <h1 className="myinfo">
                  A passionate and skilled full stack developer with extensive
                  experience in React.js, Node.js, Express, and MongoDB. Proven
                  track record in designing and implementing efficient, scalable
                  web applications and collaborating with cross-functional teams
                  to deliver high-quality projects.
                </h1>
                <div className="social-media">
                  <a
                    href="https://www.linkedin.com/in/nency-patel-68aa751a0/"
                    target="_blank"
                    rel="noreferrer"
                    className="sociallink"
                  >
                    <img
                      className="socialicon"
                      src={linkdinIcon}
                      alt="Linkedin"
                    />
                  </a>
                  <a
                    href="https://github.com/nenncy/"
                    target="_blank"
                    rel="noreferrer"
                    className="sociallink"
                  >
                    <img className="socialicon" src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </div>
            </Col>
            <Col>

              <div className="myimage">
              {/* <video loop muted autoPlay>
                    <source src={path} type="video/mp4"></source>
                    Your Browser does not support HTML5 Video!
                </video> */}
                <img className="img-nency" src={illustration}></img>
              </div>
            </Col>
          </Row>
          {/* <Wave mask="url(#mask)" fill="#c7d6c4" >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2000"
                  height="400"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave> */}
        </div>
      </div>
      {/* <div className="nameproject">
        <h1 className="headproject">Projects</h1>
      </div>
      <div className="Projectstab">
        <Container>
          <Row className="projectrow">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Lost Person Records</h2>
                <p className="card-body">
                  A website that helps people reconnect with lost family members
                  by allowing users to provide information and search for lost
                  individuals.
                </p>
                <a href="#" className="gitbutton">
                  Github Link
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Lost Person Records</h2>
                <p className="card-body">
                  A website that helps people reconnect with lost family members
                  by allowing users to provide information and search for lost
                  individuals.
                </p>
                <a href="#" className="gitbutton">
                  Github Link
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Lost Person Records</h2>
                <p className="card-body">
                  A website that helps people reconnect with lost family members
                  by allowing users to provide information and search for lost
                  individuals.
                </p>
                <a href="#" className="gitbutton">
                  Github Link
                </a>
              </div>
            </div>
          </Row>
       
        </Container>
      </div>
      <Wave mask="url(#mask)" fill="#c7d6c4">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave> */}

    </div>
  );
};
