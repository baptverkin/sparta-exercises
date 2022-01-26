import {addition} from "./operations/addition.js";
import {substraction} from "./operations/substraction.js";
import {multiplication} from "./operations/multiplication.js";
import {division} from "./operations/division.js";


function calculator (symbol, number1, number2){
  if (symbol === "+"){
    return addition(number1, number2);
  }
  if (symbol === "-"){
    return substraction(number1, number2);
  }
  if(symbol === "x"){
    return multiplication(number1,number2);
  }
  if (symbol === "/")
    return division (number1, number2);
}

export {calculator};
