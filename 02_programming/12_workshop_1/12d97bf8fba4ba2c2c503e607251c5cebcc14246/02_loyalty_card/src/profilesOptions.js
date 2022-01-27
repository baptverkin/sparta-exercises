import {accessCustomerData, customerDetails} from "./accessCustomerData.js";
import moment from "moment";

function showAccount (reader, customer, listOfCustomers, index){
  console.log(`****************************\n${customer}'s information\n****************************\n`);
  console.log("Customer's information:");
  console.log(customer);
  console.log (`Name:             ${customer.Firstname} ${customer.Lastname}`);
  console.log (`Email:            ${customer.Email}`);
  console.log("Adress:");
  console.log (` - City:          ${customer.City}`);
  console.log (` - Country:       ${customer.Country}`);

  reader.question("\nTo return to previous screen, press any key\n", (option) => {
    accessCustomerData(reader, listOfCustomers);
  })
  ;
}

function addPurchase (reader, index, customer, listOfCustomers){
  let cleanListOfCustomers = listOfCustomers.map(key => `${key.Firstname} ${key.Lastname}`);
  console.log(`****************************\n${cleanListOfCustomers[index - 1]} - Add purchase\n****************************\n`);

  const generateDate = moment().format("L");

  reader.question("🤖 Purchase amount\n>", (amount) => {
    customer.PurchaseHistory.push({Purchasedate: generateDate, Purchasamount: amount });
    accessCustomerData(reader, listOfCustomers);
  });
}

function useloyaltyPoint (reader, listOfCustomers){
  console.log("Show loyalty points");
  reader.question("To return to previous screen, press any key\n", (option) => {
    accessCustomerData(reader, listOfCustomers);
  });
}

function showPurchaseHistory (reader, index, customer, listOfCustomers){
  let cleanListOfCustomers = listOfCustomers.map(key => `${key.Firstname} ${key.Lastname}`);
  console.log(`****************************\n${cleanListOfCustomers[index - 1]} - Add purchase\n****************************\n`);

  let listOfPurchase = customer.PurchaseHistory.map(key => console.log(`${key.Purchasedate} - ${key.Purchasamount}€`));
  reader.question("To return to previous screen, press any key\n", (option) => {
    accessCustomerData(reader, listOfCustomers);
  });
}

export {showAccount, addPurchase, useloyaltyPoint, showPurchaseHistory};
