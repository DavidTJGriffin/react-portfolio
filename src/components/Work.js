import React from 'react'

function Work() {
  return (
    <div id="work-container">
    <div className="projects">
        <h1 className="title-name">WORK</h1>
        <div className="project1" id="copyright-timer">
            <div className="project-name">
                <h3>Copyright Timer</h3>
                <p>Foundation/Wikidata API/Google Calendar API</p>
            </div>
            <a href="https://moses-ian.github.io/copyright-timer/" target="_blank"></a>
        </div>


        <div className="small-projects">

            <div className="project" id="led-wall">
                <div className="project-name">
                    <h3>Favdash</h3>
                    <p>Node.js/MySql/Express.js</p>
                </div>
                <a href="https://fav-dash.herokuapp.com/" target="_blank"></a>
            </div>

            <div className="project" id="calculator">
                <div className="project-name">
                    <h3>Calculator</h3>
                    <p>React/Javascript/CSS</p>
                </div>
                <a href="#" target="_blank"></a>
            </div>

            <div className="project" id="pastel">
                <div className="project-name">
                    <h3>Pastel Puzzels</h3>
                    <p>Mern Stack</p>
                </div>
                <a href="#" target="_blank"></a>
            </div>

            <div className="project" id="run-buddy">
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