//forof loop:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const ele of arr) {
  console.log(ele);
}

//in case of for loop e can multiply array by 2 or perfor anyrthing
arr1 = [2, 4, 6, 8, 10];
console.log("before Double :", arr1);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i] * 2;
}
console.log("After Double :", arr1);

//but such operation cant be done in forOf loop:Shows error ele = ele * 2;
//  TypeError: Assignment to constant variable.
// arr2 = [2, 4, 6, 8, 10];
// console.log("before Double :", arr2);
// for (const ele of arr2) {
//   ele = ele * 2;
// }
// console.log("After Double :", arr2);

//we cannot print index in for of loop
console.log("For Each loop: ");
brr = [3, 6, 9, 12, 15];
brr.forEach((ele) => {
  console.log(ele);
});
//we can add many things with ele parameter like index
console.log("For Each loop: ");
brr1 = [3, 6, 9, 12, 15];
brr1.forEach((ele, i, brr1) => {
  console.log(i, ele, brr1);
});
