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

  let playerScore = 0;
  let computerScore = 0;

  reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);

  function move (number){
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
    const makeNumberANumber = Number(number);

    const gagné = "Chanceux ou malin - En tout cas bravo, GAGNE 🥳";
    const perdu = "La feuille enveloppe le papier Amonbofis - PERDU 😞";

    console.log(playerScore);
    console.log(computerScore);

    if(computerScore < 3 && playerScore < 3){
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
          computerScore++;
          return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
        }else if (makeNumberANumber === 1 && randomNumber === 3){
          console.log("Player move :\n");
          console.log(shiFuMiOptions[makeNumberANumber-1]);
          console.log("Computer move :\n" );
          console.log(shiFuMiOptions[randomNumber-1]);
          playerScore++;
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
          computerScore++;
          return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
        } else if (makeNumberANumber === 2 && randomNumber === 1){
          console.log("Player move :\n");
          console.log(shiFuMiOptions[makeNumberANumber-1]);
          console.log("Computer move :\n" );
          console.log(shiFuMiOptions[randomNumber-1]);
          playerScore++;
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
          computerScore++;
          return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
        }else if (makeNumberANumber === 3 && randomNumber === 2){
          console.log("Player move :\n");
          console.log(shiFuMiOptions[makeNumberANumber-1]);
          console.log("Computer move :\n" );
          console.log(shiFuMiOptions[randomNumber-1]);
          playerScore++;
          return reader.question("Choose a move\nRock Paper Scissors? [1, 2, 3]\n>", move);
        }
      }
    }else if(computerScore === 3){
      console.log(perdu);
    }else if(playerScore === 3){
      console.log(gagné);
    }
    reader.close ();
  }
};

ShiFuMi(reader);
