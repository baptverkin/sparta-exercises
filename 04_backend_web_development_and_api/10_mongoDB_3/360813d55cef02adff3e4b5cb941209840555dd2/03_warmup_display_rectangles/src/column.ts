export function column(numberOfLines: number, lineContent: string): string {
  let line: string = "";
  function iterate (): string {
  for(let i=1; i<=numberOfLines; i++){
   line += `${lineContent}\n`;
  }
  return line
}
return iterate();
}
