import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const location = useLocation();

  useEffect(() => {
    let page = location.pathname.replace('/', '');
    if (!page) page = 'about';
    setCurrentPage(page.charAt(0).toUpperCase() + page.slice(1));
  }, [location.pathname]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      <Hero />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
