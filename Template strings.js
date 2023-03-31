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

// const cars = [
//   {
//     name: "Tesla",
//     year: 2010,
//   },
//   {
//     name: "Nissan",
//     year: 2012,
//   },
// ];

// const html = `
// <ul>
// ${cars.map((car) => `${car.name} ${car.year}`).join(" ")}
// </ul>
// `;

// document.body.innerHTML = html;
// console.log(html);

///////////////Conditional rendering  ////////////

// const car = {
//   name: "Tesla",
//   year: 2010,
//   info: "Super modern auto",
// };

// const html = `
// <div>
// <p>${car.name}</p>
// <p>${car.year}</p>
// ${car.info ? `Information: ${car.info}` : ""}
// </div>`;

// document.body.innerHTML = html;

/////////////Rendering tags////////////////////

const cars = {
  name: "Tesla",
  year: 2010,
  tags: ["electric", "modern", "fast"],
};

const renderTags = (tags) => {
  return `
     <ul>
       ${tags.map((tag) => `<li>${tag}</li> `)}
     </ul>
    `;
};

const html = `
      <div>${cars.name}</div>
      <div>${cars.year}</div>
      <div>${renderTags(cars.tags)}</div>
`;

document.body.innerHTML = html;

// const renderTags = (tags) => {
//   return `
//     <ul>
//     ${tags.map((tag) => ` <li>${tag}</li>  `).join(' ')}
//     </ul>
//     `;
// };

// const html = `
//     <div>
//     <p>${car.name}</p>
//     <p>${car.year}</p>
//     ${renderTags(car.tags)}
//     </div>`;

// document.body.innerHTML = html;
