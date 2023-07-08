import React, { useState } from 'react';
import Button from './Button';
import './App.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number);
  };

  const handleOperatorClick = (operator) => {
    setDisplayValue(displayValue + operator);
  };

  const handleEqualClick = () => {
    try {
      // eslint-disable-next-line no-new-func
      const result = new Function(`return ${displayValue}`)();
      setResult(result);
    } catch (error) {
      setResult('Error');
    }
  };
  


  const handleClearClick = () => {
    setDisplayValue('');
    setResult('');
  };

  return (
 
    <div className="calculator">
        <div className="calculator-title">
        <h1> SIMPLE - CALCULATOR</h1>
      </div>
      <div className="display">{displayValue}</div>
      <div className="result">{result}</div>
      <div className="keypad">
        <div className="row">
          <Button onClick={() => handleNumberClick(7)}>7</Button>
          <Button onClick={() => handleNumberClick(8)}>8</Button>
          <Button onClick={() => handleNumberClick(9)}>9</Button>
          <Button onClick={() => handleOperatorClick('+')}>+</Button>
        </div>
        <div className="row">
          <Button onClick={() => handleNumberClick(4)}>4</Button>
          <Button onClick={() => handleNumberClick(5)}>5</Button>
          <Button onClick={() => handleNumberClick(6)}>6</Button>
          <Button onClick={() => handleOperatorClick('-')}>-</Button>
        </div>
        <div className="row">
          <Button onClick={() => handleNumberClick(1)}>1</Button>
          <Button onClick={() => handleNumberClick(2)}>2</Button>
          <Button onClick={() => handleNumberClick(3)}>3</Button>
          <Button onClick={() => handleOperatorClick('*')}>*</Button>
        </div>
        <div className="row">
          <Button onClick={() => handleNumberClick(0)}>0</Button>
          <Button onClick={() => handleOperatorClick('.')}>.</Button>
          <Button onClick={() => handleOperatorClick('/')}>/</Button>
          <Button onClick={handleEqualClick}>=</Button>
        </div>
        <div className="row">
          <Button onClick={handleClearClick}>C</Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
