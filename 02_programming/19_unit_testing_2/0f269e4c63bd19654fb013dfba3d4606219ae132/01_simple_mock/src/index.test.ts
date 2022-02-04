import {helloSailor} from "./index";

test ("check if the console.log prints the correct message", () => {
  expect.assertions(3)
  const spy = jest.spyOn (console, "log");

  spy.mockImplementation(()=>{});

  helloSailor("Baptiste");

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("Howdy Baptiste!");

  helloSailor();
  expect(spy).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");

  spy.mockRestore();

})
