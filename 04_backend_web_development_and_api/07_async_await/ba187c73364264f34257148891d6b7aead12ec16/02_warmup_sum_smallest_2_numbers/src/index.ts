export function sumTwoSmallestNumbers (arr: number[]):number{
  if (arr.length >= 4 && (arr.every(e => e>0))) {
    const min1 = arr.reduce((a, b) => Math.min(a, b))
    console.log(min1);
    const filtered1 = arr.filter(element => element !== min1);
    console.log(filtered1)
    const min2 = filtered1.reduce((a, b)=> Math.min(a, b));
    return min1 + min2 ;
  }else{
    throw new Error;
  }
}

sumTwoSmallestNumbers([1, 2, 3, 4]);
