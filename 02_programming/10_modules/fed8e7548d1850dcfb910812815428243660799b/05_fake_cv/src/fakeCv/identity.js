const faker = require("faker");

function identity (){
  const objectIdentity = {};
  objectIdentity.firstName = faker.name.firstName();
  objectIdentity.lastName = faker.name.lastName();
  objectIdentity.city = faker.address.city();
  objectIdentity.phoneNumber = faker.phone.phoneNumber();
  objectIdentity.email = `${objectIdentity.firstName}.${objectIdentity.lastName}@fake.local`;
  objectIdentity.avatar = faker.image.avatar();
  return objectIdentity;
};
;

module.exports = identity;
