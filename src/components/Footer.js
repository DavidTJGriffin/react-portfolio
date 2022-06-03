import React from 'react'
import phoneIcon from '../assets/images/phoneIcon.svg'
import mailIcon from '../assets/images/mailIcon.svg'
import githubLogo from '../assets/images/githubLogo.svg'
import linkedinLogo from '../assets/images/linkedinLogo.svg'

function Footer() {
  return (
    <section id="contact">
      

      <div id="contact-list">
        <a className="contact-info" href="tel:+16233414122"><img src={phoneIcon} alt="" /></a>
        <a className="contact-info" href="mailto:david.dtjg2001@gmail.com"><img src={mailIcon} alt="" /></a>
        <a className="contact-info" href="https://github.com/DavidTJGriffin"><img src={githubLogo} alt="" /></a>
        <a className="contact-info" href="https://www.linkedin.com/in/david-griffin-a51193195/"><img src={linkedinLogo} alt="" /></a>
      </div>
    </section>
  )
}

export default Footer;