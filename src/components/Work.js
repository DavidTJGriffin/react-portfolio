import React from 'react'
import passwordGenerator from "../assets/images/passwordGenerator.png";
import ipAddress from "../assets/images/ipAddress.png"
import weatherDashboard from "../assets/images/weatherDashboard.png"
import studyQuiz from "../assets/images/studyQuiz.png"
import sqlEmployeeTracker from "../assets/images/sqlEmployeeTracker.png"

function Work() {
  return (
    <div id="work-container">
    <div className="projects" >
        <h1 className="title-name">WORK</h1>
        <div className="project1" style={{ backgroundImage: `url(${passwordGenerator})` }}>
                <div className="project-name">
                    <h3>Password Generator</h3>
                    <p>Javascript/HTML/CSS</p>
                </div>
                <a href="https://davidtjgriffin.github.io/strong-password-generator/" target="_blank" rel="noreferrer">
                    <span className="sr-only">L3tters website</span>
                </a>
            </div>

        <div className="small-projects">

        <div className="project" style={{ backgroundImage: `url(${ipAddress})` }}>
            <div className="project-name">
                <h3>IP Address Classifier</h3>
                <p>Python/Poetry</p>
            </div>
            <a href="https://pypi.org/project/ip-address-classifier/" target="_blank" rel="noreferrer">
                <span className="sr-only">Copyright Timer application</span>
            </a>
        </div>

            <div className="project" style={{ backgroundImage: `url(${weatherDashboard})` }}>
                <div className="project-name">
                    <h3>Weather Dashboard</h3>
                    <p>Javascript/HTML/CSS/Openweather API</p>
                </div>
                <a href="https://davidtjgriffin.github.io/forecast-weather-dashboard/" target="_blank" rel="noreferrer">
                    <span className="sr-only">Favdash application</span>
                </a>
            </div>

          

            <div className="project" style={{ backgroundImage: `url(${sqlEmployeeTracker})` }}>
                <div className="project-name">
                    <h3>SQL Employee Tracker</h3>
                    <p>Javascript/CSS</p>
                </div>
                <a href="https://github.com/DavidTJGriffin/sql-employee-tracker" target="_blank" rel="noreferrer">
                    <span className="sr-only">JavaScript Code Quiz</span>
                </a>
            </div>

            <div className="project" style={{ backgroundImage: `url(${studyQuiz})` }}>
                <div className="project-name">
                    <h3>CLI Study Quiz Game</h3>
                    <p>Python/Poetry</p>
                </div>
                <a href="https://pypi.org/project/study-quiz-cli/" target="_blank" rel="noreferrer">
                    <span className="sr-only">Run Buddy website</span>
                </a>
            </div>
        </div>
    </div>

</div>
  )
}

export default Work
