import React, { useState } from 'react';
import Header from './components/Header'
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div className="App">
      
     
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      <Hero />

      {currentPage === 'About' ? <About></About> : ''}
      {currentPage === 'Work' ? <Work></Work> : ''}
      {currentPage === 'Footer' ? <Footer></Footer> : ''}
    </>
  
</div>
);
}

export default App;
