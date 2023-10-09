import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './elements/Login';
import SelecionaCaminho from './elements/SelecionaCaminho';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SelecionaCaminho/*" element={<SelecionaCaminho />} />
      </Routes>
    </Router>
  );
}

export default App;
