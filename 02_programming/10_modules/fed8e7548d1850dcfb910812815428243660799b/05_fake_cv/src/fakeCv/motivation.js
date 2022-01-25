const faker = require("faker");

function motivation (){
  const objectMotivation = {};
  objectMotivation.catchPhrase = faker.company.catchPhrase();
  objectMotivation.description = faker.lorem.paragraph();
  return objectMotivation;
};



module.exports = motivation;
