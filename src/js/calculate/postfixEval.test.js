let postfixEval = require("./postfixEval");

describe(`postfixEval:`, () => {
  test(`postfixEval(tokens) should return 173`, () => {
    const tokens = ["5", "6", "3", "÷", "84", "×", "+"];
    expect(postfixEval(tokens)).toEqual(173);
  });
  test(`postfixEval(tokens) should return 2`, () => {
    const tokens = ["1", "1", "+"];
    expect(postfixEval(tokens)).toEqual(2);
  });
  test(`postfixEval(tokens) should return 12`, () => {
    const tokens = ["11", "1", "+"];
    expect(postfixEval(tokens)).toEqual(12);
  });
});
