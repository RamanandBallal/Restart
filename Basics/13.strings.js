let a = "Ramanand is a developer";
console.log(a, a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

let s = "Java Script";
console.log(s, s.length);
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log("for of loop");
let str = "Coder";
for (const ele of str) {
  console.log(ele);
}

console.log("Builtin functions :uppercase/lowercase/trim/slice");
let str1 = "javascript";
console.log(str1);
//console.log(str1.toUpperCase); //do nothing
//console.log(str1.toLowerCase); //do nothing
str1.toUpperCase(); //nothing happen
let s2 = str1.toUpperCase(); //this will work
console.log(str1, s2); //o/p : javascript JAVASCRIPT

//trim: if spaces at start or end is there in string is removed, except speces betn words
let str2 = "     java   script    ";
console.log(str2);
console.log(str2.trim());
console.log(str2.charAt(6));

console.log("Use of slice()");
let str3 = "ramanandballal";
console.log(str3.slice(5)); //substring from index i to end o/p:andballal 'raman'substracted 5letter
console.log(str3.slice(4, 9)); //o/p :nandb letter 5 to 9 printed upto letter 4 subtracted

console.log("Use of split()");
let str4 = "My Name is Ramanand Ballal And I Am Software Developer";
console.log(str4);
let arr = str4.split(" ");
// console.log(arr);
for (const ele of arr) {
  console.log(ele);
}

console.log("Use of split()");
let str5 = "10,20,30,40,50,60";
console.log(str5);
let arr1 = str5.split(","); //split on basis of comma,
// console.log(arr);
for (const ele of arr1) {
  console.log(ele);
}
