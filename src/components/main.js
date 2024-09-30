import React ,{ useCallback } from "react";
import Wave from "react-wavify";
import "./Styles/main.css";
import { Button, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
// import Nency from "../components/images/nency_image.jpg";
import illustration from "../components/images/illustration.svg";
import { Card } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import githubIcon from "../components/images/github.svg";
import linkdinIcon from "../components/images/linkedin-in.svg";
// import Particles from "react-particles";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles"; 
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";



export const Main = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#4c4c67",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  // if (init) {
  //   return (
     
  //   );
  // }
  // else{

  return (
    <div>
       <div className="mainbg">
      
      {/* <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      /> */}
    
    {/* <Container> */}
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
                <ScrollAnimation animateIn='fadeIn'>
                <h1 className="myinfo">
                A passionate and skilled software developer with extensive experience in Python, MERN stack, React.js, Node.js, Express, and MongoDB. Proven track record in designing and implementing efficient, scalable web applications and collaborating with cross-functional teams to deliver high-quality projects. Committed to leveraging cutting-edge technologies to solve complex problems and drive business success.
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
                <div className="resume">
                  <a href='/Resume_NencyPatel.pdf' download>
                  <Button className="resumebtn">
                    RESUME
                  </Button>
                  </a>

                </div>
                </ScrollAnimation>
              </div>
              
            </Col>
            <Col>
          
                {/* <ScrollAnimation animateIn='bounceInRight'> */}
              <div className="myimage">
              {/* <video loop muted autoPlay>
                    <source src={path} type="video/mp4"></source>
                    Your Browser does not support HTML5 Video!
                </video> */}
                <img className="img-nency" src={illustration}></img>
              </div>
              {/* </ScrollAnimation> */}
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
    

    </div>
   
  );
// }
};
