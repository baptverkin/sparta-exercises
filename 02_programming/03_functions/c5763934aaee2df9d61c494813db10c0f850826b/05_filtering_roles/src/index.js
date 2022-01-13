let myPersonsToSort = [
  {
    name: "Francis",
    role: "Student",
  },
  {
    name: "Jane",
    role: "Student",
  },
  {
    name: "Frieda",
    role: "Teacher",
  },
  {
    name: "John",
    role: "Teacher",
  },
];

function filteredRoles(myPersonsToSort, role = "Teacher"){
  if (role === "Teacher"){
    return myPersonsToSort.filter(mySortedArray => mySortedArray.role === "Teacher");
  } else if (role === "Student") {
    return myPersonsToSort.filter(mySortedArray => mySortedArray.role === "Student");
  } else {
    return myPersonsToSort.filter(mySortedArray => mySortedArray.role === "");
  }
}

filteredRoles(myPersonsToSort, "Student");



// Do not remove lines below, it is for tests
module.exports = filteredRoles;


/*
let listOfPersons = [];

function filteredRoles(myPersonsToSort, roles = "Teacher"){

  if (myPersonsToSort[0].role === roles){
    listOfPersons = listOfPersons.push({name: myPersonsToSort[0].name,role: myPersonsToSort[0].role});
    listOfPersons.push("a");
    console.log(listOfPersons);
    return listOfPersons.push({name: myPersonsToSort[0].name,role: myPersonsToSort[0].role});

  } else if (myPersonsToSort[1].role === roles){

    return listOfPersons.push({name: myPersonsToSort[1].name,role: myPersonsToSort[1].role});

  } else if (myPersonsToSort[2].role === roles){

    return listOfPersons.push({name: myPersonsToSort[2].name,role: myPersonsToSort[2].role});

  } else if (myPersonsToSort[3].role === roles){

    return listOfPersons.push({name: myPersonsToSort[3].name,role: myPersonsToSort[3].role});

  } else {

    return "";
  }
}

filteredRoles(myPersonsToSort, "Student");
*/
