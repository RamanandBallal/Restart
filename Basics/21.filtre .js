//filtre : The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not change the original array.

//to filtre out even elements
function remove(ele) {
  if (ele % 2 != 0) return true;
  else return false;
}
let arr = [1, 9, 2, 7, 4, 5, 6, 2, 8];
console.log(arr);
let brr = arr.filter(remove);
console.log(brr);

arr = arr.filter((ele) => ele < 4);
console.log(arr);
