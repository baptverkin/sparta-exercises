import { toWords } from ".";

describe ("new batch of tests for function toWord", () => {

  test ("function toWords removes '.'", () => {
    const result = toWords("Hello.how.are.you?");
    expect(result).toEqual(["Hello", "how", "are", "you?"]);
  })

  test ("function toWords removes '!'", () => {
    const result = toWords("Hello!how!are!you?");
    expect(result).toEqual(["Hello", "how", "are", "you?"]);
  })

  test ("function toWords removes ','", () => {
    const result = toWords("Hello,how,are,you?");
    expect(result).toEqual(["Hello", "how", "are", "you?"]);
  })

  test ("function toWords removes ' '", () => {
    const result = toWords("Hello how are you?");
    expect(result).toEqual(["Hello", "how", "are", "you?"]);
  })
})
