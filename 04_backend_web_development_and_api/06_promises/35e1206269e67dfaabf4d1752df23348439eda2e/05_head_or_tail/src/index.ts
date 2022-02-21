import { headOrTail } from "./head-or-tail";
import { getRandomFace } from "./random-face";

headOrTail("head")
  .then(() => {
    console.log("YES!");
  })
  .catch(() => {
    console.log("Oh no.");
  });

console.log(getRandomFace());
