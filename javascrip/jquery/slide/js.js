$(function () {

  // let time=setInterval(function(){
  //   $(".right").trigger("click");
  // }, 5000);
  
    $(".right").click(function (e) { 
      // clearInterval(time);
      let sau=$(".active").next();
        e.preventDefault();
        let vitri=$(".xanh").index()+1;
        if(sau.length==0)
        {
          vitri=0;
        }
        $("li").removeClass("xanh");
        $("li:nth-child("+(vitri+1)+")").addClass("xanh");

        if(sau.length==0)
        {
          $(".active").addClass("hiddenleft").one("webkitAnimationEnd", function (e) {
            $(".active").removeClass("hiddenleft");
          });
          $(".slide:first-child").addClass("Vaophai").one("webkitAnimationEnd", function (e) {
            $(".active").removeClass("active");
            $(".Vaophai").addClass("active").removeClass("Vaophai");
          });
        }
        else
        {
        $(".active").addClass("hiddenleft").one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("hiddenleft");
        });
        sau.addClass("Vaophai").one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".Vaophai").addClass("active").removeClass("Vaophai");
        });
      }
    });
    $(".left").click(function (e) { 
      e.preventDefault();
      let truoc=$(".active").prev();
      if(truoc.length == 0)
      {
        $(".active").addClass("hiddenright").one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("hiddenright");
        });
        $(".slide:last-child").addClass("Vaotrai").one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".Vaotrai").addClass("active").removeClass("Vaotrai");
        });

      }
      else{
        $(".active").addClass("hiddenright").one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("hiddenright");
        });
        truoc.addClass("Vaotrai").one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".Vaotrai").addClass("active").removeClass("Vaotrai");
        });
      }

    });
    $("li").click(function (e) { 
      e.preventDefault();
      $("li").removeClass("xanh");
      $(this).addClass("xanh");
      $(".active").addClass("hiddenright").one("webkitAnimationEnd", function (e) {
        $(".active").removeClass("hiddenright");
      });
      let vitri=$(this).index()+1;
      $(".slide:nth-child("+(vitri)+")").addClass("Vaotrai").one("webkitAnimationEnd", function (e) {
        $(".active").removeClass("active");
        $(".Vaotrai").addClass("active").removeClass("Vaotrai");
      });
    });
});