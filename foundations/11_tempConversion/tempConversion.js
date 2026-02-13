const convertToCelsius = function(tempf) {
  let resultInFahrenheit = ((tempf - 32) * 5/9);
  return Math.round(resultInFahrenheit * 10) / 10;
};

const convertToFahrenheit = function(tempc) {
  let resultInCelcius = ((tempc * 9/5) + 32);
  return Math.round(resultInCelcius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
