import React from 'react'
import "../components/Styles/footer.css"

export const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer-content">
        <h2>Reach Out to me!</h2>
        <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
        <p>Full Stack Developer | Python | Django | React.js - Crafting Seamless Tech Solutions for Businesses</p>
        <div className="footer-location">
            <span className="location-icon">📍</span>
            <span>Lahore, Pakistan</span>
        </div>
        <div className="footer-social-icons">
            <a href="mailto:someone@example.com" className="social-icon email">✉️</a>
            <a href="https://www.linkedin.com/in/yourprofile" className="social-icon linkedin">🔗</a>
            <a href="https://github.com/yourprofile" className="social-icon github">🐙</a>
            <a href="https://www.instagram.com/yourprofile" className="social-icon instagram">📸</a>
        </div>
    </div>
    <div className="footer-image-container">
        <img src="/path/to/your/image.png" alt="Profile" className="footer-image" />
    </div>
</div>
  )
}
