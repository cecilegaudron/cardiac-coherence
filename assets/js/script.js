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
//let petalsWidth = myPetals.clientWidth;
//let bigSize = setTimeout(goToBigSize.apply(), 2000);
//let smallSize = setTimeout(goToSmallSize.apply(), 2000);

// Function to Go to the Big Size
function goToBigSize() {
    myPetals.style.width = "350px";
    console.log("fnction go to BIG size OKAY");
}

// Function to Go to the Small Size
function goToSmallSize() {
    myPetals.style.width = "50px";
    console.log("fnction go to SMALL size OKAY");
}

// Function to Start the Animation with Big Size - Wait - Go to Small Size
function startAnimation() {
    goToBigSize.apply(); 
    console.log("gotobigsize OKAY");

    setTimeout(goToSmallSize, 8000); 
    console.log("gotosmallsize OKAY");

    //setInterval(goToBigSize.apply(), 8000); 
    //console.log("go to big size again OKAY");

}


/* Script for Stopping Animated Petals
https://www.w3schools.com/js/js_timing.asp
*/
document.getElementById("stop").addEventListener("click", stopAnimation);

function stopAnimation() {
    console.log("Stop the animation");
    clearInterval();
  }