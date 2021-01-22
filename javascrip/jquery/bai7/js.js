$(function () {
    $(".nut").click(function (e) { 
        e.preventDefault();
        $(".menutrai").toggleClass("hienra");
        $(".contaner").toggleClass("dichtrai");
    });
});