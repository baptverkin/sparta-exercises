const log = (array) => (`* ${array}`);

function forEachLoop(array, log) {
  for (let i=0 ; i < array.length ; i++) {
    log(array[i]);
  }
}


// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
