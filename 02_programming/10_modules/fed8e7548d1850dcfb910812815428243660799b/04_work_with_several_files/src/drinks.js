// There should be no import in this file. Only exports!

function expresso (consumeLitersOfCoffee){
  return consumeLitersOfCoffee(0.08);
};

function longCoffee (consumeLitersOfCoffee){
  return consumeLitersOfCoffee(0.15);
};

export {expresso, longCoffee};
