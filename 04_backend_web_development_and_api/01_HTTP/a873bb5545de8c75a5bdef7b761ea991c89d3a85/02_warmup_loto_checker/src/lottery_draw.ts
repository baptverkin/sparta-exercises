import { Draw } from "./types";

export function lottery_draw(): Draw {
  const arr = [];
  const num1 = Math.floor(Math.random() * (4))
  const num2 = Math.floor(Math.random() * (4))
  const num3 = Math.floor(Math.random() * (4))
  arr.push(num1, num2, num3);
  return arr;
}
