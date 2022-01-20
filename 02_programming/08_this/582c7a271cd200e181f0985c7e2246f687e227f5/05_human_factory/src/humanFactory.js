const humanFactory = (humanData) => {

  const defaultMale = {
    firstName: "John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
    fullname : function(){
      return `${this.firstName} ${this.lastName}`;
    },
    introduction: function () {
      return `Hello! My name is ${this.firstName} ${this.lastName}.`;
    },
  };
  const defaultFemale = {
    firstName: "Jane",
    genre: "female",
  };

  if (humanData=== undefined)
    return defaultMale;
  else if (Object.values(humanData).includes("female")){
    return Object.assign(defaultMale, defaultFemale);
  }else{
    return Object.assign(defaultMale, humanData);
  };
};

const createHumans = (humans) => {
  // code here
};

// const target = { a: 1, b: 5 };
//const source = { b: 3, c: 5 };

//const returnedTarget = Object.assign(target, source);

// console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

//console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

module.exports = {
  humanFactory,
  createHumans,
};
