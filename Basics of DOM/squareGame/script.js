//box1
let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter", function () {
  let r = Math.floor(Math.random() * 100); //* 100 becoz random gives vlues betn 0 -1 , and e want 1 to 100 hance multiply it by 100 && floor used to remove decimals
  s1.innerHTML = `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave", function () {
  s1.innerHTML = "<h1>1</h1>";
});

//box2
let s2 = document.getElementById("sq2");
let clr = "red";
s2.addEventListener("mouseenter", function () {
  if (clr == "red") {
    //if bg-clr is red then show red first then green
    s2.style.backgroundColor = "red";
    clr = "green";
  } else if (clr == "green") {
    //if bg-clr is green then show green first then blue
    s2.style.backgroundColor = "green";
    clr = "blue";
  } else {
    //if bg-clr is blue then show blue first then red
    s2.style.backgroundColor = "blue";
    clr = "red";
  }
});
s2.addEventListener("mouseleave", function () {
  s2.style.backgroundColor = "white";
});

//box3 --> random colrs 255
//rgb(a,b,c) whre a,b,c lies betn 0 to 255  rgb(0,0,0) to rgb(255,255,255)
let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter", function () {
  let r1 = Math.floor(Math.random() * 256); //random colors 255 hance take +1
  let r2 = Math.floor(Math.random() * 256);
  let r3 = Math.floor(Math.random() * 256);
  s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`; //gives random colors in milions
});
s3.addEventListener("mouseleave", function () {
  s3.style.backgroundColor = "white";
});

//Box4 --> on click of box 4 box-1,2,3's clr changes but 1'tone is blueish, 2's pickish and 3's yellowish

let s4 = document.getElementById("sq4");
s4.addEventListener("click", function () {
  let r1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let r3 = Math.floor(Math.random() * 256);
  s1.style.backgroundColor = `rgb(${r1},255,255`; //for lighet clr shade of red we gave g =255 and b = 255 each
  s2.style.backgroundColor = `rgb(255,${r2},255)`;
  s3.style.backgroundColor = `rgb(255,255,${r3})`;
});
s4.addEventListener("mouseleave", function () {
  s1.style.backgroundColor = "white";
  s2.style.backgroundColor = "white";
  s3.style.backgroundColor = "white";
});

//box 4-2 ---> on click of box 1 box 4's say's hello ramanand
let s5 = document.getElementById("sq4");
s1.addEventListener("dblclick", function () {
  //doubleclick
  s5.innerHTML = `<h1>Welcome To JavaScript</h1>`;
  s5.style.backgroundColor = "lightcoral";
});
s5.addEventListener("mouseleave", function () {
  s5.innerHTML = "<h1>4</h1>";
  s5.style.backgroundColor = "white";
});
let main = document.getElementById("main");
let cursor = document.getElementById("cursor");
main.addEventListener("mousemove", function (dets) {
  console.log(dets.x, dets.y);
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
