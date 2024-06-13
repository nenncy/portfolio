import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import "../components/Styles/experience.css";

export const Experience = () => {
  return (
    <div className="experiencebg">
      <h2 className="exprproject">EXPERIENCE</h2>
      <Row className="exprow">
        <Col>
          <div className="experience-container">
            <div className="experience-header">
              <img
                src="/path/to/your/image.png"
                alt="Meganos Software Logo"
                className="experience-logo"
              />
              <div>
                <h2 className="experience-company">Meganos Software</h2>
                <h3 className="experience-role">Django Developer</h3>
                <p className="experience-dates">Aug 2022 - Present</p>
              </div>
            </div>
            <p className="experience-description">
              I crafted backends for diverse web apps, APIs, and WebSockets in
              e-commerce, podcasts, and property management. Managed server
              upkeep, deployments on Linux, Heroku, and AWS S3. Implemented
              PyTest for automated unit and integration testing, slashing 4
              hours of manual testing each sprint, fortifying a dependable and
              flawless code foundation.
            </p>
          </div>
        
        </Col>
        <Col>
        <div className="experience-container">
            <div className="experience-header">
              <img
                src="/path/to/your/image.png"
                alt="Meganos Software Logo"
                className="experience-logo"
              />
              <div>
                <h2 className="experience-company">Meganos Software</h2>
                <h3 className="experience-role">Django Developer</h3>
                <p className="experience-dates">Aug 2022 - Present</p>
              </div>
            </div>
            <p className="experience-description">
              I crafted backends for diverse web apps, APIs, and WebSockets in
              e-commerce, podcasts, and property management. Managed server
              upkeep, deployments on Linux, Heroku, and AWS S3. Implemented
              PyTest for automated unit and integration testing, slashing 4
              hours of manual testing each sprint, fortifying a dependable and
              flawless code foundation.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="exprow">
        <Col>
          <div className="experience-container">
            <div className="experience-header">
              <img
                src="/path/to/your/image.png"
                alt="Meganos Software Logo"
                className="experience-logo"
              />
              <div>
                <h2 className="experience-company">Meganos Software</h2>
                <h3 className="experience-role">Django Developer</h3>
                <p className="experience-dates">Aug 2022 - Present</p>
              </div>
            </div>
            <p className="experience-description">
              I crafted backends for diverse web apps, APIs, and WebSockets in
              e-commerce, podcasts, and property management. Managed server
              upkeep, deployments on Linux, Heroku, and AWS S3. Implemented
              PyTest for automated unit and integration testing, slashing 4
              hours of manual testing each sprint, fortifying a dependable and
              flawless code foundation.
            </p>
          </div>
        
        </Col>
        <Col>
        <div className="experience-container">
            <div className="experience-header">
              <img
                src="/path/to/your/image.png"
                alt="Meganos Software Logo"
                className="experience-logo"
              />
              <div>
                <h2 className="experience-company">Meganos Software</h2>
                <h3 className="experience-role">Django Developer</h3>
                <p className="experience-dates">Aug 2022 - Present</p>
              </div>
            </div>
            <p className="experience-description">
              I crafted backends for diverse web apps, APIs, and WebSockets in
              e-commerce, podcasts, and property management. Managed server
              upkeep, deployments on Linux, Heroku, and AWS S3. Implemented
              PyTest for automated unit and integration testing, slashing 4
              hours of manual testing each sprint, fortifying a dependable and
              flawless code foundation.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
