type ParamRest = string[];

export function greetEveryone(...theArgs: ParamRest): void {
  theArgs.forEach(element => console.log("welcome to", element));
}
