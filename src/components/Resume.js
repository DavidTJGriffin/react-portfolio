import React from 'react'
import resumeScreenshot from "../assets/images/resumeScreenshot.png"

function Resume() {
  return (
    <div id='resume-section'>
      <h1 className="title-name" id='resume-title'>RESUME</h1>
      <p className='res-link'>Download a copy of my resume by clicking the image below: </p>
        <div className="project1" style={{ backgroundImage: `url(${resumeScreenshot})` }}>
                <div className="project-name">
                    <h3>Resume</h3>
                </div>
                <a href={process.env.PUBLIC_URL + '/assets/images/david-resume.pdf'}></a>
            </div>

       
    </div>
  )
}

export default Resume
