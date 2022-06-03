import React from 'react'
import lettersScreenshot from "../assets/images/lettersScreenshot.png";
import copyrightTimerScreenshot from "../assets/images/copyrightTimerScreenshot.png"
import favdashScreenshot from "../assets/images/favdashScreenshot.png"
import quizScreenshot from "../assets/images/quizScreenshot.png"
import runbuddyScreenshot from "../assets/images/runbuddyScreenshot.png"

function Work() {
  return (
    <div id="work-container">
    <div className="projects" >
        <h1 className="title-name">WORK</h1>
        <div className="project1" style={{ backgroundImage: `url(${lettersScreenshot})` }}>
                <div className="project-name">
                    <h3>L3tters</h3>
                    <p>React/Socket.io/GraphQL</p>
                </div>
                <a href="https://l3tters.herokuapp.com/" target="_blank"></a>
            </div>

        <div className="small-projects">

        <div className="project" style={{ backgroundImage: `url(${copyrightTimerScreenshot})` }}>
            <div className="project-name">
                <h3>Copyright Timer</h3>
                <p>Foundation/Wikidata API/Google Calendar API</p>
            </div>
            <a href="https://moses-ian.github.io/copyright-timer/" target="_blank"></a>
        </div>

            <div className="project" style={{ backgroundImage: `url(${favdashScreenshot})` }}>
                <div className="project-name">
                    <h3>Favdash</h3>
                    <p>Node.js/MySql/Express.js</p>
                </div>
                <a href="https://fav-dash.herokuapp.com/" target="_blank"></a>
            </div>

          

            <div className="project" style={{ backgroundImage: `url(${quizScreenshot})` }}>
                <div className="project-name">
                    <h3>Code Quiz</h3>
                    <p>Javascript/CSS</p>
                </div>
                <a href="https://davidtjgriffin.github.io/javascript-coding-quiz/" target="_blank"></a>
            </div>

            <div className="project" style={{ backgroundImage: `url(${runbuddyScreenshot})` }}>
                <div className="project-name">
                    <h3>Run Buddy</h3>
                    <p>HTML/CSS</p>
                </div>
                <a href="https://davidtjgriffin.github.io/run-buddy/" target="_blank"></a>
            </div>
        </div>
    </div>

</div>
  )
}

export default Work