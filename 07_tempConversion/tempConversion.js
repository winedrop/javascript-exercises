const ftoc = function(fahrenheit) {
  let celsiusConversion = (fahrenheit - 32) * (5/9.0);
  celsiusConversion = Number(celsiusConversion.toFixed(1));
  return celsiusConversion;
};

const ctof = function(celsius) {
  let fahrenheitConversion = (celsius * (9/5.0) +32);
  fahrenheitConversion = Number(fahrenheitConversion.toFixed(1));
  return fahrenheitConversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
