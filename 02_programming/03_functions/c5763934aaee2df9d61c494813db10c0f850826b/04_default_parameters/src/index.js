function helloSpartan(argument = "soldier") {
  // Code the function here.
  console.log(argument === "soldier" ? `Hello ${argument}; not very talkative uh?` : `Hello ${argument}: glad to know your name!`);
}

helloSpartan("soldier");


// Do not remove last lines, it is for tests
module.exports = helloSpartan;
