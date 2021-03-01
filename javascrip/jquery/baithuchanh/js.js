$(function () {
    $(".noidung h3").slideUp();
    $(".noidung h1").click(function (e) { 
        e.preventDefault();
        $(this).next().next().slideToggle();
    });
    console.log(screen.height)
    $(".menu").addClass("bienmat");
    $("header .nut").click(function()
    {
        $(".menu").toggleClass("bienmat");
    })
    // let i=setInterval(() => {
    //     $(".phai").trigger("click");
    // }, 3000);
    $(".phai").click(function (e) { 
        // clearInterval(i);
        let sau=$(".active").next();
        console.log(sau.length);
        
        let vitri=$(".xanh").index()+1;
        console.log(vitri);
        if(sau.length==0)
        {
          vitri=0;
        }
        $(".check h3").removeClass("xanh");
        $(".check h3:nth-child("+(vitri+1)+")").addClass("xanh");
        if(sau.length==0)
        {
         $(".active").addClass("mattrai").one("webkitAnimationEnd", function (e) {
             $(".mattrai").removeClass("mattrai");
         });
         $(".slide:first-child").addClass("vaophai").one("webkitAnimationEnd", function (e) {
            $(".active").removeClass("active");
            $(".vaophai").addClass("active").removeClass("vaophai");

        });
        }
        else{
        $(".active").addClass("mattrai").one("webkitAnimationEnd", function (e) {
            $(".mattrai").removeClass("mattrai");
        });
        $(sau).addClass("vaophai").one("webkitAnimationEnd", function (e) {
           $(".active").removeClass("active");
           $(".vaophai").addClass("active").removeClass("vaophai");

       });
         }
    });

    $(".trai").click(function (e) { 
        e.preventDefault();
        let truoc=$(".active").prev();
        console.log(truoc.length);
        if(truoc.length==0)
        {
         $(".active").addClass("matphai").one("webkitAnimationEnd", function (e) {
             $(".matphai").removeClass("matphai");
         });
         $(".slide:last-child").addClass("vaotrai").one("webkitAnimationEnd", function (e) {
            $(".active").removeClass("active");
            $(".vaotrai").addClass("active").removeClass("vaotrai");

        });
        }
        else{
        $(".active").addClass("matphai").one("webkitAnimationEnd", function (e) {
            $(".matphai").removeClass("matphai");
        });
        $(truoc).addClass("vaotrai").one("webkitAnimationEnd", function (e) {
           $(".active").removeClass("active");
           $(".vaotrai").addClass("active").removeClass("vaotrai");

       });
        }
    });
    $(".check h3").click(function (e) { 
        e.preventDefault();
        $("h3").removeClass("xanh");
        $(this).addClass("xanh");
        let vt=$(this).index()+1;
        $(".active").addClass("mattrai").one("webkitAnimationEnd", function (e) {
            $(".mattrai").removeClass("mattrai");
        });
        $(".slide:nth-child("+(vt)+")").addClass("vaophai").one("webkitAnimationEnd", function (e) {
           $(".active").removeClass("active");
           $(".vaophai").addClass("active").removeClass("vaophai");

       });

    });
    // $("span").click(function (event) { 
    //     // e.preventDefault();
    //     event.stopPropagation();
    // });
});