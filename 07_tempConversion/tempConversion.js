const convertToCelsius = function(tempInFarenheit) {
  // (x − 32) × 5/9
  let result = (tempInFarenheit - 32) * (5/9)
  return (result === 0) ? +result : +result.toFixed(1);
};

const convertToFahrenheit = function(tempInCelsius) {
  // (x × 9/5 + 32) 
  let result = tempInCelsius * 9/5 + 32;
  return (result === 0) ? +result : +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
