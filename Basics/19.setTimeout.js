//setTimeout: The setTimeout() method calls a function after a number of milliseconds.1 second = 1000 milliseconds.

function hello() {
  console.log("Hello");
}

function mello() {
  console.log("Mello");
}

function bollo() {
  console.log("Bollo");
}

// hello();
// mello();
// bollo();

// setTimeout(hello, 2 * 1000);
// setTimeout(mello, 1 * 1000);
//output : Mello n then Hello , after pressing run butten the hello is first but mello has lesser time so it will print first then the hello

//this will run one by one by gap of 2sec
// setTimeout(hello, 2 * 1000);
// setTimeout(mello, 4 * 1000);
// setTimeout(bollo, 6 * 1000);

//OR
// setTimeout(function () {
//   console.log("Ramanand");
// }, 2 * 1000);

// setTimeout(function () {
//   console.log("Welcome");
// }, 4 * 1000);

//print num 1 to 10 with some time gap
// for (let i = 1; i <= 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 300);
// }

//print num from 10 to 1
for (let i = 1; i <= 10; i++) {
  setTimeout(function () {
    console.log(11 - i); //11-i otherwise 1,2,3.... will print
  }, i * 300);
}
