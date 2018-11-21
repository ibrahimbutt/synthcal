const OPERATORS = require("../src/js/calculate/operators");

describe("Operator Tests:", () => {
  describe("Add:", () => {
    test(`OPERATORS.add.symbol should equal "+"`, () => {
      expect(OPERATORS.add.symbol).toBe("+");
    });
    test(`OPERATORS.add.precedence should equal 2`, () => {
      expect(OPERATORS.add.precedence).toBe(2);
    });
    test(`OPERATORS.add.calculate(1, 2) should equal 3`, () => {
      expect(OPERATORS.add.calculate(1, 2)).toBe(3);
    });
  });

  describe("Subtract:", () => {
    test(`OPERATORS.subtract.symbol should equal "-"`, () => {
      expect(OPERATORS.subtract.symbol).toBe("-");
    });
    test(`OPERATORS.subtract.precedence should equal 2`, () => {
      expect(OPERATORS.subtract.precedence).toBe(2);
    });
    test(`OPERATORS.subtract.calculate(2, 1) should equal 1`, () => {
      expect(OPERATORS.subtract.calculate(2, 1)).toBe(1);
    });
  });

  describe("Divide:", () => {
    test(`OPERATORS.divide.symbol should equal "÷"`, () => {
      expect(OPERATORS.divide.symbol).toBe("÷");
    });
    test(`OPERATORS.divide.precedence should equal 3`, () => {
      expect(OPERATORS.divide.precedence).toBe(3);
    });
    test(`OPERATORS.divide.calculate(10, 5) should equal 2`, () => {
      expect(OPERATORS.divide.calculate(10, 5)).toBe(2);
    });
  });

  describe("Multiply:", () => {
    test(`OPERATORS.multiply.symbol should equal "×"`, () => {
      expect(OPERATORS.multiply.symbol).toBe("×");
    });
    test(`OPERATORS.multiply.precedence should equal 3`, () => {
      expect(OPERATORS.multiply.precedence).toBe(3);
    });
    test(`OPERATORS.multiply.calculate(2, 5) should equal 10`, () => {
      expect(OPERATORS.multiply.calculate(2, 5)).toBe(10);
    });
  });
});
