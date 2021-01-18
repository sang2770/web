$(function () {
    $(".noidung").slideUp();
    $(".khoi h3").click(function(e)
    {
        console.log("Da clidk");
        $(this).next().slideToggle();
        $(this).addClass('xanh');
    })

});