
const double = (numbers) => numbers * 2;
const numbers = [1, 2, 3, 4];
console.log(double(numbers));



function mapLoop(numbers, double) {
  let newNumbers = [];
  for (let i = 0 ; i < numbers.length ; i++) {
    newNumbers.push(double(numbers[i]));
  }
  return newNumbers;
}



// Do not remove the following lines, it is for tests
module.exports = mapLoop;
