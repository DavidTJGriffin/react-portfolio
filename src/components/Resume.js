import React from 'react'

function Resume() {
  return (
      <div id='resume-section'>
           <h1 className="title-name">RESUME</h1>
    <p className='res-link'>Download a copy of my resume <a className='resume-link' href={process.env.PUBLIC_URL + '/assets/images/david-resume.pdf'}>here</a>.</p>
    </div>
  )
}

export default Resume
