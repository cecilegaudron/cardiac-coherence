// Launch JavaScript when HTML document is fully loaded
$(document).ready(function() {

    /*
    Script for the Current Year in the Copyright in the Footer
    https://www.w3schools.com/js/js_date_methods.asp
    */
    let d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();

    // jQuery code for petals animation
    $("#start").click(function() {
	    $("#petals").css("animation-play-state", "running").css();
    });

    $("#stop").click(function() {
	    $("#petals").css("animation-play-state", "paused");
    });

});