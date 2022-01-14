function addition(number1, number2) {
  return number1 + number2;
};

function substraction(number1, number2) {
  return number1 - number2;
};

function multiplication(number1, number2) {
  return number1 * number2;
};

function division(number1, number2) {
  return number1 / number2;
};

function chooseOperation(number1, number2, callback) {
  if ((Number.isInteger(number1) && Number.isInteger (number2) && (typeof callback === "function"))){
    return callback(number1, number2);
  } else {
    throw new Error("Parameters are not correct");
  };
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
