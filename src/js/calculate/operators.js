const OPERATORS = {
  add: {
    symbol: "+",
    precedence: 2,
    calculate: (addendA, addendB) => addendA + addendB
  },
  subtract: {
    symbol: "-",
    precedence: 2,
    calculate: (minuend, subtrahend) => minuend - subtrahend
  },
  divide: {
    symbol: "/",
    precedence: 3,
    calculate: (dividend, divisor) => dividend / divisor
  },
  multiply: {
    symbol: "*",
    precedence: 3,
    calculate: (factorA, factorB) => factorA * factorB
  }
};

module.exports = OPERATORS;
