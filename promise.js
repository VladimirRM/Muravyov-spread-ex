// const listPromise = fetch("https://api.sampleapis.com/countries/countries");
// listPromise
//   .then((data) => data.json())
//   .then((countries) => countries)
//   .catch(err =>{
//     console.log('Error');
//   });

// const coffee = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error("you coffee is good"));
//   }, 1500);
// });

// coffee
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Err");
//   });

const family = [
  { member: "Mom", id: 111, coffee: "Latte" },
  { member: "Father", id: 222, coffee: "Espresso" },
  { member: "Sun", id: 333, coffee: "Cappucino" },
];

const getCoffee = (member) => {
    const coffeePromise = 
};

const getFamilyMember = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find((res) => res.id === id);
      console.log(member);
      if (member) {
        resolve(member);
      } else {
        reject(Error("member not found"));
      }
    }, 1500);
  });
};

getFamilyMember(111).then((data) => {
  console.log(data);
});
