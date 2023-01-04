/*
Script for the Current Year in the Copyright in the Footer
https://www.w3schools.com/js/js_date_methods.asp
*/
let d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

/* 
Script for Animated Petals
*/
// Function for Start Animation

document.getElementById("start").addEventListener("click", startAnimation);

let myPetals = document.getElementById("petals");
let petalsWidth = myPetals.clientWidth;
const bigSize = "350px";
const smallSize = "50px";

function goToBigSize() {
    myPetals.style.width = "350px";
}

function goToSmallSize() {
    myPetals.style.width = "50px";
}

function startAnimation() {
    goToBigSize.apply();
}

function animationLoop() {
    if (petalsWidth < bigSize) {
        //goToBigSize.apply();
        alert("go to 350");
    } else {
        //goToSmallSize.apply();
        alert(" go to 50!");
    }
}

/* Script for Stopping Animated Petals
https://www.w3schools.com/js/js_timing.asp
*/
document.getElementById("stop").addEventListener("click", stopAnimation);

function stopAnimation() {
    //alert("Cia Cruella!");
    document.getElementById("petals").style.width = "100px";
  }
/* SCRIPT OKAY WITH MOUSE OVER 
  function myFunction() {
    document.getElementById("petals").style.transitionDuration = "1s";
  }
*/
