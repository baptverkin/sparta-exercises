const faker = require("faker");


function currentJob (){
  const objectCurrentJob = {};
  Object.assign(objectCurrentJob, {
    companyName: faker.company.companyName(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobTitle: faker.name.jobTitle(),
  });
  return objectCurrentJob;
};

module.exports = currentJob;
