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
            <a href="#" className="nav-logo">David</a>
            <ul className={`nav-menu ${isActive ?  null : "active"}`}>
                <li className="nav-item" onClick={handleToggle}>
                    <div className="nav-link">
                            <a onClick={() => setCurrentPage('About')}>About</a>
                        </div>
                </li>
                <li className="nav-item" onClick={handleToggle}>
                    <div className={`nav-link ${isActive ? null : "active"}`}>
                       <a onClick={() => setCurrentPage('Work')}>Work</a>
                        </div>
                </li>
                <li className="nav-item" onClick={handleToggle}>
                    <div className={`nav-link ${isActive ? null : "active"}`}>
                    <a onClick={() => setCurrentPage('Contact')}>Contact</a>
                        
                        </div>
                </li>
                <li className="nav-item" onClick={handleToggle}>
                <div className={`nav-link ${isActive ? null : "active"}`}>
                <a onClick={() => setCurrentPage('Resume')}>Resume</a>
                </div>
                </li>
            </ul>
            <div className={`hamburger ${isActive ?  null : "active"}`} onClick={handleToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
  )

  


     
}
export default Navigation