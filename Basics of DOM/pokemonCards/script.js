//topic :How to create multiple elements in JS
//here we are making multiple cards
//

let main = document.getElementById("main");
//array creation add all img address inside it
let arr = [
  "https://i.pinimg.com/564x/c1/5b/09/c15b09f4645c148c65bf26239f3e20da.jpg",
  "https://i.pinimg.com/736x/ea/93/b6/ea93b66c179cd4cebdd9e2557f9bd542.jpg",
  "https://i.pinimg.com/564x/52/32/39/523239eb4e31ec14f33aae103484423b.jpg",
  "https://i.pinimg.com/736x/39/c8/85/39c8855bc4871a9f10a7b291e543c750.jpg",
  "https://i.pinimg.com/736x/7d/4f/fe/7d4ffed8f74ec91745e43c442fffe13a.jpg",
  "https://i.pinimg.com/736x/e9/47/48/e94748c930b88041261babad1afd2d45.jpg",
  "https://i.pinimg.com/736x/48/fe/8f/48fe8f7cc58e86c35b19079ac1151bc6.jpg",
  "https://i.pinimg.com/474x/d9/80/72/d9807275a51799f327bc829dbe940d9e.jpg",
  "https://i.pinimg.com/564x/6d/47/a3/6d47a374ce4130f095b7f440d6a396d8.jpg",
]; //array creation add all
let s = "";
for (let i = 1; i <= 52; i++) {
  //i=52- took according to my screen
  let r = Math.floor(Math.random() * 9); //*9 becozihave 8imglinks
  s += `<div class ="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;
