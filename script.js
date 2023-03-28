// const auto = {
//   name: "Tesla",
//   year: 2020,
//   color: "red",
//   dimensions: {
//     size: {
//       width: "1.99mm",
//       length: "1,55mm",
//     },
//   },
// };

// const { width, length } = auto.dimensions.size;
// console.log(width, length);

// ///////////Get value default/////////////////////

const auto = {
  name: "Tesla",
};

const { name, year = 2020 } = auto;
console.log(name, year);
