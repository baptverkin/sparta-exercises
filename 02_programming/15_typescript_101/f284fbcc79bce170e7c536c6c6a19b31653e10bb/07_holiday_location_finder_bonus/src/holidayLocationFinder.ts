import { Interface } from "readline";
import { generateRandomCity } from "./utils/generateRandomCity";
import { sanitizeUserInput } from "./utils/format";

function holidayLocationFinder(reader: Interface): void {
  console.log("***Welcome to HOLIDAY LOCATION FINDER***");
  console.log("Here is the list of continent to chose from:");

  reader.question("Chose a continent\n", continentInput => {
    const sanityzer: string = sanitizeUserInput(continentInput);
    console.log(sanityzer);
    const cityName: string = generateRandomCity(sanityzer);
    console.log(`You chose ${continentInput}. I think you really should go spend some time in ${cityName}.`)
    reader.close();
  });
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
