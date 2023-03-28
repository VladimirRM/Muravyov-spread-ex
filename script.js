// const regular = ["Wv", "Scoda", "Audi"];
// const electric = ["Nissan", "Tesla", "Bmw"];

// const cars = [...regular, "Mercedes-benz", ...electric];
/////////1//////////
// cars = cars.concat(regular);
// cars.push("Mersedes-benz");
// cars = cars.concat(electric);
/////////2///////
// const carsNew = [...cars];
// carsNew[0] = "Motorcycle";
// /////////3/////////
// console.log(cars);
// console.log(carsNew);
////////split str with spread /////
// const word = "electric";
// const letters = [...word];

// console.log(letters);

///////// get field in arr //////////
// let car = {
//   name: "Tesla",
//   year: 2020,
//   tags: ["fast", "new", "electric"],
// };

// const carTags = [...car.tags];

// console.log(carTags);

//////////delete el in arr////////
// const cars = [
//   { name: "Nissan", id: 1234 },
//   { name: "Bmw", id: 1235 },
//   { name: "Toyota", id: 1256 },
//   { name: "Tractor", id: 1212 },
//   { name: "Lexus", id: 1574 },
// ];
// const objectId = 1212;
// const indexId = cars.findIndex((car) => car.id === objectId);
// console.log(indexId);

// const carsNew = [...cars.slice(0, indexId), ...cars.slice(indexId + 1)];

// console.log(carsNew);
//////////////adding el from arr to arr/////////
const regular = ["Wv", "Scoda", "Audi"];
const electric = ["Nissan", "Tesla", "Bmw"];


