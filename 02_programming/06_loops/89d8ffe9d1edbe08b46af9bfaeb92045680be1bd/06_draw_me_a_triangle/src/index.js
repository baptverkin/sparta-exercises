function triangle(number) {
  let string = "*";
  for(let i = 1 ; i <= number ; i++){
    console.log(string.repeat(i));}
  return string;
}

console.log(triangle(10));

// Do not remove the following line, it is for tests
module.exports = triangle;
