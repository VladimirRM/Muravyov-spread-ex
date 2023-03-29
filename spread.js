/////////get copy arr and add new el/////////
// const regular = ["Wv", "Scoda", "Audi"];
// const electric = ["Nissan", "Tesla", "Bmw"];

// const cars = [...regular, "Mercedes-benz", ...electric];

// //////////// get copy arr and add new el use index/////
// const cars = ["Wv", "Scoda", "Audi"];

// const carsNew = [...cars];
// carsNew[0] = "Motorcycle";

////////split str using spread /////

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
//////////////add array to array as element/////////

// const regular = ["Wv", "Scoda", "Audi"];
// const electric = ["Nissan", "Tesla", "Bmw"];

// regular.push(electric);
// console.log(regular);

// console.log(regular);

//////////////render string //////////

// const car = ["Tesla", 2021];

// function displayCar(title, year) {
//   console.log(`auto ${title} - ${year} year`);
// }
// displayCar(...car);
// displayCar(car[0], car[1]);///////
