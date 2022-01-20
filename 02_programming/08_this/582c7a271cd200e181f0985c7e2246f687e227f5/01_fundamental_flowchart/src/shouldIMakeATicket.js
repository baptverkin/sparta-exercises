// function shouldIMakeATicket(isStuck, timeBeingStuck, hourOfTheDay){
//   if (isStuck){
//     if (timeBeingStuck>=20){
//       if((hourOfTheDay>=9 && hourOfTheDay <= 13) ||(hourOfTheDay>=14 && hourOfTheDay <= 18)){
//         return true;
//       }else{
//         return false;
//       };
//     }else{
//       return false;
//     }
//   }else{
//     return false;
//   }
// }

function shouldIMakeATicket(isStuck, timeBeingStuck, hourOfTheDay){
  if (isStuck && timeBeingStuck>=20 && ((hourOfTheDay>=9 && hourOfTheDay < 13) || (hourOfTheDay>=14 && hourOfTheDay < 18))){
    console.log((hourOfTheDay>=9 && hourOfTheDay <= 13));
    console.log((hourOfTheDay>=14 && hourOfTheDay <= 18));
    return true;
  }else{
    return false;
  }
}

// Don't touch this for tests to execute properly
module.exports = shouldIMakeATicket;
