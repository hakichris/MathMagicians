import React from 'react';
import './calculator.css';
import Result from './result';
import calculate from './logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: '', operation: '' });
  const { total, next, operation } = state;

  const handlerClick = (e) => {
    const updateState = calculate(state, e.target.name);
    setState(updateState);
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
          <button name="AC" type="button" onClick={handlerClick}>AC</button>
          <button name="+/-" type="button" onClick={handlerClick}>+/-</button>
          <button name="%" type="button" onClick={handlerClick}>%</button>
          <button name="÷" type="button" onClick={handlerClick} className="highlight">÷</button>
          <button name="7" type="button" onClick={handlerClick}>7</button>
          <button name="8" type="button" onClick={handlerClick}>8</button>
          <button name="9" type="button" onClick={handlerClick}>9</button>
          <button name="*" type="button" onClick={handlerClick} className="highlight">*</button>
          <button name="4" type="button" onClick={handlerClick}>4</button>
          <button name="5" type="button" onClick={handlerClick}>5</button>
          <button name="6" type="button" onClick={handlerClick}>6</button>
          <button name="-" type="button" onClick={handlerClick} className="highlight">-</button>
          <button name="1" type="button" onClick={handlerClick}>1</button>
          <button name="2" type="button" onClick={handlerClick}>2</button>
          <button name="3" type="button" onClick={handlerClick}>3</button>
          <button name="+" type="button" onClick={handlerClick} className="highlight">+</button>
          <button name="0" type="button" onClick={handlerClick} id="zero">0</button>
          <button name="." type="button" onClick={handlerClick}>.</button>
          <button name="=" type="button" onClick={handlerClick} className="highlight">=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
