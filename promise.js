// const listPromise = fetch("https://api.sampleapis.com/countries/countries");
// listPromise
//   .then((data) => data.json())
//   .then((countries) => countries)
//   .catch(err =>{
//     console.log('Error');
//   });

const coffee = new Promise((resolve, reject) => {
  resolve("you coffee is good");
});

coffee.then((data) => {
  console.log(data);
});
