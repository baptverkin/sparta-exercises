// Code here
// function coompare (a: number, b: number)


function sortingMachine (revenue: number[], order: boolean): number[]{
  if (order === true){
    return revenue.sort(function(a, b){return a-b});
  }else if(order ===false){
    return revenue.sort(function(a, b){return b-a});
  }
}

export {sortingMachine}
