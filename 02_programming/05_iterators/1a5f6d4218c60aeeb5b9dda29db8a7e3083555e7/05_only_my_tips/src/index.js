/*function onlyMyTips(invoices) {
  const iAmTheWaiter = invoices.filter(invoices => invoices.waiter === "Yourself");
  const tips = iAmTheWaiter.map(tips => tips.tip);
  return tips;
}*/

function onlyMyTips(invoices) {
  return invoices
    .filter(invoices => invoices.waiter === "Yourself")
    .map(tips => tips.tip);
}

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

const result = onlyMyTips(todaysInvoices);
console.log(result);

//.map(invoices => invoices.slice("tip:"));

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;


