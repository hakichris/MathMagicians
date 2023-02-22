imagecolorpicker.com/en

import React from 'react';
import './calculator.css';
import Result from './result';

const Calculator  = () => {
  const operators = ['AC', '+/-', '%', '÷', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <>
    <div class="container">
      <Result />
      <div className="calc-buttons">
        {operators.map((item) => <button key={item} type="button" name={item}>{item}</button>)}
      </div>
    </div>
    </>
  );
}

export default Calculator;