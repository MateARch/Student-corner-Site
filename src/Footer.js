import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return ( 
    
        <div class="footer-section">
            <div className="aboutus">
                <h2>ABOUT US</h2>
                <h1>StudentCorner</h1>
                <p>StudentCorner, the Socio-Academic Portal of YCMA, is the most frequently visited website of YMCA. It was started out by a team of two enthusiastic students with an aim to provide a holistic solution to all student needs; those that are encountered during these four crucial years of college. </p>

            </div>
            <div className="quick-links">
                <ul type="circle">
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Notice</Link></li>
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Timetable</Link></li>
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Datesheet</Link></li>
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Notes</Link></li>
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Exam Papers</Link></li>
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Academics</Link></li>
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Syallabus</Link></li>
                <li><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Contribute</Link></li>
                <li><Link to="/contact" style={{textDecoration: "none" , color: 'inherit' }} >Contact Us</Link></li>
                </ul>
            </div>
            <div className="social">
            <h3>Contact us</h3>
              <div className="social-list"><img className="footer_icon" src="./images/i5.png" alt="" /><span>ymca,faridabad</span></div>
              <div className="social-list"><img className="footer_icon" src="images/i6.png" alt="" /><span>studentcornerymca@gmail.com</span></div>
              <div className="social-list"><img className="footer_icon" src="images/i7.png"  alt="" /><span>9817620774</span></div>
              
            </div>
        </div>
    )
}

export default Footer
