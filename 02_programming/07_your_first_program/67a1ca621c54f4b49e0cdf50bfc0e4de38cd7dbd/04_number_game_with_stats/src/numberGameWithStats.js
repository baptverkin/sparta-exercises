// function numberGameWithStats(reader, min = 1, max = 100) {
//   const randomNumber = Math.round(Math.random() * (max - min)) + min;
//   // console.log(randomNumber);

//   console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");


//   reader.question ("\nEnter a number\n>", callback);
//   let counter = 0;
//   function callback (number){
//     const makeNumberANumber = Number(number);

//     if (Number.isInteger(makeNumberANumber)){

//       if (makeNumberANumber === randomNumber){
//         console.log("You won");
//       } else if(makeNumberANumber<min || makeNumberANumber>max){
//         console.log("The number is between 1 and 100");
//         counter++;
//         return reader.question("\nEnter a number\n", callback);
//       }else if (makeNumberANumber>randomNumber){
//         console.log("Too high");
//         counter++;
//         return reader.question("\nEnter a number\n", callback);
//       }else if (makeNumberANumber<randomNumber){
//         console.log("Too low");
//         counter++;
//         return reader.question("\nEnter a number\n", callback);
//       } else if (makeNumberANumber===max) {
//         console.log("You won!");
//         counter++;
//       } else if (makeNumberANumber===min) {
//         console.log("You won!");
//         counter++;
//       }
//     }else{
//       console.log("This was not a number");
//       counter++;
//       return reader.question("\nEnter a number\n", callback);
//     };
//     console.log(`You won in ${counter} tries`);
//     reader.close();
//   }
// }

function numberGameWithStats(reader, min = 1, max = 100) {
  const randomNumber = Math.round(Math.random() * (max - min)) + min;
  //console.log(randomNumber);

  console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");

  let y=1;

  reader.question ("\nEnter a number\n>", callback);

  function callback (number){
    const makeNumberANumber = Number(number);

    if (Number.isInteger(makeNumberANumber)){
      if (makeNumberANumber === randomNumber){
        console.log("You won!");
      } else if(makeNumberANumber<min || makeNumberANumber>max){
        console.log("The number is between 1 and 100");
        y++;
        return reader.question("\nEnter a number\n", callback);
      }else if (makeNumberANumber>randomNumber){
        console.log("Too high");
        y++;
        return reader.question("\nEnter a number\n", callback);
      }else if (makeNumberANumber<randomNumber){
        console.log("Too low");
        y++;
        return reader.question("\nEnter a number\n", callback);
      } else if (makeNumberANumber===max) {
        console.log("You won!");
        y++;
        return reader.question("\nEnter a number\n", callback);
      } else if (makeNumberANumber===min) {
        console.log("You won!");
        y++;
        return reader.question("\nEnter a number\n", callback);
      }
    }else{
      console.log("This was not a number");
      y++;
      return reader.question("\nEnter a number\n", callback);
    }
    reader.close();
  }

  console.log(y);
  return y;
}



module.exports = numberGameWithStats;
