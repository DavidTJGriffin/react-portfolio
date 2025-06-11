import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/about" className="nav-logo">David</Link>

      <ul className={`nav-menu ${isActive ? null : "active"}`}>
        <li className="nav-item" onClick={handleToggle}>
          <Link to="/about" className="nav-link">About</Link>
        </li>

        <li className="nav-item" onClick={handleToggle}>
          <Link to="/work" className={`nav-link ${isActive ? null : "active"}`}>Work</Link>
        </li>

        <li className="nav-item" onClick={handleToggle}>
          <Link to="/contact" className={`nav-link ${isActive ? null : "active"}`}>Contact</Link>
        </li>

        <li className="nav-item" onClick={handleToggle}>
          <Link to="/resume" className={`nav-link ${isActive ? null : "active"}`}>Resume</Link>
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