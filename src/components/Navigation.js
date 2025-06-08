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
            <button type="button" className="nav-logo" onClick={() => setCurrentPage('About')}>David</button>
            <ul className={`nav-menu ${isActive ?  null : "active"}`}>
                <li className="nav-item" onClick={handleToggle}>
                    <button type="button" className="nav-link" onClick={() => setCurrentPage('About')}>
                        About
                    </button>
                </li>
                <li className="nav-item" onClick={handleToggle}>
                    <button type="button" className={`nav-link ${isActive ? null : "active"}`} onClick={() => setCurrentPage('Work')}>
                        Work
                    </button>
                </li>
                <li className="nav-item" onClick={handleToggle}>
                    <button type="button" className={`nav-link ${isActive ? null : "active"}`} onClick={() => setCurrentPage('Contact')}>
                    Contact

                    </button>
                </li>
                <li className="nav-item" onClick={handleToggle}>
                <button type="button" className={`nav-link ${isActive ? null : "active"}`} onClick={() => setCurrentPage('Resume')}>
                Resume
                </button>
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