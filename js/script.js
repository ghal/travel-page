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
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300;
        var header = document.querySelector("#header");
        var left_sidebar = document.querySelector(".menubar");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
            classie.add(left_sidebar, "push_up");
        } else {
            if (classie.has(header, "smaller") && classie.has(left_sidebar, "push_up")) {
                classie.remove(header, "smaller");
                classie.remove(left_sidebar, "push_up");
            }
        }
    });
}
window.onload = init();