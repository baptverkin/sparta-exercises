type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const values = name.split(" ");
  return {firstName: values[0], lastName: values[1]};
}
