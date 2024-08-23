// Arrays: array is nothing but collection of differant elements

arr = [1, 6, 8, 9];
console.log(arr);
n = arr.length;
console.log(n);

// for (let i = 0; i < n; i++) {
//   console.log(arr[i]); //print all elements
// }

console.log("3rd inext value is :", arr[2]); //3rd index
console.log("1st index value is :", arr[0]); //1st index
console.log("-------------------------------");
//in java we have Arreylist to perform dynamic operation like add delete but JS has this arr as whole

console.log("Performing Dynamic Operations : push pop ...");
let arr1 = [10, 20, 30, 40, 50];
console.log(arr1);
arr1.push(60);
console.log(arr1); //adding element in given array at last
arr1.push(70);
console.log(arr1);
arr1.unshift(1); //adding  element in giver array at first position
console.log(arr1);
arr1.unshift(5);
console.log(arr1);
arr1.pop(); //removes last elemet of array from last here 70removed
console.log(arr1);
arr1.shift(); //removes elemet from array from 1st position here 5 removed
console.log(arr1);
