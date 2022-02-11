

function slotMachine (arr: (string|number|boolean)[]): boolean {
  if (arr[0]===arr[1] && arr[1]===arr[2] && arr[0]===arr[2]){
    return true;
  }else{
    return false;
  }
}

export {slotMachine};
