const toPostfix = require("./toPostfix");
const postfixEval = require("./postfixEval");

const calculate = input => postfixEval(toPostfix(input));

module.exports = calculate;
