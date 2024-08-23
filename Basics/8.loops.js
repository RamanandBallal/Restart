//for
console.log("For loop");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//while
console.log("While loop");
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}
//do while
console.log("do while loop");
let k = 1; //initialisation
do {
  console.log(k); //declearation
  k++; //increment
} while (k <= 15); //condition at last

// for and while loop cant print if condition fails but
// do while runs(prints) once if condition fails
