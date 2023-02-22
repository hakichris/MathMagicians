import React from 'react';
import './calculator.css';
import Result from './result';

function Calculator() {
  return (
    <>
      <div className="container">
        <Result />
        <div className="keypad">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="highlight">÷</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="highlight">*</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="highlight">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="highlight">+</button>
          <button type="button" id="zero">0</button>
          <button type="button">.</button>
          <button type="button" className="highlight">=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
