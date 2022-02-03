import {greet} from "./index"

describe ("bloc of test", () => {

  test ("test with no name", () => {
    const result = greet();

    expect(result).toBe("Hello WORLD!")
  });

  test ("test with name as parameter", () => {
    const result = greet("Francis");
    expect(result).toBe("Hello FRANCIS!");
  });

})



