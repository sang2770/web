$(function () {
    $(window).scroll(function () { 
        console.log("dang quan chuot");
        //kiem tra vi tri ddang quan chuot
        // console.log($("html,body").scrollTop());
        var vitri=$("html,body").scrollTop();
        if((vitri>=100)&& (vitri<=400))
        {
            $(".menutren").addClass("tran1");
        }
        else{
            $(".menutren").removeClass("tran1");
        }
        if((vitri>=400)&& (vitri<=500))
        {
            $(".menutren").addClass("tran2");
        }
        else{
            $(".menutren").removeClass("tran2");
        }

        
        
    });
});