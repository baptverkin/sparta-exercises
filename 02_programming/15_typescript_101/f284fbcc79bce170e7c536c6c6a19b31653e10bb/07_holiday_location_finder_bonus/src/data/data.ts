type ContinentsArray = [string, string, string, string, string, string];

const continents: ContinentsArray = ["Europe", "North America", "South America", "Asia", "Africa", "Oceania"];

type CitiesObject = {
  [key: string]: string[],
  }
const cities: CitiesObject = {
  Europe: ["Paris", "Madrid", "Rome", "Bruxelles"],
  NorthAmerica: ["New-York City", "Chicago", "Montréal", "Vancouver"],
  SouthAmerica: ["Rio", "Buenos Aires", "Mexico", "Medellin"],
  Asia: ["Tokyo", "Shanghai", "Jakarta", "Calculta"],
  Africa: ["Marrakech", "Cape Town", "Abidjan", "Le Caire"],
  Oceania: ["Melbourne", "Sydney", "Adelaide", "Wellington"],
};

// Leave the line below for tests to work properly.
export { continents, cities };
