
function square(number) {
  let string = "*";
  for(let i = 1 ; i <= number ; i++){
    console.log(string.repeat(number));}
  return string;
}

console.log(square(10));

// function square(number) {
//   let string = "*";
//   for (let i = 1; i <= number; i++){ // iterates rows
//     for (let j = 1; j <= number; j++) // iterates * in row
//       console.log(string.repeat(i*(number-i+1)));
//   }
//   console.log("\n"); // moves to new row
// }

// console.log(square(10));

// Do not remove the following line, it is for tests
module.exports = square;
