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

// const auto = {
//   name: "Tesla",
// };

// const { name, year = 2020 } = auto;
// console.log(name, year);

// //////////////////Get value properties//////////

// const auto = ["Tesla", 2020,'Green']

// const [name, year, color] = auto
// console.log(name, year, color);

//////////////  /////////////////

// const auto = 'Tesla, 2020,Green'

// const [name, year, color] = auto.split(',')
// console.log(name, year, color);

////////////  /////////////////

// function convertRubles(rubles) {
//   const complete = {
//     EUR: rubles * 80,
//     USD: rubles * 70,
//     GBP: rubles * 100,
//   };
//   return complete;
// }

// const { EUR, USD, GBP } = convertRubles(5000);
// console.log(EUR, USD, GBP );

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

// const auto = {
//   name: "Tesla",
// };

// const { name, year = 2020 } = auto;
// console.log(name, year);

// //////////////////Get value properties//////////

// const auto = ["Tesla", 2020,'Green']

// const [name, year, color] = auto
// console.log(name, year, color);

//////////////  /////////////////

// const auto = 'Tesla, 2020,Green'

// const [name, year, color] = auto.split(',')
// console.log(name, year, color);

////////////  /////////////////

// function convertRubles(rubles) {
//   const complete = {
//     EUR: rubles * 80,
//     USD: rubles * 70,
//     GBP: rubles * 100,
//   };
//   return complete;
// }

// const { EUR, USD, GBP } = convertRubles(5000);
// console.log(EUR, USD, GBP );


// function getTotal ({total,shipment = 0.1}){
    //   return total + total * shipment
    // }
    
    // const total = getTotal({shipment: 0.2, total: 1000})
    
    // console.log(total);
