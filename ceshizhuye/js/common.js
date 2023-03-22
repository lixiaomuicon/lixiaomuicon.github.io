/* AB模版网 做最好的织梦整站模板下载网站 Www.AdminBuy.Cn */
/* QQ：9490489 */
/* 仿站：Fang.AdminBuy.Cn */
/* 素材：Sc.AdminBuy.Cn */
/* js特效：Js.AdminBuy.Cn */
$(function(){

    //导航
        $(".nav li").each(function(index){
            setTimeout(function(){
                $(".nav li").eq(index).show().addClass("animated fadeInRightBig")
            },30*index)
        });

        var hh=$(window).height();
        $(".banner .slides li").css('height',hh+'px');


        $(".banner .down").click(function () {
            var hh=$(window).height();
            console.log(hh);
            $('body,html').animate({
                    scrollTop: hh
                },
                500);
        });


        //页面加载动画wow.js
        new WOW().init();




});








