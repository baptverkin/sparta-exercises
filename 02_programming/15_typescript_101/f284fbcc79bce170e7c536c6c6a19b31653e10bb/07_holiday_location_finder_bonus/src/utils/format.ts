// Format user input.
function sanitizeUserInput(input: string): string {
  const removeSpecialCharacter: string = input.replace(/[^a-zA-Z]/g, "");
  const removeSpace: string = removeSpecialCharacter.replace(/\s/g, "");
  return removeSpace;
}

console.log("===test=====", sanitizeUserInput("EUR ope"));

// Leave the line below for tests to work properly.
export { sanitizeUserInput };
