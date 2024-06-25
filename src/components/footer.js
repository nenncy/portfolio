import React from "react";
import "../components/Styles/footer.css";
import myimage from "../components/images/nency.png";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-content">
            <h2>Reach Out to me!</h2>
            <p className="sayhello">
            Got a project in mind or just want to say hello? My inbox is always open!
            </p>
            <p>
            As a Software Developer with a passion for Python, MERN, and React.js, I specialize in crafting seamless tech solutions that drive business success. Let's turn your innovative ideas into reality!
            </p>
            <div className="footer-location">
              <span className="location-icon">📍</span>
              <span>Chicago, United States</span>
            </div>
            <div className="footer-social-icons">
              <a
                href="mailto:nencyvpatel3010@gmail.com"
                className="social-icon email"
              >
                ✉️
              </a>
              <a
                href="https://www.linkedin.com/in/nency-patel-68aa751a0/"
                className="social-icon linkedin"
              >
                🔗
              </a>
              <a
                href="https://github.com/nenncy/"
                className="social-icon github"
              >
                🐙
              </a>
            </div>
          </div>
          <div className="footer-image-container">
            <img src={myimage} alt="Profile" className="footer-image" />
          </div>
        </div>
      </Container>
    </div>
  );
};
