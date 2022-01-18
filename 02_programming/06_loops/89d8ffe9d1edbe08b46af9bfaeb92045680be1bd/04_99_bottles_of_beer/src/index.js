const minusOne = (number) => number - 1;
// console.log (minusOne(99));

function sing (numberOfBeersLeft=99) {
  let newArray = [];
  for (let i=numberOfBeersLeft ; i>2 ; i--){
    newArray.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    newArray.push(`Take one down and pass it around, ${(i-1)} bottles of beer on the wall.`);
  }
  for (let i=2 ; i>1 ; i--){
    newArray.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    newArray.push(`Take one down and pass it around, ${(i-1)} bottle of beer on the wall.`);
  }
  for (let i=1 ; i>0 ; i--){
    newArray.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
    newArray.push("Take one down and pass it around, no more bottles of beer on the wall.");
  }
  for (let i=0 ; i>=0 ; i--){
    newArray.push("No more bottles of beer on the wall, no more bottles of beer.");
    newArray.push(`Go to the store and buy some more, ${numberOfBeersLeft} bottles of beer on the wall.`);
  }
  return newArray;
}

console.log(sing(99, minusOne).length);


// Do not remove the following line, it is for tests
module.exports = sing;
