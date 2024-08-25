//Truthy values -> everything expt falsy values are truthy values
//Falsy values -> false conditions, false , 0 ,null , NaN(Not a Number), undefined

if (3 > 5) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//O/p : mello

if (false) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:mello

if (2 == 5) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:mello

if (0) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:mello

if (null) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:mello

if (NaN) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:mello

console.log("**********************");

if (5 > 1) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:hello

if (5 == 5) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:hello

if (6 != 2) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:hello

if (true) {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:mello

if ("null") {
  console.log("Hello"); //truthy
} else console.log("mello"); //falsy
//o/p:hello
