type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};


function getEmails (customers: CustomerType[]): string[]{
  const myCustomersEmails: string[] = []
  for(let i = 0; i<customers.length; i++)
  myCustomersEmails.push(customers[i].email);
  return myCustomersEmails;
}

// const myClients: CustomerType = {
//   { id: 24, first_name: "Alexander", last_name: "Collip", email: "acollip0@redcross.local", gender: "Male" },
//   { id: 42, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
// };

export {getEmails}


