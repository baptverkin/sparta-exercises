type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
}

type Dev = Human & {knownLanguage: string}

const baptiste: Human = {
  name: "Baptiste",
  age: 28,
  knowsDev: false,
}

function becomeADev (object: Human): Dev {
  // object.knowsDev = true;
  const newObject: Dev = {
    name: object.name,
    age: object.age,
    knowsDev: true,
    knownLanguage: "JavaScript",
  };
  return newObject;
}


// Leave the line below for tests to work properly.
export { becomeADev };
