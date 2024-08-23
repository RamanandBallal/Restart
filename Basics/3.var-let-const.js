//let var const: usually prefer let
//const

var a = 4;
console.log(a);
a = 6;
console.log(a);

const b = 5;
console.log(b);
// b++;//show error because const cannot change
// console.log(b);

//java/C++ will throw error at once without printing b 's value at first line
//but js run line by line print b's value 5 then show error

//Redefination allowed in JS except fot const
console.log("------------------");
var a = 10;
console.log(a);
var a = 20;
console.log(a); //Redefination allowed no error
// const a = 30;
// console.log(a); //error
