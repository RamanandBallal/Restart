//object is kind of map where we have key-value pair
var dtail = ["Ramanand", 28, 76, false]; //we can do like this but not the proper way hence ew have to create object

//object creation : details is object
let details = {
  name: "Ramanand",
  age: 28,
  percentage: 76,
  isMarried: false,
};
console.log(details);
//so in JS objects are look like key and values
//keys: name, age,%,isMarried and values are relatively given

let car = {
  name: "Honda City",
  mielage: 25.6,
  color: "White",
};
console.log(car);

let details2 = {
  name: "Ramanand",
  "nick name": "Ram", //if we want spaces btn key then keepit in quotes""
  age: 28,
  percentage: 76,
  isMarried: false,
};
console.log(details2);

//iteration on objects:

let details3 = {
  name: "Ramanand",
  age: 28,
  percentage: 76,
  isMarried: false,
};
console.log(details3.name); //if i want to print specifics like here name
console.log(details3["name"]); //OR

//if want to change value of any key:
details3.age = 29;
console.log(details3.age);
details3["percentage"] = 78;
console.log(details3["percentage"]);

//iteration: forIn loop

for (const key in details3) {
  console.log(key, details3[key]);
}
