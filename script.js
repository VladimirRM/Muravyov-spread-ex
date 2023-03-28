////////////rest////////////

function convertUsd(rate, ...totals) {
  console.log(rate, totals);
  return totals.map((total) => total / rate);
}

 const total = convertUsd(70, 1000, 5000, 800);

console.log(total);
