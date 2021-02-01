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
    $(".nutdong,.xam").click(function (e) { 
        e.preventDefault();
        $(".noidung").removeClass('new');
        $(".xam").removeClass("new1");
    });
    $(".nut1").click(function (e) { 
        e.preventDefault();
        //xu li class
        $(".noidung1").addClass("traisangphai");
        $(".xam").addClass("new1");
    });
    $(".nutdong1,.xam").click(function (e) { 
        e.preventDefault();
        $(".noidung1").removeClass('traisangphai');
        $(".xam").removeClass("new1");
    });
    $(".nut2").click(function (e) { 
        e.preventDefault();
        //xu li class
        $(".noidung2").addClass("xoay");
        $(".xam").addClass("new1");
    });
    $(".nutdong2,.xam").click(function (e) { 
        e.preventDefault();
        $(".noidung2").removeClass('xoay');
        $(".xam").removeClass("new1");
    });
});