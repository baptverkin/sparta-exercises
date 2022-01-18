function letterCount(stringToTest, characterToTest) {
  return stringToTest.split(characterToTest).length-1;
}
letterCount("gattaca", "z");

// Do not remove the following line, it is for tests
module.exports = letterCount;
