$(document).ready(function () {
        $(".thongbao").addClass("hienra");
    // });
       let docu=setInterval(function()
       {
        $(".thongbao").addClass("hienra");
        clearInterval(docu);
       }, 2000);
       $(".close").click(function (e) { 
           e.preventDefault();
           $(".thongbao").removeClass("hienra");
       });
       $(".banner").click(function (e) { 
           e.preventDefault();
           $(".thongbao").addClass("hienra");
       });
});