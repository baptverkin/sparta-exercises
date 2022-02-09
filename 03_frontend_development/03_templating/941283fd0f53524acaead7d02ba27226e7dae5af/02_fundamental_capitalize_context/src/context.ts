import { capitalize } from "./capitalize"

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const arr = sentence.split(" ");
  for (let i=0; i<arr.length; i++)
  arr[i] = capitalize(arr[i]);
  return arr.join(" ");
}
