export function rectangle(width: number, height: number): string {
  function square (){
    const e="*";
    let rec = "";
    for (let i=1; i<=height; i++){
      rec +=  `${e.repeat(width)}\n`;
    }
    return rec
  }

  return square();
}
