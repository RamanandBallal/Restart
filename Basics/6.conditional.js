//Condyions: if if-else
console.log(" ***1***");
age = 24;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
console.log("***2***");

num = 2;
if (num % 2 == 0) {
  console.log("Num is even");
} else {
  console.log("Num is odd");
}

console.log("***3***");
rating = 5;
// 1 - poor;
// 2 - BelowAverage;
// 3 - Average;
// 4 - Good;
// 5 - excelent;

if (rating == 1) {
  console.log("Poor");
} else if (rating == 2) {
  console.log("Below Average");
} else if (rating == 3) {
  console.log("Average");
} else if (rating == 4) {
  console.log("Good");
} else {
  console.log("Excellent");
}

console.log("***4***");
x = 457; //3 digit num
//x = 7; //Not a 3 digit num
if (x > 100 && x <= 999) console.log("3 digit num");
else console.log("Not a 3 digit num");
