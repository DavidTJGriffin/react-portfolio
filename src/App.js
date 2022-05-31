import React, { useState } from 'react';
import Header from './components/Header'
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div className="App">
      
     
    
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      <Hero />

      {currentPage === 'About' ? <About></About> : ''}
      {currentPage === 'Work' ? <Work></Work> : ''}
      {currentPage === 'Contact' ? <Contact></Contact> : ''}
      {currentPage === 'Footer' ? <Footer></Footer> : ''}
      {currentPage === 'Resume' ? <Resume></Resume> : ''}
    
  
</div>
);
}

export default App;
