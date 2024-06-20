import React from "react";
import "../components/Styles/education.css";
import { Card, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";


export const Education = () => {
  return (
    <div className="educationbg">
      <h2 className="educationname">EDUCATION</h2>
      <div className="edudiv">
        {/* <ScrollAnimation animateIn="bounceInRight"> */}
        <Row className="edurow">
          <Col>
            <Card className="educationcard">
              {/* <Card.Header>Univercity</Card.Header> */}
              <Card.Body>
                <Card.Title>Masters of Computer Science</Card.Title>
                <Card.Text>Illinois Institute of Technology</Card.Text>
                <Button className="statusbtn">AUG-23 - PRESENT</Button>
                <Button className="gpabtn"> 3.66 / 4.00</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="educationcard">
              {/* <Card.Header>Univercity</Card.Header> */}
              <Card.Body>
                <Card.Title>Bachelor of Computer Engineering</Card.Title>
                <Card.Text>Vishwakarma Government Engineering College</Card.Text>
                <Button className="statusbtn">JUN-18 - JUN-22</Button>
                <Button className="gpabtn"> 9.10 / 10.00</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* </ScrollAnimation> */}
      </div>
    </div>
  );
};
