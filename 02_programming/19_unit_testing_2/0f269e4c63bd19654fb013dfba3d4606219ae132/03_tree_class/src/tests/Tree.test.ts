import { Tree } from "../Tree"

describe("Tree", () => {
  test("A 1-year old tree should have an age of 1 and have grown to 25 cm", () => {
    expect.assertions(2);
    const tree1 = new Tree(1);

    expect (tree1.age).toBe(1);
    expect (tree1.height).toBe(25);


  });

  test("A 5-year old tree should have an age of 5 and have grown to 125 cm", () => {
    expect.assertions(2);
    const tree5 = new Tree(5);

    expect (tree5.age).toBe(5);
    expect (tree5.height).toBe(125);
  });

  test("A 10-year old tree should have an age of 10 and have grown to 235 cm", () => {
    expect.assertions(2);

    const tree = new Tree(10);

    expect (tree.age).toBe(10);
    expect (tree.height).toBe(235);
  });

  test("A 20-year old tree should have an age of 20 and have grown to 335 cm", () => {
    expect.assertions(2);
    const tree = new Tree(20);

    expect (tree.age).toBe(20);
    expect (tree.height).toBe(335);
  });

  test("A 50-year old tree should have an age of 50 and have grown to 335 cm", () => {
    expect.assertions(2);
    const tree = new Tree(50);

    expect (tree.age).toBe(50);
    expect (tree.height).toBe(335);
  });

  test("A 50-year old tree should be reset if we call the seed method", () => {
    // We want to check that age, height and alive are all in their default value after calling `seed`
    expect.assertions(3);

    const tree = new Tree(50);
    tree.seed();
    expect (tree.age).toBe(0);
    expect (tree.height).toBe(0);
    expect (tree.alive).toBe(true);


  });
});
