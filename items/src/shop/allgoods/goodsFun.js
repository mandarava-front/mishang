$(function() {
    $(".touch").click(() => {
        $(".shadow").css("display", "block")
        $(".side").css({ "visibility": "visible", "transform": "translateX(0%)" })
        $(".shadow").click(() => {
            $(".shadow").css("display", "none")
            $(".side").css({ "transform": "translateX(-100%)" }).delay(600).css("visibility", "hidden")
        })
    })
    $(".side1>ul>li").click((e) => {
        var th = $(this)
        var str = ''
        $(".side2").css({ "visibility": "visible", "transform": "translateX(66%)" })
        $(".shadow").click(() => {
            $(".shadow").css("display", "none")
            $(".side2").css({ "transform": "translateX(-34%)" }).delay(600).css("visibility", "hidden")
        })

    })
    $(".info button").click(function() {

        $(".shadow").css("display", "block")
        $(".addcar").css("bottom", 0)
        $(".shadow").click(() => {
            $(".shadow").css("display", "none")
            $(".addcar").css("bottom", "-510px")
        })
        $(".close").click(function() {
            $(".shadow").css("display", "none")
            $(".addcar").css("bottom", "-512px")
        })
    })

})