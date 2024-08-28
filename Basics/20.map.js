//Map Filtre And Reduce [[Array]]
//Map: In JS map() is a mthod of array.it creates anew array by callaling a function on every element of aoriginal array and store the result in the new array. Map() returns new array and the original array is unchanged

//generally if e want to double array ele or make square of every element then we create one new empty array and by looping copy every elemet in it
let arr = [1, 6, 3, 8];
console.log(arr);
let brr = [];
for (const ele of arr) {
  brr.push(ele * 2);
  //   brr.push(ele * ele);
}
console.log(brr);

//but by using map() we can do it easily ,  we just create a function twice and map it with original array and copy it in array2

function twice(ele) {
  return 2 * ele;
}

function square(ele) {
  return ele * ele;
}
function add10(ele) {
  return ele + 10;
}
let array = [6, 2, -3, 4, -8];
console.log(array);
// let array2 = array.map(twice);
// let array2 = array.map(square);
let array2 = array.map(add10);
console.log(array2);
//or directly write fun inside map() here we write cube
let array3 = array.map(function (ele) {
  return ele * ele * ele;
});
console.log(array3);
//or using arrow =>
let array4 = arr.map((ele) => ele / 2);
console.log(array4);
