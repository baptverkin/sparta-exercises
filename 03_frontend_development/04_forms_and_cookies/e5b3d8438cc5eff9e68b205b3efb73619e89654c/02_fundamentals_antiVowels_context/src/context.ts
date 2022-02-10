import { sentenceJoiner } from './sentenceJoiner';
import { sentenceSplitter } from './sentenceSplitter';


export const context = (sentence: string): string => {
  const arr = sentenceSplitter(sentence).filter((e: string):boolean =>
  e.charAt(0) !== "a" && e.charAt(0) !== "e" && e.charAt(0) !== "i" && e.charAt(0) !== "o" && e.charAt(0) !== "u" && e.charAt(0) !== "y" && e.charAt(0)  !== "A" && e.charAt(0) !== "E" && e.charAt(0) !== "I" && e.charAt(0) !== "O" && e.charAt(0) !== "U" && e.charAt(0) !== "Y")
  console.log(arr);
  return sentenceJoiner(arr);
};

