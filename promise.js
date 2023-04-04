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

// const family = [
//   { member: "Mom", id: 111, coffee: "Latte" },
//   { member: "Father", id: 222, coffee: "Espresso" },
//   { member: "Sun", id: 333, coffee: "Cappucino" },
// ];

// const getCoffee = (member) => {
//   const coffeePromise = fetch("https://api.sampleapis.com/coffee/hot");
//   return coffeePromise
//     .then((data) => data.json())
//     .then((list) => {
//       const coffee = list.find((res) => res.title === member.coffee);
//       console.log(coffee);
//       return {
//         ...member,
//         coffee,
//       };
//     });
// };
/////////////////  /////////////////////////

// const getFamilyMember = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const member = family.find((res) => res.id === id);
//       console.log(member);
//       if (member) {
//         resolve(member);
//       } else {
//         reject(Error("member not found"));
//       }
//     }, 1500);
//   });
// };

// getFamilyMember(000)
//   .then((data) => getCoffee(data))
//   .then((newMember) => {
//     console.log("newMember", newMember);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

///////////// ///////////////////

// const makeCoffee = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Take your coffee");
//     }, 500);
//   });
// };
// const makeToast = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Take your toast");
//     }, 2500);
//   });
// };

// const coffeePromise = makeCoffee();
// const toastPromise = makeToast();

// Promise.all([coffeePromise, toastPromise]).then(
//   ([coffeePromise, toastPromise]) => {
//     console.log(coffeePromise, toastPromise);
//   }
// );

/////////////////// ////////////////////////

// const beerPromise = fetch("https://api.sampleapis.com/beers/ale");
// const winePromise = fetch("https://api.sampleapis.com/wines/reds");

// Promise.all([beerPromise, winePromise])
// .then((data) => {
//    Promise.all(data.map((res) => res.json()))
// .then((finalData) => {
//     console.log(finalData);
//   });
// });

///////////////   ////////////////////////

// const p = new Promise((resolve, reject) => {
//   console.log("SetTimeout started");

//   setTimeout(() => {
//     console.log("SetTimeout ended");
//     reject({ status: "no" });
//   }, 500);
// });

// p.then((data) => {
//   console.log(data);
// })
//   .catch((error) => console.error(error))
//   .finally(() => console.log("finally"));


////////////////   /////////////////////////

const delay = (ms)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve()
         },ms)
    })
}
delay(2000).then(()=>console.log('After 2000'))
