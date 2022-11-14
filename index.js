/*btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

function rotateCube() {
  if (document.getElementsByTagName("button").id === btn1) {
    document.getElementsById("cube").style.transform = "translateZ(90deg)";
  }
}*/

function rotate() {
  document.getElementById("cube").style.transform = "rotateX(90deg)";
}

function stop() {
  document.getElementById("cube").style.animationPlayState = "paused";
}

function play() {
  document.getElementById("cube").style.animation = "none";
  document.getElementById("cube").offsetHeight;
  document.getElementById("cube").style.animation = null;
  document.getElementById("cube").style.animation = "rotation 2s linear";
  let randomNumber = Math.floor(Math.random() * 6);
  if (randomNumber === 1) {
    document.getElementById("cube").style.transform = "rotateY(0deg)";
  } else if (randomNumber === 2) {
    document.getElementById("cube").style.transform = "rotateY(270deg)";
  } else if (randomNumber === 3) {
    document.getElementById("cube").style.transform = "rotateX(180deg)";
  } else if (randomNumber === 4) {
    document.getElementById("cube").style.transform = "rotateY(90deg)";
  } else if (randomNumber === 5) {
    document.getElementById("cube").style.transform = "rotateX(270deg)";
  } else {
    document.getElementById("cube").style.transform = "rotateX(90deg)";
  }
}
