const listPromise = fetch("https://api.sampleapis.com/countries/countries");
listPromise.then((data) => {
  console.log(data);
});
