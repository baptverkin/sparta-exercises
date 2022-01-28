//Answer to question 1

import report from "input_data.js";

function countIncreases (dataArray){
  let countIncrease = 0
  for (let i=0; i< dataArray.length; i++){
    if (dataArray[i+1]-dataArray[i] > 0){
      countIncrease++;
    }
  }
    if (countIncrease === 0){
      console.log("There are no measurement larger than the previous measurement");
    }else if (countIncrease === 1){
    console.log(`There is ${countIncrease} measurement larger than the previous measurement`);
    } else {
    console.log(`There are ${countIncrease} measurements larger than the previous measurement`)
    };
};

countIncreases (report);
