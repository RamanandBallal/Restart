let arr = [1, 9, 2, 7, 4, 5];
console.log(arr);

arr = arr.sort();
console.log(arr); //[ 1, 2, 4, 5, 7, 9 ]

//custom sorting: i.e suppose you ant decresing sort
arr = arr.sort((a, b) => b - a);
console.log(arr); //[ 9, 7, 5, 4, 2, 1 ]
