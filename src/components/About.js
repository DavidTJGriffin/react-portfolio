import React from 'react';
import javascriptLogo from "../assets/images/javascriptLogo.png";
import aboutPicture from "../assets/images/aboutPicture.jpg";
import bootstrapLogo from "../assets/images/bootstrapLogo.png"
import mysqlLogo from "../assets/images/mysqlLogo.jpg"

 function About() {
  return (
    <div class="title" id="about">
    <h1 class="title-name">ABOUT</h1>
    <img id='david-picture' src={aboutPicture} alt="Picture of David"/>
    <section id="bio-info">
        <p> I am a developer with love for learning new technologies. Delving into the unknown is my oxygen. I
            peer
            into
            the
            darkness and bring light by developing solutions to problems. </p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim
            id
            est
            laborum.</p>
        <br />
    </section>

    <div id="logo-box">
        <img class="logo-img" className='logo-img' src={javascriptLogo} alt=""/>
        <img class="logo-img" className='logo-img' src={bootstrapLogo} alt=""/>
        <img class="logo-img" className='logo-img' src={mysqlLogo} alt=""/>
        
    </div>

</div>
  )
}

export default About;