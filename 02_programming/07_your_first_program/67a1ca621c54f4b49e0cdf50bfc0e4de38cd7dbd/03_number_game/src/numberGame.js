
// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)+1) + min;
// };
// const randomNumber = getRandomNumber(1, 100);



function numberGame(reader, min = 1, max = 100) {
  const randomNumber = Math.round(Math.random() * (max - min)) + min;
  console.log(randomNumber);


  console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");

  reader.question ("\nEnter a number\n>", callback);
  function callback (number){
    const makeNumberANumber = Number(number);
    console.log(makeNumberANumber);

    if (Number.isInteger(makeNumberANumber)){
      if (makeNumberANumber === randomNumber){
        console.log("You won!");
      } else if(makeNumberANumber<min || makeNumberANumber>max){
        console.log("The number is between 1 and 100");
        return reader.question("\nEnter a number\n", callback);
      } else if (makeNumberANumber>randomNumber){
        console.log("Too high");
        return reader.question("\nEnter a number\n", callback);
      } else if (makeNumberANumber<randomNumber){
        console.log("Too low");
        return reader.question("\nEnter a number\n", callback);
      } else if (makeNumberANumber===max) {
        console.log("You won!");
        return reader.question("\nEnter a number\n", callback);
      } else if (makeNumberANumber===min) {
        console.log("You won!");
        return reader.question("\nEnter a number\n", callback);
      }
    }else{
      console.log("This was not a number");
      return reader.question("\nEnter a number\n", callback);
    }
    reader.close();
  }
}

module.exports = numberGame;
