function howMuchDidIMake(invoices) {
  const iAmTheWaiter = invoices.filter(invoices => invoices.waiter === "Yourself");
  const tips = iAmTheWaiter.map(tips => tips.tip);
  const sumOfTips = tips.reduce((a, b) => a + b, 0);
  console.log(tips);
  return sumOfTips;
}


const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

const result = howMuchDidIMake(invoices);
console.log(result);


// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;
