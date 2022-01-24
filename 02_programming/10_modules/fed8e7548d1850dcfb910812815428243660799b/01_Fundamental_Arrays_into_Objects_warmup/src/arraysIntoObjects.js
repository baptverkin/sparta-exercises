const arraysIntoObjects = (keysArray, valuesArray) => {
  const resultObject = {};
  keysArray.forEach((key,i) => {resultObject[key] = valuesArray[i];});
  return resultObject;
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
