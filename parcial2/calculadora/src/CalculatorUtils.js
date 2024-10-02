
export const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case 'X':
        return firstOperand * secondOperand;
      case '÷':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };
  