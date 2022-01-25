// Code here

const stealthyFuelLevelCheck = (integer) => { if(integer>20){
  return "Fuel level: green";
}else if (integer>10 && integer < 20){
  return "Fuel level: yellow";
}else{
  return "Fuel level: red";
}};

const stealthyCargoHoldCheck = (array) => {if(array.length === 4){
  return "Full";
} else if (array.length < 4){
  return `Spaces available: ${4-array.length}`;
}else  if (array.length >4) {
  return `Over capacity by ${array.length - 4} items.`;
}
};



// function checkCargoHold(array){
//   console.log(array.length);
//   console.log(array.length === 4);
//   if(array.length === 4){
//     return "Full";
//   } else if (array.length < 4){
//     return `Spaces available: ${4-array.length}`;
//   }else  if (array.length >4) {
//     return `Over capacity by ${array.length - 4} items.`;
//   }
// }

// Do not remove last lines, it is for tests

module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
