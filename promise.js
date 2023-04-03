const listPromise = fetch("https://api.sampleapis.com/countries/countries");
listPromise
  .then((data) => data.json())
  .then((countries) => countries)
  .catch(err =>{
    console.log();
  });
