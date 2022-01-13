function tellFortune(job, city, wife, years) {
  // Code the function here.
  console.log(`You will be ${job} in ${city}, and married to ${wife} in ${years} years.`);
}

tellFortune("web developer", "Lille", "Frieda", 2);

// Do not remove last lines, it is for tests
module.exports = tellFortune;
