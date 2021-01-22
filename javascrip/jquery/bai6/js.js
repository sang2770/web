$(function () {
    //sau ...giây hiển thị
    
    $(".noidung").addClass("new");
    $(".xam").addClass("new1");

    let thongbao=setInterval(function(){ 
        $(".noidung").removeClass('new');
        $(".xam").removeClass("new1");
        clearInterval(thongbao);
     }, 3000); //3s
    //click để hiển thị
    $(".nut").click(function (e) { 
        e.preventDefault();
        //xu li class
        $(".noidung").addClass("new");
        $(".xam").addClass("new1");
    });
    $(".nutdong, .xam").click(function (e) { 
        e.preventDefault();
        $(".noidung").removeClass('new');
        $(".xam").removeClass("new1");
    });

});