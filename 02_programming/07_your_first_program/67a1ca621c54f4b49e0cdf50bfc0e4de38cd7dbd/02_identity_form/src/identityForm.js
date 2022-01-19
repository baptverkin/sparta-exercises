const identityForm = (reader) => {
  reader.question("Hello ! What's your first name? ", (firstName) => {
    reader.question("What's your last name? ", (lastName) => {
      reader.question("What's your age? ", (age) => {
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
