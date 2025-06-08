import React from 'react';
import javascriptLogo from "../assets/images/javascriptLogo.png";
import aboutPicture from "../assets/images/aboutPictureUpdated.jpg";
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
            <img id='david-picture' src={aboutPicture} alt="David Griffin headshot" />
            <section id="bio-info">
                <p>
                    I’ve always been driven by curiosity. From rebuilding Linux systems from scratch to reverse-engineering traffic in Wireshark, I’ve found clarity in complexity and meaning in structure. But that drive started long before I ever touched a terminal.
                </p>
                <br></br>
                <p>
                    I was born in Colorado Springs and raised between California and Arizona, where I moved often and faced poverty early on. What never left me was that instinct to ask why—and to build systems that made life just a bit more navigable. I first expressed that in music, becoming first chair clarinet and earning a full scholarship to NAU’s summer music camp. Later, I channeled that mindset into technology, completing a full-stack boot camp and exploring AI, cloud computing, and networking through hands-on projects that demanded real troubleshooting, not just tutorials.
                </p>
                <br></br>
                <p>
                    In 2024, I changed my major to Artificial Intelligence and Machine Learning, and the very next year, I joined Year Up United. For the first time, I had a structure—a launchpad to turn skills into systems and purpose into practice. I’ve since led national student initiatives, earned technical certifications, and designed my own mind-mapping study system to build cross-layer knowledge in IT.
                </p>
                <br></br>
                <p>
                    Now, I’m focused on building a career at the intersection of systems integration, cloud infrastructure, and ethical AI. I believe technology should empower people, not replace them—and I’m here to design the systems that make that possible.
                </p>

                <br />
            </section>
            <h1 id="technologies-header">TECHNOLOGIES</h1>
            <div id="logo-box">
                <img className='logo-img' src={javascriptLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={bootstrapLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={mysqlLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={mongodbLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={jqueryLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={htmlLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={reactjsLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={nodejsLogo} alt="" aria-hidden="true" />
                <img className='logo-img' src={cssLogo} alt="" aria-hidden="true" />
            </div>

        </div>
    )
}

export default About;