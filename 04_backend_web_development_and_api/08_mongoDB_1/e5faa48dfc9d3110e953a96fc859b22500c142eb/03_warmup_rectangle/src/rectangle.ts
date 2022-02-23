export function rectangle(width: number, height: number): string {
  const e = "*";
  for (let i=height; i>0; i--){
    console.log(e.repeat(width));
    // return e.repeat(width);
  }
  return e;
}
