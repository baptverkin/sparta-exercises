import {showAccount, addPurchase, useloyaltyPoint, showPurchaseHistory } from "./profilesOptions.js";
import {start} from "./index.js";

function accessCustomerData(reader, listOfCustomers){
  console.log("****************************\nCHOOSE A CUSTOMER\n****************************\n");
  let cleanListOfCustomers = listOfCustomers.map(key => `${key.Firstname} ${key.Lastname}`).forEach((person, index) => console.log(`${index + 1} - ${person}`));
  console.log("\npress key 'r' to return to home page");
  reader.question ("\n🤖 Choose an action\n", (action) => {
    const actionNumber = parseInt(action);
    if (action === "r"){
      start();
    }else if (actionNumber > 0 && actionNumber<= listOfCustomers.length){
      customerDetails(reader, action, listOfCustomers);
    }else {
      console.log("\nPlease enter a valid option\n");
      accessCustomerData(reader, listOfCustomers);
    }
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
    if (option === "1"){
      showAccount(reader, listOfCustomers[index - 1], listOfCustomers);
    }else if(option === "2"){
      console.log("==test2==", listOfCustomers[index - 1]);
      addPurchase(reader, index, listOfCustomers[index - 1], listOfCustomers);
    }else if (option === "3"){
      useloyaltyPoint(reader, listOfCustomers);
    }else if(option === "4"){
      showPurchaseHistory(reader, index, listOfCustomers[index - 1], listOfCustomers);
    }else if (option === "5"){
      accessCustomerData(reader, listOfCustomers);
    }else if(option === "6"){
      start();
    }else if (option === "7"){
      reader.close();
    } else {
      console.log("\nPlease enter a valid option\n");
      customerDetails(reader, index, listOfCustomers);
    }
  });
}

export {accessCustomerData, customerDetails};
