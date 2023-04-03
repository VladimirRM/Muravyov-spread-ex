// const listPromise = fetch("https://api.sampleapis.com/countries/countries");
// listPromise
//   .then((data) => data.json())
//   .then((countries) => countries)
//   .catch(err =>{
//     console.log('Error');
//   });

const coffee = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("you coffee is good");
  }, 1500);
});

coffee
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Err");
  });
