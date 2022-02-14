import { lottery_draw } from "./lottery_draw"
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  const myTicket = lottery_draw();
  if(ticket[0]=== myTicket[0] && ticket[1] === myTicket[1] && ticket[2] === myTicket[2]){
    console.log("You won the lottery!");
  }else{
    console.log ("You lost...");
  }

}
