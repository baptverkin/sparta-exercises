
// function consecutiveCount(stringToTest, characterToTest) {
//   let split = stringToTest.split(characterToTest);
//   console.log(split);
//   for (let i = 0 ; i < stringToTest.length ; i++)
//     console.log(stringToTest.charAt[i]);
// }
// consecutiveCount("gaaattaca", "a");

//

// let password = "5236aaa121";

// for(let i = 0; i< password.length; i++) {
//   let numberOfRepeats = consecutiveCount(password, password.charAt(i));
//   //do something

// }

// function consecutiveCount(originalString, charToCheck) {
//   let repeatCount = 1;
//   for(let i = 1; i< originalString.length; i++) {
//     if(originalString.charAt(i) === charToCheck) {
//       return repeatCount++;
//     } else {
//       return repeatCount;
//     }
//   }
//   return repeatCount;
// }

// console.log(consecutiveCount("aaabcaaba", "a"));

//

// function countInArray(str){
//   let s= str.match(/([a-zA-Z])\1*/g)||[];
//   return s.map(function(itm){
//     return [itm.charAt(0), itm.length];
//   });
// }
// let resultArray = countInArray("aaabcaaba");
// console.log(resultArray);


// function newArrayWithRightChar(array2){
//   let finalArrray = [];
//   for (let i=0 ; i<array2.length ; i++){
//     console.log(resultArray[0]);
//     return resultArray[i].includes("a") ? finalArrray.push(resultArray[i]) : "";
//   //finalArrray.push(resultArray[i].slice(1));
//   //console.log(Math.max(...resultArray));}X
//   }
//   console.log(finalArrray);
// }


function consecutiveCount(str2, char2){
  let y = 0;
  let memory = 0;
  for (let i=0 ; i<str2.length ; i++) {
    if (str2[i] === char2){
      y++;
      if (y>memory){
        memory = y;
      }
    }else{
      y=0;
    }
  }
  if (memory === 0){
    return (0);
  }else{
    return (memory);
  }
}

consecutiveCount("aaabcaaba", "a");


// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
