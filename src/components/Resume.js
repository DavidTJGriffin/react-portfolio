import React from 'react'
import resumeScreenshot from "../assets/images/resumeScreenshot.png"

function Resume() {
  return (
    <div className='projects'>
      <h1 className="title-name">RESUME</h1>
      <div className="project1" style={{ backgroundImage: `url(${resumeScreenshot})` }}>
        <div className="project-name">
          <h3>Resume</h3>
        </div>
          <a
            href={process.env.PUBLIC_URL + "/assets/images/David Griffin's Resume.pdf"}
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            <span className="sr-only">Download Resume PDF</span>
          </a>
      </div>

    </div>
  )
}

export default Resume
