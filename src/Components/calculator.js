import { React, useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Result from './result';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: '', operation: '' });
  const { total, next, operation } = state;

  const handler = (e) => {
    const UpdateState = calculate(state, e.target.name);
    setState(UpdateState);
  };

  return (
    <>
      <div className="container">
        <Result
          total={total}
          next={next}
          operation={operation}
        />
        <div className="keypad">
          <button name="AC" type="button" onClick={handler}>AC</button>
          <button name="+/-" type="button" onClick={handler}>+/-</button>
          <button name="%" type="button" onClick={handler}>%</button>
          <button name="÷" type="button" onClick={handler} className="highlight">÷</button>
          <button name="7" type="button" onClick={handler}>7</button>
          <button name="8" type="button" onClick={handler}>8</button>
          <button name="9" type="button" onClick={handler}>9</button>
          <button name="x" type="button" onClick={handler} className="highlight">x</button>
          <button name="4" type="button" onClick={handler}>4</button>
          <button name="5" type="button" onClick={handler}>5</button>
          <button name="6" type="button" onClick={handler}>6</button>
          <button name="-" type="button" onClick={handler} className="highlight">-</button>
          <button name="1" type="button" onClick={handler}>1</button>
          <button name="2" type="button" onClick={handler}>2</button>
          <button name="3" type="button" onClick={handler}>3</button>
          <button name="+" type="button" onClick={handler} className="highlight">+</button>
          <button name="0" type="button" onClick={handler} id="zero">0</button>
          <button name="." type="button" onClick={handler}>.</button>
          <button name="=" type="button" onClick={handler} className="highlight">=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
