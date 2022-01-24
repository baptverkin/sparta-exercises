// Here you can import functions from 'container' and 'drink'


import * as container from "./container";
import * as drink from "./drinks";

function fillWithLitersOfCoffee (liters){
  return container.putLitersOfCoffee(liters);
};

function expresso(){
  return drink.expresso(container.consumeLitersOfCoffee);
}

function longCoffee (){
  return drink.longCoffee(container.consumeLitersOfCoffee);
};

export {fillWithLitersOfCoffee, expresso, longCoffee};
