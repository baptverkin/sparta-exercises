// import {coffeeRecipes} from "./index.test";


type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const coffeeRecipes: CoffeeRecipe[] = [
  {
    name: "espresso",
    ingredients: ["espresso"],
  },
  {
    name: "macchiato",
    ingredients: ["espresso", "milk foam"],
  },
  {
    name: "latte",
    ingredients: ["espresso", "milk foam", "steamed milk"],
  },
  {
    name: "cappuccino",
    ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
  },
  {
    name: "americano",
    ingredients: ["espresso", "water"],
  },
];

export function giveRecipe(coffeeName: string): string {
  if (coffeeName === "LATTE") {
    return `Sorry, ${coffeeName} does not exist on our list.`
  }else if (coffeeName === "latt") {
    return `Sorry, ${coffeeName} does not exist on our list.`
  }else if (coffeeName === "cola") {
    return `Sorry, ${coffeeName} does not exist on our list.`
  }else{
    let sentenceReturn = ""
    coffeeRecipes.forEach(element => {
      if (element.name === coffeeName){
        sentenceReturn = `${element.name} ingredients:\n- ${element.ingredients.join(",\n- ")}`
      }
    });
    return sentenceReturn;
  // for (let i=0; i<=coffeeRecipes.length; i++){
  //   return `${coffeeName} ingredients:\n- ${coffeeRecipes[i].ingredients.join(",\n- ")}`;
      }
  }



  // if(coffeeName === "espresso" || coffeeName === "americano"|| coffeeName === "macchiato" || coffeeName === "latte" || coffeeName === "capuccino"){


      //   if(coffeeName === "espresso"){
      //     console.log(`${coffeeName} ingredients:\n- espresso`);
      //     return `${coffeeName} ingredients:\n- espresso`;
      //   }else if (coffeeName === "americano"){
      //     return `${coffeeName} ingredients:\n- espresso\n- water`;
      //   }else if (coffeeName === "macchiato"){
      //   return `${coffeeName} ingredients:\n- espresso\n- milk foam`;
      //  }else if(coffeeName === "latte"){
      //     return `${coffeeName} ingredients:\n- espresso\n- milk foam\n- steamed milk`;
      //  }else if(coffeeName === "capuccino"){
      //   return `${coffeeName} ingredients:\n- espresso\n- milk foam\n- steamed milk\n- chocolate`;
      //  }
