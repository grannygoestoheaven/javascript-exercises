const sumAll = require("../05_sumAll/sumAll");

const add = function(nb1, nb2) {
	return nb1 + nb2;
};

const subtract = function(nb1, nb2) {
  return nb1 - nb2;
};

const sum = function(...args) {
  let i = 0;
  let sum = args[0];
  while (i < args.length - 1)
  {
      sum = sum + array[i + 1];
      i++;
  }
  return sum;
};

const multiply = function(...args) {
  let i = 0;
  let res = args[0];
  while (i < args.length - 1)
  {
      res = res * array[i + 1];
      i++;
  }
  return res;
};

const power = function() {
	
};

const factorial = function() {
  return sumAll(array[0], array[array.length - 1]);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
