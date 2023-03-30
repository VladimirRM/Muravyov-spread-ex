/////////////first method /////////

// const car = {
//   name: "Tesla",
//   year: 2010,
// };

// const html = `

// <div>
//    <h1>${car.name}</h1>
//   <p>${car.year}</p>

// </div>

// `;
// document.body.innerHTML = html;

////////////////////second render ///////////

const cars = [
  {
    name: "Tesla",
    year: 2010,
  },
  {
    name: "Nissan",
    year: 2012,
  },
];

const html = `
<ul>
${cars.map((car) => `${car.name} ${car.year}`).join(" ")}
</ul>
`;

document.body.innerHTML = html;
console.log(html);
