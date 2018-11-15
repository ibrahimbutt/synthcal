const { add, subtract, multiply, divide } = require("./operators");

const OPERATORS = {
  [add.symbol]: add,
  [subtract.symbol]: subtract,
  [multiply.symbol]: multiply,
  [divide.symbol]: divide
};

const tail = array => array[array.length - 1];
const detach = array => array.slice(0, array.length - 1);

const toPostfix = input => {
  let stack = [];
  let queue = [];

  input.forEach(token => {
    if (!isNaN(token)) {
      queue = queue.concat(token);
    } else if (OPERATORS.hasOwnProperty(token)) {
      while (
        tail(stack) &&
        OPERATORS[tail(stack)].precedence >= OPERATORS[token].precedence
      ) {
        const stackHead = tail(stack);
        stack = detach(stack);
        queue = queue.concat(stackHead);
      }
      stack = stack.concat(token);
    }
  });

  stack.forEach(token => {
    const stackHead = tail(stack);
    stack = detach(stack);
    queue = queue.concat(stackHead);
  });

  return queue;
};

module.exports = toPostfix;
