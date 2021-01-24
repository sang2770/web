$(function () {
    $("html, body").animate({scrollTop:0}, 1400);
    $(".nen").addClass("new");
    let thongbao=setInterval(function(){
        $(".nen").removeClass("new");
        clearInterval(thongbao);
    },7000);
    $(".nen").click(function (e) { 
        e.preventDefault();
        $(".nen").removeClass("new");
    });
    $(".menu ul li:nth-child(1)").on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop:$(".chapter1").offset().top-80}, 1000);
    });
});