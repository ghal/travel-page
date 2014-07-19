/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('html').hide();
$(document).ready(function() {
    $('html').fadeIn("slow");
//    $('body').css("background-image", "url(1.jpg)");
//    //dynamic background changing
//    setInterval(function() {
//        changeBackground();
//    }, 5000);
//    function changeBackground() {
//        var i = Math.random() * (5 - 1) + 1;
//        i = Math.floor(i);
//        $('body').css("background-image", "url(" + i + ".jpg)");
//
//    }
});

//SCROLL RESIZE MENU
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("#header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();