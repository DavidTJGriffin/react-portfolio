import React, { useState } from 'react';
import Navigation from './Navigation';

function Header(props) {
    const { currentPage, setCurrentPage } = props;

  return (
    <header className="header">
        <div className='navigation'>
           <Navigation
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
           ></Navigation>
       </div>
    </header>
  )
}

export default Header;