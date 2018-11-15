const { add, subtract, multiply, divide } = require("./operators");

const OPERATORS = {
  [add.symbol]: add,
  [subtract.symbol]: subtract,
  [multiply.symbol]: multiply,
  [divide.symbol]: divide
};

const postfixEval = input => {
  let stack = [];
  input.forEach(token => {
    if (!isNaN(token)) {
      stack = stack.concat(Number(token));
    } else {
      const rightOperand = stack.pop();
      const leftOperand = stack.pop();
      stack = stack.concat(
        OPERATORS[token].calculate(leftOperand, rightOperand)
      );
    }
  });
  return stack[0];
};

module.exports = postfixEval;
