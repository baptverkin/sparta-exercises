import readline from "readline";
import { addNewCustomer } from "./addNewCustomer.js";
import { accessCustomerData} from "./accessCustomerData.js";
// import {enterFirstName} from "./addNewCustomer.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listOfCustomers = [];

function start(){
  const welcomeAction = ["1 - Add new customer", "2 - Access customer data", "3 - Quit"];
  console.log(`${welcomeAction[0]}\n${welcomeAction[1]}\n${welcomeAction[2]}\n`);
  reader.question ("🤖 Choose an action\n", (action) => {
    if (action === "1"){
      addNewCustomer(reader, listOfCustomers);
    }else if (action === "2"){
      accessCustomerData(reader, listOfCustomers);
    }
    else if (action === "3"){
      console.log("See you soon");
      reader.close();
    }else{
      console.log("\nPlease enter a valid option");
      return start();
    }
  });
}

console.log("Welcome\n****************************\n");

start(reader);

export {start, listOfCustomers};
