import React from "react";
import "../components/Styles/project.css";
import { Row,Col } from "react-bootstrap";

export const Project = () => {
  return (
    <div className="projectbg">
      <h2 className="projecthead">PROJECT</h2>
      <Row>
        
        <div className="project-container">
            <div className="project-card">
                <h3 className="project-title">developer-portfolio</h3>
                <p className="project-description">
                    Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.
                </p>
                <div className="project-buttons">
                    <button className="btn btn-github">GitHub</button>
                    <button className="btn btn-demo">DEMO</button>
                </div>
            </div>
            <div className="project-card">
                <h3 className="project-title">Giebo</h3>
                <p className="project-description">
                    A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.
                </p>
                <div className="project-buttons">
                    <button className="btn btn-demo">DEMO</button>
                </div>
            </div>
        </div>
        

      </Row>
      <Row>
        
        <div className="project-container">
            <div className="project-card">
                <h3 className="project-title">developer-portfolio</h3>
                <p className="project-description">
                    Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.
                </p>
                <div className="project-buttons">
                    <button className="btn btn-github">GitHub</button>
                    <button className="btn btn-demo">DEMO</button>
                </div>
            </div>
            <div className="project-card">
                <h3 className="project-title">Giebo</h3>
                <p className="project-description">
                    A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.
                </p>
                <div className="project-buttons">
                    <button className="btn btn-demo">DEMO</button>
                </div>
            </div>
        </div>
        

      </Row>
    </div>
  );
};
