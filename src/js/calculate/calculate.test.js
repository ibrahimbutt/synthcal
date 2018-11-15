const calculate = require("./calculate");

describe("Calculate:", () => {
  test('calculate(["15", "*", "5", "/", "50", "-", "456", "+", "10000"]) should return 20', () => {
    expect(
      calculate(["15", "*", "5", "/", "50", "-", "456", "+", "10000"])
    ).toBe(9545.5);
  });
});
