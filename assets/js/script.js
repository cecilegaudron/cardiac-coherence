/*
Script for the Current Year in the Copyright in the Footer
https://www.w3schools.com/js/js_date_methods.asp
*/
let d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

/* 
Script for Animated Petals
Script inspirated from the Timing Methods on W3Schools.com
https://www.w3schools.com/js/js_timing.asp
*/
// Function for Start Animation

document.getElementById("start").addEventListener("click", startAnimation);

let myPetals = document.getElementById("petals");
let animation;
let loop;

// Function to Go to the Big Size
function goToBigSize() {
    myPetals.style.width = "350px";
}

// Function to Go to the Small Size
function goToSmallSize() {
    myPetals.style.width = "150px";
}

// Function to Repeat the Animation During 5 Minutes
function animationLoop() {
    setInterval(startAnimation, 5000); 
}

// Function to Start the Animation with Big Size - Wait - Go to Small Size
function startAnimation() {
    goToBigSize.apply(); 

    animation = setTimeout(goToSmallSize, 5000); 

    loop = setInterval(animationLoop, 5000);
}

// Function to Stop the Animation
document.getElementById("stop").addEventListener("click", stopAnimation);

function stopAnimation() {
    clearTimeout(animation);
    clearInterval(loop);
  }

  // jQuery code for petals animation
$("start").click(function(){
	startAnimation();
});

$("stop").click(function(){
	stopAnimation();
});
