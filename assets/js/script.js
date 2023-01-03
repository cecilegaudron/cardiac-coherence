/*
Script for the Current Year in the Copyright in the Footer
https://www.w3schools.com/js/js_date_methods.asp
*/
let d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

/*
Script for Animations to Numbers. OnMouseOver Rounds are Bigger
https://www.w3schools.com/jsref/event_onmouseover.asp


function bigRound(x) {
    x.style.height = "80%";
    x.style.width = "80%";
}

function normalRound(x) {
    x.style.height = "60%";
    x.style.width = "60%";
    x.style.display = false;
    document.getElementsById('first-hide') = style.display('False');
}
*/

/* Script for Animations to Numbers

function revealFirstText() {
    let x = document.getElementsById("first-hide");
    x.style.height = "80%";
}

    if (firstText.style.display === "none") {
        firstText.style.display = "block";
    } else {
        firstText.display = "none";
    }
}
*/

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
function startAnimation() {
    //alert("Hello Cruella!");
    //document.getElementById("petals").style.width = "300px";
    if (petalsWidth >= 350) {
        myPetals.style.width = "100px";
        alert("Taille mini atteinte");
    } else {
        myPetals.style.width = "350px";
        alert("Taille max atteinte");
    }
  }

/* Script for Stopping Animated Petals
https://www.w3schools.com/js/js_timing.asp
*/
document.getElementById("stop").addEventListener("click", stopAnimation);

function stopAnimation() {
    //clearInterval();
    //alert("Cia Cruella!");
    document.getElementById("petals").style.width = "100px";
  }

