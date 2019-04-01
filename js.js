"use strict;";

window.addEventListener("load", init);

function init() {
  animateText();
}
let t1Listener = false;
let t2Listener = false;
let t3Listener = false;
function animateText() {
  const t1 = document.querySelector(".text1");
  const t2 = document.querySelector(".text2");
  const t3 = document.querySelector(".text3");
  t1.classList.add("fill");
  if (t1Listener === false) {
    t1.addEventListener("transitionend", e => {
      t2.classList.add("fill");
      t1Listener = true;
      console.log("new event listener");
    });
  }
  if (t2Listener === false) {
    t2.addEventListener("transitionend", e => {
      t2Listener = true;
      t3.classList.add("fill");
    });
  }
  if (t3Listener === false) {
    t3.addEventListener("transitionend", e => {
      t3Listener = true;
      t1.classList.remove("fill");
      t2.classList.remove("fill");
      t3.classList.remove("fill");
      setTimeout(() => {
        animateText();
      }, 4000);
    });
  }
}

function openNav() {
  document.querySelector("#sideMenu").style.width = "100%";
}

function closeMenu() {
  document.querySelector("#sideMenu").style.width = "0";
}
