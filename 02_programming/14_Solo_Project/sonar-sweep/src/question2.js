//Answer to question 2

import report from "input_data.js";

function countSumIncreases (dataArray){
  let countIncrease = 0
  for (let i=0; i <= dataArray.length-3; i++){
    if (dataArray[i+3] > dataArray[i]){
      countIncrease++;
    }
  }
    if (countIncrease === 0){
      console.log("There are no sum that are larger than the previous sum");
    }else if (countIncrease === 1){
    console.log(`There is ${countIncrease} sum larger than the previous sum`);
    } else {
    console.log(`There are ${countIncrease} sums larger than the previous sum`)
    };
};

countSumIncreases (report);
