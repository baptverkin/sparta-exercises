import readline from "readline";
import {calculator} from "./calculator.js";


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstNumber = 0;
let secondNumber = 0;
let operationSymbol = "";

function start (){
  reader.question("Enter the first number\n> ", (number1) => {
    let makeNumber1aNumber = parseFloat(number1, 10);
    if (isNaN(makeNumber1aNumber)){
      console.log("Wrong input!");
      return start();
    }else{
      firstNumber = makeNumber1aNumber;
    };
    calculatorSymbol();
  });
};

function calculatorSymbol (){
  reader.question ("Choose an operation: [ + - x / ]\n", (symbol) => {
    if (symbol === "+" || symbol === "-" || symbol === "x" || symbol === "/"){
      operationSymbol = symbol;
    }else{
      console.log("Unknown operation.\nEnter a valid command [ + | - | * | / ]");
      return calculatorSymbol();
    }
    addSecondNumber();
  });
}

function addSecondNumber () {
  reader.question ("Enter the second number\n> ", (number2) => {
    let makeNumber2ANumber = parseFloat(number2, 10);
    if (isNaN(makeNumber2ANumber)){
      console.log("Wrong input!");
      return addSecondNumber();
    }else{
      secondNumber = makeNumber2ANumber;
    }
    console.log(`\n${firstNumber} ${operationSymbol} ${secondNumber} =`, calculator (operationSymbol, firstNumber, secondNumber));

    reader.close();
  });
}

console.log("Ready to compute operations\n********************\n");
start();
