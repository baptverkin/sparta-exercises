import { cities } from "../data/data";

function generateRandomCity (continent: string): string {
  return (cities[continent][(Math.floor(Math.random()*4))]);
}

export {generateRandomCity};
