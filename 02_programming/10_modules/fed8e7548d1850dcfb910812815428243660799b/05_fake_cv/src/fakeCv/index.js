// const fakeCv = require(".");
const identity = require("./identity");
const motivation = require("./motivation");
const currentJob = require("./currentJob");

function fakeCv(){
  const objectCV = {};
  Object.assign(objectCV, {
    identity: identity(),
    motivation: motivation(),
    currentJob: currentJob(),
  });
  return objectCV;
};

module.exports = fakeCv;

console.log(fakeCv());
