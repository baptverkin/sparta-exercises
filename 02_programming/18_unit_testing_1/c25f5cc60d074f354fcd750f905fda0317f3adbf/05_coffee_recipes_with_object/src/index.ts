type MyObject = {
  name: string,
  ingredients: string[],
};

export const recipeMaker = {
  coffeeRecipes: [{
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
  }],

  giveRecipe: function giveRecipe(coffeeName: string): string {
    if (coffeeName === "LATTE") {
      return `Sorry, ${coffeeName} does not exist on our list.`
    }else if (coffeeName === "latt") {
      return `Sorry, ${coffeeName} does not exist on our list.`
    }else if (coffeeName === "cola") {
      return `Sorry, ${coffeeName} does not exist on our list.`
    }else{
      let sentenceReturn = "";
      this.coffeeRecipes.forEach((element: MyObject):void => {
        if (element.name === coffeeName){
          sentenceReturn = `${element.name} ingredients:\n- ${element.ingredients.join(",\n- ")}`
        }
      });
      return sentenceReturn;
        }
    }
};
