function checkFuelLevel(integer) {
  if(integer>20){
    return "Fuel level: green";
  }else if (integer>10 && integer < 20){
    return "Fuel level: yellow";
  }else{
    return "Fuel level: red";
  }
}

function checkCargoHold(array){
  console.log(array.length);
  console.log(array.length === 4);
  if(array.length === 4){
    return "Full";
  } else if (array.length < 4){
    return `Spaces available: ${4-array.length}`;
  }else  if (array.length >4) {
    return `Over capacity by ${array.length - 4} items.`;
  }
}

const result = checkCargoHold(["Burst Laser II", "Artemis Missiles", "Defense Drone Mk I", "Repair Arm"]);

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
