// $(document).ready(function () {
//      //kiem tra tinh san sang tạo thẻ  mở đầu
//     //code
//     alert("thong bao da chay!");
    
// })
$(function()
{
    $('.dki').animate({ opacity:0, marginLeft:-100});
  
    $('.nut2').click(function (event) { 
        $('.dangnhap').animate({ opacity:0, marginLeft:-100});
        $('.dki').animate({ opacity:1, marginLeft:0});
    });
    $('.nutso1').click(function (event) { 
        $('.dangnhap').animate({ opacity:1, marginLeft:0});
        $('.dki').animate({ opacity:0, marginLeft:-100});
    });
    $('.anime').click(function (event) { 
        // e.preventDefault();
        $('.dangnhap').animate({height:1000});
        alert("Nguyen van sang");

        
    });

})