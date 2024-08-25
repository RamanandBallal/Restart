//Template Literal : use of backtick ` `

let age = 28;
let exp = 5;
console.log("My age is " + age + " and my experience is " + exp);
//generally we use + age + to print the value in betn our text, but its complicated
//so by using template literal we can do this same easily
console.log(`My age is ${age} and my experience is ${exp}`); //template litrals

//we cannot add " " " like this so
//console.log("Rama"nand")//error
console.log(`Rama"nand`);
console.log(`he said : "Hello!!!"`);
