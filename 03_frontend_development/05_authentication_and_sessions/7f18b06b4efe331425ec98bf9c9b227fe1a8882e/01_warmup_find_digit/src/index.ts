function findDigit (arr: number[], digit: number):number[] {
  // const stringArr = arr.toString();
  // console.log(stringArr);
  const digitToString = digit.toString();
   const newArr = arr.filter(element => element.toString().includes(digitToString));
      return newArr;
}

findDigit([1, 2, 56, 89], 5);

export {findDigit};
