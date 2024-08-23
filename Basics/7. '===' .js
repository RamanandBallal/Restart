//Use of === in JS : === checks value and typr both

a = 5;
b = "5";
console.log(a == b);
//true in JS becoz == checks value only not type  and here a is int type and b is String type but JS do Parsing and give true result
//but false in java becoz according to java '5' of caharacter and java compare this to ASCII value
//JS parse this '5' to INTEGER value

console.log(a === b); //checks value and typr both
//false becoz both are of differnt type
