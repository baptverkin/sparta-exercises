import { OrangeTree } from "../OrangeTree"

describe("OrangeTree life", () => {
  test("isAlive: a new tree should be alive", () => {
    expect.assertions(1);
    const newTree = new OrangeTree (0);
    newTree.isAlive();
    expect (newTree.alive).toBe(true);
  });

  test("isAlive: a tree should not die before 50 years old", () => {
    // For this test, we want to check what happens if we create a tree of 1 year old that
    // we grow until 50 years old in a loop.
    // We know that the death occur with a call to `Math.random` so we need to mock its result to always return 0:
    // That way, we make sure that if it could die, it would.
    // Replace `isAlive()` by a function that returns `true` if `this.age > 30` (for instance) and this test should fail
    expect.assertions(1);

    const aliveBefore50 = [];

    for (let i =1; i<50; i++){
      const tree = new OrangeTree (i);
      tree.ageOneYear ();
      aliveBefore50.push(tree.alive);
    };

      expect(aliveBefore50.every(element => element ===true)).toBe(true);
  });

  test("isAlive: a tree should be dead before 101 years old", () => {
    // For this test, we want to check what happens if we create a tree of 1 year old that
    // we grow until 101 years old in a loop.
    // At the end, we should be sure that the tree is dead.
    expect.assertions(1);

     const aliveAfter100: boolean[] = [];

    for (let i = 1; i<101; i++){
      let tree = new OrangeTree (i);
      tree.ageOneYear();
      aliveAfter100.push(tree.alive);
    };
      expect(aliveAfter100.pop()).toBe(false);

  });
});


describe("OrangeTree oranges", () => {
  test("pickAnOrange: we should not be able to pick oranges from a newly seeded tree", () => {
    // For this tests, `pickAnOrange` does not return anything but is using console.log, so don't forget to mock
    // and to call `mockRestore()` on your mock at the end of the test.
    expect.assertions(1);

    const spyPickOranges = jest.spyOn (console, "log");
    spyPickOranges.mockImplementation (()=> {});

    const tree = new OrangeTree(5);
    tree.seed();
    tree.pickAnOrange();

    expect(spyPickOranges).toHaveBeenCalledWith("There is no 🍊.");
    spyPickOranges.mockRestore();

  });

  test("pickAnOrange: we should be able to pick 10 oranges from a tree that starts at 4 years old that age one year", () => {
    // After picking an orange, we can check that the length of our `tree.oranges` array is only 9, that would mean we picked one.
    expect.assertions(2);

    const spyOnTree = jest.spyOn( console, "log" ).mockImplementation (() => {});
    const tree = new OrangeTree(4);
    tree.ageOneYear();
    console.log(tree.oranges);
    tree.pickAnOrange();

    expect(spyOnTree).toHaveBeenCalledWith("You picked one 🍊.");
    expect(tree.oranges.length).toBe(9);

    spyOnTree.mockRestore();

  });

  test("pickAnOrange: we should be able to 20 oranges from a tree that starts at 10 years old that age one year", () => {
    // After picking an orange, we can check that the length of our `tree.oranges` array is only 19, that would mean we picked one
    expect.assertions(2);

    // const pickOrangesArray: void[] = [];
    const spyOnTenYearsOldTree = jest.spyOn (console, "log").mockImplementation();

    // const tree = new OrangeTree(10);
    // tree.ageOneYear();

    // for(let i=1; i<=21; i++){
    //   tree.pickAnOrange();
    // };

    // expect(spyOnTenYearsOldTree).toHaveBeenCalledWith("You picked one 🍊.");


    const tree2 = new OrangeTree(10);
    tree2.ageOneYear();
    tree2.pickAnOrange();
    expect(spyOnTenYearsOldTree).toHaveBeenCalledWith("You picked one 🍊.");
    expect(tree2.oranges.length).toBe(19)

    spyOnTenYearsOldTree.mockRestore();

  });
});


// const pickOrangesArray: void[] = [];
// const tree = new OrangeTree (10);
//     tree.ageOneYear();
//     console.log("===test===", tree.oranges.length);

//     for(let i=1; i<=26; i++){
//       tree.pickAnOrange();
//       pickOrangesArray.push(tree.pickAnOrange());
//     };

//     console.log(pickOrangesArray);
//     console.log("===test===", tree.oranges.length);

