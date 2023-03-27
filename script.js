const regular = ["Wv", "Scoda", "Audi"];
const electric = ["Nissan", "Tesla", "Bmw"];

const cars = [...regular, "Mercedes-benz", ...electric];
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

const word = "electric";
const letters = [...word];

console.log(letters);
