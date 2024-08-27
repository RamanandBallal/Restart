//function: fun are called to increse reuseablity of code

//if we ant to prnt some nos so we go for loops
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

//Creating one function and we can reuse it many times
function OnetoN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  console.log(); //to give blank line
}
OnetoN(4); //1,2,3,4
OnetoN(11); //1,2,3,4,5,6,7,8,9,10,11

//addition of two square numbers
function eqn(a, b) {
  return Math.abs(a * a) + Math.abs(b * b); //Math.abs:Returns the absolute value of a number (the value without regard to whether it is positive or negative).
}
console.log(eqn(2, 3));
console.log(eqn(8, 6));
