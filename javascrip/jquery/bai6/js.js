$(function () {
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