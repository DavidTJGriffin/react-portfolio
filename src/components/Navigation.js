import React, { useEffect } from 'react';

function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    useEffect(() => {
        document.title = currentPage
      }, [currentPage]);

 
  return (
    <nav class="navbar">
            <a href="#" class="nav-logo">David</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a className={currentPage === 'About' ? 'navActive' : ''} class="nav-link">
                            <a onClick={() => setCurrentPage('About')}>About</a>
                        </a>
                </li>
                <li class="nav-item">
                    <a className={currentPage === 'Work' ? 'navActive' : ''} class="nav-link">
                       <a onClick={() => setCurrentPage('Work')}>Work</a>
                        </a>
                </li>
                <li class="nav-item">
                    <a className={currentPage === 'Contact' ? 'navActive' : ''} class="nav-link">
                    <a onClick={() => setCurrentPage('Contact')}>Contact</a>
                        
                        </a>
                </li>
                <li class="nav-item">
                    <a href="https://drive.google.com/file/d/1dysq8fhNzEsUB7qBTpyaWzLDhzo48Znb/view?usp=sharing"
                        class="nav-link">Resume</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
  )
}
export default Navigation