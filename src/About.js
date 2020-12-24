import React from "react"
import Footer from "./Footer"
import './About.css'

function About(){
    return(
        <div className="about-content">
            <div class="team-section">
        <h1>Our Team</h1>
        <span className="border"></span>
        <div className="ps">
            <a href ="#p1"><img src={require('/home/sourav/Desktop/studentcorner-master/src/images/p1.jpg')} alt = "" /></a>
            <a href ="#p2"><img src={require('/home/sourav/Desktop/studentcorner-master/src/images/p2.jpg')} alt = "" /></a>
        </div>
    </div>
    <div className="section" id="p1">
        <span className="name" >Sourav Khan</span>
        <span className="border"></span>
        <p>
        I am Sourav Khan,I am a Student of JC BOSE UST YMCA.I am also a competitive programmer and learning Web Development.We made this for the students who faced difficulties in starting collage days.In this site we use different features and functonailites,we would like to make it more useful by doing continous updates in it.
            
        </p>
    </div>
    <div className="section" id="p2">
        <span className="name" >Sameer</span>
        <span className="border"></span>
        <p>
        I am Sameer Saini,I am a Student of JC BOSE UST YMCA.I am also a competitive programmer and learning Web Development.We made this for the students who faced difficulties in starting collage days.In this site we use different features and functonailites,we would like to make it more useful by doing continous updates in it.
        </p>
    </div>
         </div>
    );
}

export default About;