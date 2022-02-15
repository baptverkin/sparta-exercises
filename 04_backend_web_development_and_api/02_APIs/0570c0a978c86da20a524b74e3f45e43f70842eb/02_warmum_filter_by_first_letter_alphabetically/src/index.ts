// code here
import { customers } from "../data/customers";
// import { filterByFirstLetter } from "./filter_by_first_letter_and_ordered_alphabetically";
// import { filterByFirstLetterOrdered } from "./filter_by_first_letter_and_ordered_alphabetically";
import { Customer } from "../data/customers";


export function filterByFirstLetter(customerList: Customer[], letter: string ): Customer[] {
  return customerList.filter(element => element.last_name.charAt(0)=== letter);
}

export function filterByFirstLetterOrdered (customer: Customer [], letter: string): Customer[] {
  return filterByFirstLetter (customer, letter ).sort((a, b) => a.last_name.localeCompare(b.last_name));
}

console.log(filterByFirstLetterOrdered(customers, "J"))
