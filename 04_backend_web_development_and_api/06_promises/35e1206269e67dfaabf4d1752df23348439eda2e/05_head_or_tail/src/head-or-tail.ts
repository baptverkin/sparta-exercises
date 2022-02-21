import { getRandomFace } from "./random-face";

function headOrTail(choice: string): Promise<string> {
  const draw: string = getRandomFace();
  return new Promise((resolve, reject) => {
    if (choice === draw) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
