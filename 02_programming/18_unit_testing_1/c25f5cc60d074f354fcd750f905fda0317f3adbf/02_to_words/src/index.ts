export function toWords(sentence: string): string[] {
  const allWords = sentence.split(/[.!, :]+/);

  return allWords.filter(word => word !== "");
}

console.log(toWords("Hello.how.are.you?"));
