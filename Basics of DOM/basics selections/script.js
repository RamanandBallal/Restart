// console.log("Hello Ramanand");
// let a = 5;
// console.log(a * a);
//we can se this on browser->inspect->console

//1:how to select element of HTML

let x = document.querySelector("h1"); //selecting h1 tag only the 1st one
console.log(x);

let y = document.querySelectorAll("h1");
console.log(y);

//change color of h2
let z = document.querySelector("h2");
z.style.color = "red";
z.style.fontFamily = "Gill Sans";

//change background color
let a = document.querySelector("h1");
a.style.backgroundColor = "blue";

//chage text of tag
let b = document.querySelector("h3");
b.innerHTML = "Text Changed by use of innerHTML ";

//appling settimeout with some styles
let c = document.querySelector("h4");
setTimeout(function () {
  c.style.backgroundColor = "red";
  c.style.fontFamily = "Gill Sans";
}, 2000);

let d = document.querySelector("h1");
setTimeout(function () {
  d.style.backgroundColor = "lightblue";
  d.style.fontFamily = "Gill Sans";
}, 4000);
