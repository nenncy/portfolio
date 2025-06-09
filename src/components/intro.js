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
          I’m a recent Computer Science graduate from Illinois Institute of Technology with 2+ years of experience in full-stack development. I specialize in building scalable, user-friendly applications using React.js, Node.js, and RESTful APIs.

I thrive on solving real-world problems with clean code and efficient design. I'm always exploring new tools and frameworks to stay ahead in the fast-paced world of tech.
🎶 Beyond coding, I’m passionate about live music, dancing, and discovering new sounds. 🎨 In my free time, I enjoy painting, taking walks to recharge, and finding creativity in the world around me.

          </p>
          <p className="description">
          Let’s connect! I share thoughts on software development, coding best practices, and career growth on LinkedIn, GitHub, and Medium.
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
