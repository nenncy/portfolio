import React from 'react'
import { Container, Row,Col , Button} from 'react-bootstrap'
import myimage from './images/cropped_img.JPG'
import './Styles/intro.css'
import Aos from 'aos'
import linkdinIcon from "./images/linkedin-in.svg";
import githubIcon from "./images/github.svg";
import mailicon1 from "./images/envelope-solid1.svg"

export const Intro = () => {
  return (
    <div  className='intro' >
       <Container className="about-section">
      <Row className="align-items-center">
        {/* Left Column - Image */}
        <Col md={5} className="text-center" data-aos= "zoom-out">
          <img src={myimage} alt="Nency" className="profile-img" />
        </Col>

        {/* Right Column - Text */}
        <Col md={7} data-aos= "zoom-out">
          <h2 className="title">I'm Nency, Passionate Software Developer & Tech Enthusiast</h2>
          <p className="description">
          Master’s student in Computer Science at Illinois Tech, with 2+ years of experience in full-stack development. I specialize in React.js, Node.js, and API-driven applications, crafting scalable and user-friendly solutions. Passionate about technology and innovation, I enjoy exploring new tools and frameworks to enhance development efficiency.


          </p>
          <p className="description">
          Connect with me on LinkedIn, GitHub, or Medium where I share insights on software development and best coding practices.
          </p>

         
          <Button data-aos= "zoom-out" className="custom-btn" href='https://www.linkedin.com/in/nency-patel-68aa751a0/'> LinkedIn </Button >
          <Button data-aos= "zoom-out" className="custom-btn" href='mailto:nencyvpatel3010@gmail.com'> Email </Button >
          <Button data-aos= "zoom-out" className="custom-btn" href='https://github.com/nenncy/'> Github </Button >
          <Button data-aos= "zoom-out" className="custom-btn" href='https://medium.com/@nencyvpatel3010'> Blog </Button >
        </Col>
      </Row>
    </Container>
     
    </div>
  )
}
