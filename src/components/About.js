import React from 'react';
import javascriptLogo from "../assets/images/javascriptLogo.png";
import aboutPicture from "../assets/images/aboutPicture.jpg";
import bootstrapLogo from "../assets/images/bootstrapLogo.png"
import mysqlLogo from "../assets/images/mysqlLogo.jpg"
import mongodbLogo from "../assets/images/mongodbLogo.png"
import jqueryLogo from "../assets/images/jqueryLogo.png"
import htmlLogo from "../assets/images/htmlLogo.png"
import reactjsLogo from "../assets/images/reactjsLogo.png"
import nodejsLogo from "../assets/images/nodejsLogo.png"
import cssLogo from "../assets/images/cssLogo.png"


function About() {
    return (
        <div className="title" id="about">
            <h1 className="title-name">ABOUT</h1>
            <img id='david-picture' src={aboutPicture} alt="Picture of David" />
            <section id="bio-info">
                <p> I am a developer with love for learning new technologies. I
                    peer
                    into
                    the
                    darkness and bring light by developing solutions to problems. </p>
                <br />
                <p>I'm a hardworking, meticulous worker with an appetite to
                    learn and work with various technologies. I have indispensable
                    problem solving and critical thinking capabilities. Discovering
                    and researching problems and delving into the unknown is my
                    oxygen.</p>
                <br />
            </section>

            <div id="logo-box">
                <img className='logo-img' src={javascriptLogo} alt="" />
                <img className='logo-img' src={bootstrapLogo} alt="" />
                <img className='logo-img' src={mysqlLogo} alt="" />
                <img className='logo-img' src={mongodbLogo} alt="" />
                <img className='logo-img' src={jqueryLogo} alt="" />
                <img className='logo-img' src={htmlLogo} alt="" />
                <img className='logo-img' src={reactjsLogo} alt="" />
                <img className='logo-img' src={nodejsLogo} alt="" />
                <img className='logo-img' src={cssLogo} alt="" />

            </div>

        </div>
    )
}

export default About;