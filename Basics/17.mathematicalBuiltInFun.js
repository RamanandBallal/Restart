//Built-In Functions:
//we can give any type of num -ve, decimal any and multiple nums also

console.log(Math.abs(-14)); //14
//Math.abs :Returns the absolute value of a number (the value without regard to whether it is positive or negative).

//max and min function
console.log(Math.max(4, 8)); //8
console.log(Math.max(36, -15, 158, 77)); //158
console.log(Math.min(-1, 0, 2, 3, 4)); //-1
console.log(Math.min(55, 174, 32)); //32

//Squareroot and cuberoot

console.log(Math.sqrt(36)); //6
console.log(Math.sqrt(10)); //3.162
console.log(Math.cbrt(8)); //2
console.log(Math.cbrt(125));

//power fun:
console.log(Math.pow(2, 3)); //2 to the poer 3 i.e 8
console.log(Math.pow(3, 4));

//floor:Returns the greatest integer less than or equal to its numeric argument.
//simple 5.86 lie btn 5 and 6 then 5 is the floor
console.log(Math.floor(5.86)); //5
console.log(Math.floor(-3.14)); //-4 ->becoz -3 is bigger than -4 so floor value is lesser that is -4

//ceil : ceil is like ceiling of building highest value
console.log(Math.ceil(5.86)); //6
console.log(Math.ceil(-2.5)); //-2

//random:Returns any random number between 0 and 1.except 0 and 1
//it give differant number every time
console.log(Math.random()); //0.3947450740743985

//write a code to generate a random number betn 0 and 9 (included)
let num = Math.random() * 10; //we just muliply it by10
console.log(num); //7.96594303993645
//but we dont want decimal value , for this use floor fun in it
let num1 = Math.floor(Math.random() * 10);
console.log(num1); //8   .......
