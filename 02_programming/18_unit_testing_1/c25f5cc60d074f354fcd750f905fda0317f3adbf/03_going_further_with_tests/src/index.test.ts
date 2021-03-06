let mockArray = [];
let mockObject = {};

beforeEach(() => {
  mockArray = [];
  mockObject = {};
});

describe("Let the tests on arrays begin !", () => {

  // The following arrays are a short list of "must watch" movies.
  // Write a test for each of them, respecting the conditions written in the requirements.
  // Be sure to always test if you test passes with the right conditions but also if
  // it does fail with the wrong conditions. Don't forget `expect.assertions`!

  // Here's an example:
  test("Should be a collection of 2 movies", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger"];

    expect(mockArray.length).toBe(2);
  })

  // Create a test that ensures that "Alien the 8th passenger" is present in mockArray.
  test("Alien the 8th passenger is present in mockArray", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger","Ip Man","Tombeau des lucioles", "fight club"];
    expect(mockArray).toContain("Alien the 8th passenger");
  })

  // Create a test that fails if "Indiana Jones 4" is present in mockArray.
  test ("Indiana Jones 4 is not present in the array", () => {
    expect.assertions(1);
    mockArray = ["Into the wild", "Alien the 8th passenger","Ip Man","Tombeau des lucioles", "fight club"];

    expect(mockArray).not.toContain("Indiana Jones 4");
})

  // Create a test fails if the list has less than 5 elements.
    test("Array contains less than 5 elements", () =>{
    mockArray = ["Lord of the rings : the return of the king", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

  expect(mockArray.length).toBeLessThan(5);
  })

  // Create a test that checks if the array only contains String element.
  // Remember that a test is code, you are not limited to using `expect`.

  test("Array contains only strings", () => {
    expect.assertions(1);

    mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

    function check<T>(array: T[]): boolean{
      for (let i=0; i<= array.length; i++){
      if(typeof array[i] === "string"){
      return true;
    }
  } return false
    }

  const result = check(mockArray);

  expect(result).toBe(true);

});

  // Create a test that passes if there's at least one film with "Lord of the rings" inside mockArray.

  test ("At least one film is Lord of The Rings", () => {
    expect.assertions(1);
  mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

  function check(array: string[]): boolean{
    for (let i=0; i<= array.length; i++){
    if(array[i].includes("Lord of the ring")){
    return true;
  }
} return false
  }

  const result = check(mockArray);

  expect(result).toBe(true);
});


  //Create a test that checks if the elements in mockArray respect that the strings are the same with the right order as solutionArray
  //eg : mockArray = ["Blue","Blue","Red", "Yellow"] would fail the test

  test ("Check if arrays have the elements in the same order", ()=>{
    expect.assertions(1);
    mockArray = ["Blue", "Red", "Blue", "Yellow"];
    const solutionArray = ["Blue", "Red", "Blue", "Yellow"];

    function check(array: string[], array2: string[]): boolean {
      for (let i=0; i<= array.length; i++){
      if(array[i] === array2[i]){
      return true;
    }
  }
    return false
    }
    const result = check (mockArray, solutionArray)

    expect(mockArray).toEqual(expect.arrayContaining(solutionArray));


})
});


describe("Let the tests on objects begin !", () => {

  // Create a test that ensures that your 'command' object contains at least `fries: true` and `sauce: "Hannibal"` without checking properties one by one
  // You should do it with only one assertion.
  // Hint: we want our mock object to _match_ another smaller object (look at the documentation!)

  test("Check if at least object has keys : 'fries: true' and 'sauce: Hannibal'", () => {
    expect.assertions(1);

    mockObject = {
      sauce: "Hannibal",
      fries: true,
      kebab: "Double",
      soda: "Sprite",
    };

    const command = {
      fries : true,
      sauce: "Hannibal"
    };

    expect(mockObject).toMatchObject(command);
  })

});

//At the end, your file should contain 7 test (8 with the given example).
