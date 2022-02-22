type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(nameList : string[], ageList: number[], countryList: string[], haveTraveledList : boolean[]): Profile[] {
  const newArr = [];
  for (let i=0; i<nameList.length ; i++){
    newArr.push({
      name: nameList[i],
      age: ageList[i],
      country: countryList[i],
      haveTraveled: haveTraveledList[i],
    })
  }
  console.log(newArr);
  return newArr;
}
