/*
Script for the Current Year in the Copyright in the Footer
https://www.w3schools.com/js/js_date_methods.asp
*/
let d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

/* Script for Animated Petals
The animation starts when the start button is clicked
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/


// Function for Start Animation

// Declaration of Variables
/*
let smallSize = document.getElementsByClassName("petals.img");
let bigSize = document.getElementsByClassName("petals-img.zoom-in");
let fiveSeconds = setInterval(startAnimation, 3000);
*/
document.getElementById("start").addEventListener("click", startAnimation);

let myPetals = document.getElementById("petals");
let petalsWidth = myPetals.clientWidth;
//let smallSize = myPetals.style.width("100px");
/*
function startAnimation() {
    alert("Hello Cruella!");
    myPetals.style.width = "80%";
}
*/
/*
function startAnimation() {
    document.getElementsByClassName("petals-img").style.transitionDuration = "1s";
    //alert("Hello Cruella!");
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

  function myFunction() {
    document.getElementById("petals").style.transitionDuration = "1s";
  }

