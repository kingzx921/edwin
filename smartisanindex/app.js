/**
 * Created by Administrator on 2016/7/11.
 */
$(function () {
    var pathName = window.location.pathname;
    $(document).ready(function () {
        $(".header .nav_main li a").each(function (index, ele) {
            var ele = $(ele);
            if (ele.attr('href') == pathName) {
                ele.addClass("active");
            }
        })
    })
    var panel = $(".sub_nav_panel");
    var goods = $(".goods_panel");
    $(".mobile_toggle_nav").click(function () {
        if (panel.hasClass("sub_nav_panel_open")){
            panel.removeClass("sub_nav_panel_open");
            goods.removeClass("goods_panel_open")
        }else{
            panel.addClass("sub_nav_panel_open");
            goods.addClass("goods_panel_open")
        }

    })

    $(".bg").mouseenter(function () {
        var dX = $(this).offset().left;
        var dY = $(this).offset().top;
        var boxWidth = $(this).outerWidth();
        var boxHeight = $(this).outerHeight();
        $(this).addClass("transform3D");
        $(".transform3D").mousemove(function (event) {
            var mouseX = event.pageX - dX;
            var mouseY = event.pageY - dY;
            var X;
            var Y;
            if (mouseX > boxWidth / 2) {
                X = mouseX - boxWidth / 2;
            } else {
                X = mouseX - boxWidth / 2;
            }
            if (mouseY > boxHeight / 2) {
                Y = boxHeight / 2 - mouseY;
            } else {
                Y = boxHeight / 2 - mouseY;
            }
            $(".transform3D").css({
                "-webkit-transform": "rotateY(" + X / 190 + "deg) " + "rotateX(" + Y / 80 + "deg)"
            });
            $(".shadow").css({
                "transform": "translate3d(" + -X / 9 + "px," + Y / 6 + "px, 0)"
            });

            // console.log(X + "," + Y);
        });
    });
    $(".bg").mouseleave(function () {
        $(this).removeClass("transform3D");
        $(this).css({
            "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
        });
        $(".shadow").css({
            "transform": "translate3d(0,0,0)"
        })
    });
    // $(window).scroll(function () {
    //     if ($(window).scrollTop()>600){
    //         $(".back_top").slideUp(500);
    //     }
    //     else{
    //         $(".back_top").slideDown(500);
    //     }
    // });
    // $(".back_top").click(function () {
    //     $('body,html').animate({scrollTop:0},300);
    //     return false;
    // })
    $(window).scroll(function () {
        if ($(window).scrollTop()>600){
            $(".back_top").addClass("active");
        }
        else{
            $(".back_top").removeClass("active");
        }
    });
    $(".back_top").click(function () {
        $('body,html').animate({scrollTop:0},300);
        return false;
    })
});