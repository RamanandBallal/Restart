//callback function: callback fun ek aisa fun hota hai jo ek function ke andar pass hota hai

//i.e when a function pass as a agrument to another function , that when one fun calling another fun
//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

//here 1st function is product has some rtun value and 2nd function named as exprn
function product(a, b, c) {
  return a * b * c;
}

function exprn(x, y) {
  let a = x(2, 5, 7);
  console.log(a - y);
}

exprn(product, 7); // inside exprn we call another functon product and product fun is 1st argument inside exprn seconf is 7

// x's value 2,5,4 goto product fun and give result in 'a' varible then we give y's value as 7 is substracted from 'a'
