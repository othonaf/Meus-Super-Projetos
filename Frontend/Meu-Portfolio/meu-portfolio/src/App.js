import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Trabalhos from './Trabalhos';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className='App'>
          <div className='background'></div>
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Trabalhos" element={<Trabalhos />} />
          </Routes>
          <div className='background-footer'>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;

