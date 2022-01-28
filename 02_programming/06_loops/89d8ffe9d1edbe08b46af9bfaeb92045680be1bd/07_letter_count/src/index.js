function letterCount(stringToTest, characterToTest) {
  return stringToTest.split(characterToTest).length-1;
}

const count = letterCount("gattaca", "a");


// Do not remove the following line, it is for tests
module.exports = letterCount;

