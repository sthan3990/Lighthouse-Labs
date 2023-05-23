// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin (standard input)
const { stdin } = require("process");

// setup interface to handle user input from stdin
const setupInput = function (con) {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  // Handle CTRL+C User Input
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log(`Exiting Program. Bye.`);
    process.exit();
  }
};

module.exports = {setupInput};