const Big = require("big.js");

const OPERATORS = {
  add: {
    symbol: "+",
    precedence: 2,
    calculate: (addendA, addendB) => Number(Big(addendA).plus(addendB))
  },
  subtract: {
    symbol: "-",
    precedence: 2,
    calculate: (minuend, subtrahend) => Number(Big(minuend).minus(subtrahend))
  },
  divide: {
    symbol: "÷",
    precedence: 3,
    calculate: (dividend, divisor) => {
      Big.DP = 2;
      return Number(Big(dividend).div(divisor));
    }
  },
  multiply: {
    symbol: "×",
    precedence: 3,
    calculate: (factorA, factorB) => Number(Big(factorA).times(factorB))
  }
};

module.exports = OPERATORS;
