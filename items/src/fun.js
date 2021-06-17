import $ from "jquery"
$(function() {
    $(window).bind("scroll", function() {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        console.log(sTop)
        if (sTop >= 80) {
            $(".navs").addClass("navbar-fixed-top")
        } else {
            $(".navs").removeClass("navbar-fixed-top")

        }
    })
})