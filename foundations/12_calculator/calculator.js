const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, number) => {
    return acc + number;
    }, 0);
};

const multiply = function(array) {
  return array.reduce((acc, number) => {
    return acc * number;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  } 
  else {
    let iterations = [];
    for (let i = 1; i <= a; i++) {
      let results = i;
      iterations.push(results);
    }
    return iterations.reduce((acc, number) => {
      return acc * number;
    }, 1);
  }
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
