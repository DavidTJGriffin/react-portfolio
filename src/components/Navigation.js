import React, { useEffect, useState } from 'react';

function Navigation(props) {
  const { currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = currentPage
  }, [currentPage]);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActive(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setActive(!isActive);
  };

  //   function mobileMenu() {
  //     hamburger.classList.toggle("active");
  //     navMenu.classList.toggle("active");
  // }


  // function closeMenu() {
  //     hamburger.classList.remove("active");
  //     navMenu.classList.remove("active");
  // }

  return (

    <nav className="navbar">
      <a
        href="#about-me"
        className="nav-logo"
        onClick={() => {
          setCurrentPage('About');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        David
      </a>

      <ul className={`nav-menu ${isActive ? null : "active"}`}>
        <li className="nav-item" onClick={() => {
          handleToggle();
          setCurrentPage('About');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <a href="#about-me" className="nav-link">About</a>
        </li>

        <li className="nav-item" onClick={() => {
          handleToggle();
          setCurrentPage('Work');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <a href="#work" className={`nav-link ${isActive ? null : "active"}`}>Work</a>
        </li>

        <li className="nav-item" onClick={() => {
          handleToggle();
          setCurrentPage('Contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <a href="#contact-me" className={`nav-link ${isActive ? null : "active"}`}>Contact</a>
        </li>

        <li className="nav-item" onClick={() => {
          handleToggle();
          setCurrentPage('Resume');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <a href="#resume-me" className={`nav-link ${isActive ? null : "active"}`}>Resume</a>
        </li>

      </ul>
      <div className={`hamburger ${isActive ? null : "active"}`} onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )





}
export default Navigation