import { getRandomUser } from ".";

describe("All elements of the array can be seleected", ()=>{

  test ("first element can be selected", ()=>{
    expect.assertions(1);
    const spyArray = jest.spyOn (Math, "random");
    spyArray.mockImplementation (()=> 0.2),

    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Frieda");

  });

  test ("second element can be selected", ()=>{
    expect.assertions(1);
    const spyArray = jest.spyOn (Math, "random");
    spyArray.mockImplementation (()=> 0.6),

    expect(getRandomUser(["Frieda", "Francis", "Frederic"])).toBe("Francis");

  });
  });

