import React, { useEffect } from 'react';

function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    useEffect(() => {
        document.title = currentPage
      }, [currentPage]);

      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");


      function mobileMenu() {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      }
      const navLink = document.querySelectorAll(".nav-link");

      navLink.forEach(n => n.addEventListener("click", closeMenu));

      function closeMenu() {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      }
  return (
    <nav className="navbar">
            <a href="#" className="nav-logo">David</a>
            <ul className="nav-menu">
                <li className="nav-item">
                    <div className="nav-link">
                            <a onClick={() => setCurrentPage('About')}>About</a>
                        </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                       <a onClick={() => setCurrentPage('Work')}>Work</a>
                        </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                    <a onClick={() => setCurrentPage('Contact')}>Contact</a>
                        
                        </div>
                </li>
                <li className="nav-item">
                <a className="nav-link">
                <a onClick={() => setCurrentPage('Resume')}>Resume</a>
                </a>
                </li>
            </ul>
            <div className="hamburger" onClick={mobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
  )
}
export default Navigation