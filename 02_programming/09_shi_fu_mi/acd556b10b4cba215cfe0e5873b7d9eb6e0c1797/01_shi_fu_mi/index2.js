const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const shiFuMiOptions =
[[
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
],
[
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
],
[
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
]];


function ShiFuMi(reader, min = 1, max = 3) {
  console.log("Welcome to ShiFuMi 👊✋🖖");

  reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);

  function move (number){
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
    console.log(randomNumber);

    const makeNumberANumber = Number(number);
    console.log(makeNumberANumber);

    const gagné = "Chanceux ou malin - En tout cas bravo, GAGNE 🥳";
    const perdu = "La feuille enveloppe le papier Amonbofis - PERDU 😞";

    let playerScore = 0;
    let computerScore = 0;

    if (Number.isInteger(makeNumberANumber) !== true || makeNumberANumber<min || makeNumberANumber>max){
      console.log ("J'ai demandé 1,2 ou 3 ! RTFConsignes");
      return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", (move));
    }else{
      if (makeNumberANumber === 1 && randomNumber === 1){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
      }else if (makeNumberANumber === 1 && randomNumber === 2){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        console.log(perdu);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
      }else if (makeNumberANumber === 1 && randomNumber === 3){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        console.log(gagné);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);


      } else if (makeNumberANumber === 2 && randomNumber === 2){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
      } else if (makeNumberANumber === 2 && randomNumber === 3){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        console.log(perdu);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
      } else if (makeNumberANumber === 2 && randomNumber === 1){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        console.log(gagné);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);


      } else if (makeNumberANumber === 3 && randomNumber === 3){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
      }else if (makeNumberANumber === 3 && randomNumber === 1){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        console.log(perdu);
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
      }else if (makeNumberANumber === 3 && randomNumber === 2){
        console.log("Player move :\n");
        console.log(shiFuMiOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiOptions[randomNumber-1]);
        console.log(gagné);;
        return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
      }
    }
    reader.close ();
  }
};

ShiFuMi(reader);
