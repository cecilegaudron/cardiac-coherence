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

function bigSize() {
    myPetals.style.width = "350px";
}

function smallSize() {
    myPetals.style.width = "50px";
}

function startAnimation() {
    bigSize.apply();
}

    //document.getElementById("petals").style.width = "300px";
    /*if (petalsWidth >= 350) {
        myPetals.style.width = "100px";
        myPetals.style.transitionDuration = "5s";
        alert("Taille mini atteinte");
    } else {
        myPetals.style.width = "350px";
        style.transitionDuration = "5s";
        alert("Taille max atteinte");
    } */

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
