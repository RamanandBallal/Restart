const arr = [2, 8, 6, 7, 5];
arr.push(3);
console.log(arr);
//as we declere cost array and do push operation ,
//technically it should show error, but in JS const in case of array can do so
arr[0] = 9;
console.log(arr); //chnge 1st elemet of array
// arr = 3.14;
// console.log(arr); //only this will sho error

console.log(
  "-----diiferant datatype can be aslo included in same array-------"
);
arr1 = [1, "Ramanand", 71.08, true, "Cdac"];
console.log(arr1);

//Also we can add another arrey in side it with differant datatype
arr2 = [1, "2D-Array", 71.08, [2, 5, 6]];
console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
  console.log(i, arr2[i]); //this will print one by one array index and its value
}
