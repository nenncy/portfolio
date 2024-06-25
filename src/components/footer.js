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
            <p>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
            </p>
            <p>
              Full Stack Developer | Python | MERN | React.js - Crafting
              Seamless Tech Solutions for Businesses
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
