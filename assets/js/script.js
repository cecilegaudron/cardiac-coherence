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
*/
function revealFirstText() {
    let x = document.getElementsById("first-hide");
    x.style.height = "80%";
}
    /*
    if (firstText.style.display === "none") {
        firstText.style.display = "block";
    } else {
        firstText.display = "none";
    }
}
*/