//Event listeners: when e hover, on click , move mouse over element, it will perforn somthing
//event listener function allows you to create custom responses to events like mouse clicks, keyboard clicks, and window resizing.EventListeners is better for code maintainability and readability (besides being a good practice).

let x = document.getElementById("ele1"); //pikachu
x.addEventListener("click", function () {
  x.style.color = "yellow";
  x.style.backgroundColor = "red";
});
//mense , when I click on id=ele1 this function has to execute

let y = document.getElementById("ele2"); //charizard
y.addEventListener("mousemove", function () {
  y.style.color = "white";
  y.style.backgroundColor = "orange";
});
//means , when our mouse moves over ele2 then the function2 will get executed. Insted of 'mousemove' we can write 'mouseenter' too

let z = document.getElementById("ele3"); //mewtwo
y.addEventListener("click", function () {
  z.style.color = "white";
  z.style.backgroundColor = "purple";
});
//we add eventlistener on ele2(y) and change functions of ele3 from ele2 i.e on clicking ele2 we get changes in ele3
//this is also happen in event listenr

//suppose we want to change ele1 from ele3 then

z.addEventListener("click", function () {
  //when we click on z Mewtwo
  x.style.color = "white";
  x.style.backgroundColor = "green";
  x.innerHTML = "Bulbasur";
});
//when we click ele3 our functionality of ele1 get changed i.e 'Pikachu' bechame 'Bulbasur'and color bg-colr changed

//when we use mousemove the functionlity changes of ele2'charizard' but we want the colr and bg-clr revert back to original after leaving mouse from it then

y.addEventListener("mouseleave", function () {
  y.style.color = "black";
  y.style.backgroundColor = "white";
});
//so now if we left our mouse from charizard the changes revert back
//same we can do with ele1 'Pikachu'
x.addEventListener("mouseleave", function () {
  x.style.color = "black";
  x.style.backgroundColor = "white";
});
