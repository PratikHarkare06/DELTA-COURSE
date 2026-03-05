function getTicket(n = 3) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return {
    description: "Lottery Ticket",
    numbers: arr
  };
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + Number(curr), 0);
}

export { getTicket, sum };
