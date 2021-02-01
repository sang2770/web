$(function () {

    thoigian=setInterval(function(){
        $(".right").trigger("click");
    },3000)
    //code cho nut next
    $(".right").click(function (e) { 
        clearInterval(thoigian);
        e.preventDefault();
        let sau=$(".active").next();
        //xu li nut
        let vitri =$(".xanh").index()+1;
        console.log(vitri);
        console.log($(".nut ul li").length);
        $(".nut ul li").removeClass("xanh")
        if(vitri == $(".nut ul li").length){
            vitri=0;
        }
        $(".nut ul li:nth-child("+(vitri+1)+")").addClass("xanh");
        //xu li slide
        console.log(sau.length);
        if(sau.length == 0)
        {
            $(".active").addClass("hiddenleft").one("webkitAnimationEnd", function (e) {
                $(".hiddenleft").removeClass("hiddenleft");
                
            });
            $(".anh .slide:first-child").addClass("divaophai").one("webkitAnimationEnd", function (e) {
                //bo active
                $(".active").removeClass("active");
                $(".divaophai").addClass("active").removeClass("divaophai");
                
            });

        }
        //ban dau
        else
        {
        $(".active").addClass("hiddenleft").one("webkitAnimationEnd", function (e) {
            $(".hiddenleft").removeClass("hiddenleft");
            
        });
        sau.addClass("divaophai").one("webkitAnimationEnd", function (e) {
            //bo active
            $(".active").removeClass("active");
            $(".divaophai").addClass("active").removeClass("divaophai");
            
        });
        }


    });
    $(".left").click(function (e) { 
        e.preventDefault();
        let vitri =$(".xanh").index()+1;
        $(".nut ul li").removeClass("xanh")
        if(vitri == 1){
            vitri=$(".nut ul li").length+1;
        }
        // console.log(vitri-1);
        $(".nut ul li:nth-child("+(vitri-1)+")").addClass("xanh");
        let truoc=$(".active").prev();
        // console.log(truoc.length)
        if(truoc.length == 1)
        {
            $(".active").addClass("hiddenright").one("webkitAnimationEnd", function (e) {
                $(".hiddenright").removeClass("hiddenright");
                
            });
            truoc.addClass("divaotrai").one("webkitAnimationEnd", function (e) {
            //bo active
            $(".active").removeClass("active");
            $(".divaotrai").addClass("active").removeClass("divaotrai");
            
            });
        }
        else{

            $(".active").addClass("hiddenright").one("webkitAnimationEnd", function (e) {
                $(".hiddenright").removeClass("hiddenright");
                
            });
            $(".anh .slide:last-child").addClass("divaotrai").one("webkitAnimationEnd", function (e) {
            //bo active
            $(".active").removeClass("active");
            $(".divaotrai").addClass("active").removeClass("divaotrai");
            
            });
        }


    });
    $("li").click(function (e) { 
        e.preventDefault();
        $("li").removeClass("xanh")
        $(this).addClass("xanh");
        $(".active").addClass("hiddenright").one("webkitAnimationEnd", function (e) {
        $(".hiddenright").removeClass("hiddenright");
            
        });
        $(this).index()+1;
        $(".anh .slide:nth-child("+($(this).index()+1)+")").addClass("divaotrai").one("webkitAnimationEnd", function (e) {
        //bo active
        $(".active").removeClass("active");
        $(".divaotrai").addClass("active").removeClass("divaotrai");
        
        });
});
});