
import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { calculate } from './CalculatorUtils';
import './Calculator.css'; 

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [operationHistory, setOperationHistory] = useState(''); 

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setOperationHistory(''); 
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
    
    
    setOperationHistory(prev => prev + ` ${display} ${nextOperator}`);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
      
        <Display history={operationHistory} value={display} />
        <div className="button-grid">
          <Button label="7" onClick={() => inputDigit(7)} />
          <Button label="8" onClick={() => inputDigit(8)} />
          <Button label="9" onClick={() => inputDigit(9)} />
          <Button label="/" onClick={() => performOperation('/')} />
          <Button label="4" onClick={() => inputDigit(4)} />
          <Button label="5" onClick={() => inputDigit(5)} />
          <Button label="6" onClick={() => inputDigit(6)} />
          <Button label="*" onClick={() => performOperation('*')} />
          <Button label="1" onClick={() => inputDigit(1)} />
          <Button label="2" onClick={() => inputDigit(2)} />
          <Button label="3" onClick={() => inputDigit(3)} />
          <Button label="-" onClick={() => performOperation('-')} />
          <Button label="0" onClick={() => inputDigit(0)} />
          <Button label="." onClick={inputDecimal} />
          <Button label="=" onClick={() => performOperation('=')} />
          <Button label="+" onClick={() => performOperation('+')} />
          <Button label="🗑️" className="clear-button" onClick={clear} />
        </div>
      </div>
    </div>
  );
}
