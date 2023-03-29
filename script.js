const person = {
  name: "Piter",
  age: 33,
};

const student = person;
student.age = 100;

 const fireMan = Object.assign({}, person,{age: 38,height:'1.8m'})
console.log(person);
console.log(student);