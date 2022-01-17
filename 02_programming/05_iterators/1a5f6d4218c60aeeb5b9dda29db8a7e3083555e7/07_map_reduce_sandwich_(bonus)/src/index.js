function slice(ingredients) {
  return ingredients.map(ingredients => `sliced ${ingredients}`);
}

const slicedIngredients = slice(["ham", "tomato", "pickles", "onion"]);
console.log(slicedIngredients);


function makeSandwich(ingredients) {
  const containsSliced = ingredients => ingredients.includes("sliced");
  const check = ingredients.every(containsSliced);

  return check ? `A tasty sandwich made of ${ingredients[0].substring(7)}, ${ingredients[1].substring(7)}, ${ingredients[2].substring(7)}, ${ingredients[3].substring(7)}` : "I can't make a sandwich with non-sliced ingredients";
}

const mySandwich = makeSandwich(slicedIngredients);
console.log(mySandwich);



/*function makeSandwich(ingredients) {
  if(ingredients.includes("sliced")){
    return `A tasty sandwich made of ${ingredients.reduce((a,b) => a + b, 0)}`;
  } else {
    "I can't make a sandwich with non-sliced ingredients";}
}*/

// Do not remove the following line, it is for tests

module.exports = {
  slice,
  makeSandwich,
};
