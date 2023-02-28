import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Calculator from './Components/calculator';
import Home from './home';
import './App.css';
import Quote from './quote';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <div className="verticalLine" />
          <li><Link to="/calculator">Calculator</Link></li>
          <div className="verticalLine" />
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>

  );
}
export default App;
