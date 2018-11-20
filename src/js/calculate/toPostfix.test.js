let toPostfix = require("./toPostfix");

describe(`toPostfix:`, () => {
  test(`toPostfix(tokens) should return ['5', '6', '3', '÷', '84', '×', '+']`, () => {
    const tokens = ["5", "+", "6", "÷", "3", "×", "84"];
    expect(toPostfix(tokens)).toEqual(["5", "6", "3", "÷", "84", "×", "+"]);
  });
  test(`toPostfix(tokens) should return ['1, '1', '+']`, () => {
    const tokens = ["1", "+", "1"];
    expect(toPostfix(tokens)).toEqual(["1", "1", "+"]);
  });
  test(`toPostfix(tokens) should return ['11, '1', '+']`, () => {
    const tokens = ["11", "+", "1"];
    expect(toPostfix(tokens)).toEqual(["11", "1", "+"]);
  });
});
