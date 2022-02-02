type ReceivedObject = {
  a: string;
  b: number;
}

const receivedObject: ReceivedObject = {
  a: 'somestring',
  b: 42,
}

function transformObject (object: ReceivedObject): (string | number)[]{
  console.log(Object.values(object));
  return Object.values(object);
}

transformObject(receivedObject);

// Leave the line below for tests to work properly.
export { transformObject };
