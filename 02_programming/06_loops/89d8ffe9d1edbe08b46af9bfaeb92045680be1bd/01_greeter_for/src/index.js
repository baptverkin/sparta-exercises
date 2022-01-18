function greeter(people) {
  for (let i=0; i < people.length; i++) {
    console.log(`Hello ${people[i]}!`);
  }
}

greeter (["Ben", "Bapt"]);

// Do not remove the following lines, it is for tests
module.exports = greeter;
