import { start } from "./index.js";
import * as uuid from "uuid";



function addNewCustomer(reader, listOfCustomers){
  console.log("****************************\nCREATE NEW CUSTOMER\n****************************\n");
  let customer = {};
  const id = uuid.v4();
  customer.Id = id;
  customer.PurchaseHistory = [];
  reader.question ("🤖 - first name:\n", (firstName) => {
    customer.Firstname = firstName;
    reader.question ("🤖 - last name:\n", (lastName) => {
      customer.Lastname = lastName;
      reader.question ("🤖 - email:\n", (email) => {
        customer.Email = email;
        reader.question ("🤖 - birth date:\n", (birthdate) => {
          customer.BirthDate = birthdate;
          reader.question ("🤖 - city:\n", (city) => {
            customer.City = city;
            reader.question ("🤖 - country:\n", (country) => {
              customer.Country = country;
              listOfCustomers.push(customer);
              console.log("===test", customer);
              console.log(listOfCustomers);
              return start();
            });
          });
        });
      });
    });
  });
};

export {addNewCustomer};
