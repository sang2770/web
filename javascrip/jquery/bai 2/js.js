$(function () {
    //cho tat ca noi dung thu lại
    $(".noidung").slideUp();
    // chọn thẻ h3
    $(".khoi h3").click(function (e) { 
        e.preventDefault();
        console.log("da click");
        // $(this).next().slideDown();
        // $(".noidung").slideUp();
        $(this).next().slideToggle();// gộp của slidedown và slide up
        // $(this).addClass('xanh');//them class\
        $(this).toggleClass('xanh'); //cả thêm cả xóa class

    });

});