const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const shiFuMiPlayerOptions =
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
  console.log("--------------------");
  console.log("Welcome to ShiFuMi");
  console.log("      👊✋🖖");
  console.log(" Ose défier l'IA");
  console.log("--------------------");

  let playerScore = 0;
  let computerScore = 0;

  reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
  function move (number){
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
    const makeNumberANumber = Number(number);

    const gagné = "Chanceux ou malin ? En tout cas bravo, c'est GAGNE 🥳";
    const perdu = "La feuille enveloppe le papier - PERDU Amonbofis 😞";

    if (Number.isInteger(makeNumberANumber) !== true || makeNumberANumber<min || makeNumberANumber>max){
      console.log ("J'ai demandé 1,2 ou 3 ! RTFConsignes");
      return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
    }else{
      if (makeNumberANumber === 1 && randomNumber === 1){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
        return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
      }else if (makeNumberANumber === 1 && randomNumber === 2){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        computerScore++;
        if(computerScore < 3 && playerScore < 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
        }else if (computerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(perdu);
        }else if (playerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(gagné);
        };
      }else if (makeNumberANumber === 1 && randomNumber === 3){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        playerScore++;
        if(computerScore < 3 && playerScore < 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
        }else if (computerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(perdu);
        }else if (playerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(gagné);
        };


      } else if (makeNumberANumber === 2 && randomNumber === 2){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
        return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
      } else if (makeNumberANumber === 2 && randomNumber === 3){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        computerScore++;
        if(computerScore < 3 && playerScore < 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
        }else if (computerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(perdu);
        }else if (playerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(gagné);
        };
      } else if (makeNumberANumber === 2 && randomNumber === 1){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        playerScore++;
        if(computerScore < 3 && playerScore < 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
        }else if (computerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(perdu);
        }else if (playerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(gagné);
        };

      } else if (makeNumberANumber === 3 && randomNumber === 3){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
        return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
      }else if (makeNumberANumber === 3 && randomNumber === 1){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        computerScore++;
        if(computerScore < 3 && playerScore < 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
        }else if (computerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(perdu);
        }else if (playerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(gagné);
        };
      }else if (makeNumberANumber === 3 && randomNumber === 2){
        console.log("Player move :\n");
        console.log(shiFuMiPlayerOptions[makeNumberANumber-1]);
        console.log("Computer move :\n" );
        console.log(shiFuMiPlayerOptions[randomNumber-1]);
        playerScore++;
        if(computerScore < 3 && playerScore < 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          return reader.question("Choisi ton arme\nPierre = [1], Papier = [2] ou Ciseaux = [3]\n>", move);
        }else if (computerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(perdu);
        }else if (playerScore === 3){
          console.log(`[Score] Player : ${playerScore} --- Computer : ${computerScore}`);
          console.log(gagné);
        };
      }
    }
    reader.close ();
  }
};

ShiFuMi(reader);
