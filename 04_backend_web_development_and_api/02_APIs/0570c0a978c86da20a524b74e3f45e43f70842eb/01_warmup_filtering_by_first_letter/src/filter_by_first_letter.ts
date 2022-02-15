import { Customer } from "../data/customers";


export function filterByFirstLetter(customerList: Customer[], letter: string ): Customer[] {
  return customerList.filter(element => element.last_name.charAt(0)=== letter);
}
