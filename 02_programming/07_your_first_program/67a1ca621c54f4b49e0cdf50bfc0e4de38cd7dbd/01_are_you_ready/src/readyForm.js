const readyForm = (reader) => {
  reader.question ("Hello user\nAre you ready for today ??!\n", (readyOrNot) => {
    console.log(`WOW, ${readyOrNot} ??!! Really Nice! Let's goo !!.`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
