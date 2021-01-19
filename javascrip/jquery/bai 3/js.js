$(function() {
    console.log("Code dang chay!");
    //tinh vi tri
    // console.log($(".chapter1").offset().top)
    $('.menu ul li:nth-child(1) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(".chapter1").offset().top}, 1400, "easeOutExpo");
    });
    $('.menu ul li:nth-child(2) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(".chapter2").offset().top}, 1400, "easeOutBounce");
    });
    $('.menu ul li:nth-child(3) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(".chapter3").offset().top}, 1400, "easeOutQuint");
    });
    $('.menu ul li:nth-child(4) a').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(".chapter4").offset().top}, 1400);
    });
    // $('.menu ul li:nth-child(5) a').on('click', function (event) {
    //     event.preventDefault();
    //     $('html,body').animate({scrollTop:0}, 1400);
    // });
    $('.menu ul li:nth-child(5) a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0}, 1400);
    });
});
