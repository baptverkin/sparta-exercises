


function accessCustomerData(reader, listOfCustomers){
  console.log("****************************\nCHOOSE A CUSTOMER\n****************************\n");
  let cleanListOfCustomers = listOfCustomers.map(key => `${key.Firstname} ${key.Lastname}`).forEach((person, index) => console.log(`${index + 1} - ${person}`));;
  reader.question ("\n🤖 Choose an action\n", (action) => {
    customerDetails(reader, action, listOfCustomers);
  });
}

function customerDetails(reader, index, listOfCustomers){
  let cleanListOfCustomers = listOfCustomers.map(key => `${key.Firstname} ${key.Lastname}`);
  console.log(`****************************\n${cleanListOfCustomers[index - 1]}\n****************************\n`);
  console.log("1 - Show account");
  console.log("2 - Add purchase");
  console.log("3 - Use loyalty points");
  console.log("4 - Show purchase history");
  console.log("5 - Choose another customer");
  console.log("6 - Back to menu");
  console.log("7 - Quit");
  reader.question (`\n🤖 Choose an action for ${cleanListOfCustomers[index - 1]}\n`, (option) =>{
    console.log("à coder");
  });
}

export {accessCustomerData};
