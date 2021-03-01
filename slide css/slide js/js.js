// window.onload=function()
// {
// let count=0;
// let phai=document.getElementById("nutphai");
// phai.addEventListener("click", function()
// {
//     count++;
//     let a=document.getElementsByClassName("slides");
//     let i=count*-700;
//     a[0].style.marginLeft=i+"px";
// })
// let trai=document.getElementById("nuttrai");
// trai.addEventListener("click", function()
// {
//     count--;
//     let a=document.getElementsByClassName("slides");
//     let i=count*-700;
//     a[0].style.marginLeft=i+"px";
// })
// document.getElementById("nuttrai").classList.add("ok");
// alert(document.getElementById("nuttrai").classList);
// }
function test()
{
    document.getElementsByClassName("test")[0].classList.add("mo");
document.getElementsByClassName("test")[0].addEventListener("animationend", function(){
    console.log("ok");
    document.getElementsByClassName("test")[0].classList.remove("mo");
    document.getElementsByClassName("test")[0].classList.add("mo1");
})
}
window.onload=function()
{

let count=0;
let phai=document.getElementById("nutphai");
let size=document.getElementsByClassName("slide").length;
let a=document.getElementsByClassName("slide");
console.table(size);
phai.addEventListener("click", function()
{
    if(count==size-1)
    {
        a[count].classList.add("mattrai");
        count=0;
        a[count].classList.add("s1");
        a[count].classList.add("vaophai");
        a[count].addEventListener("animationend", function(){
            a[count].classList.remove("vaophai");
            a[size-1].classList.remove("s1");
            a[size-1].classList.remove("mattrai");
        })
    }
    else
    {
    a[count].classList.add("mattrai");
    console.log(count+"after");
    count++;
    a[count].classList.add("vaophai");
    console.log(a[count-1]);
    // a[count].addEventListener("animationend", myend);
    a[count].onanimationend=
    function myend(){
        console.log("2lan");
        a[count-1].classList.remove("s1");
        a[count-1].classList.remove("mattrai");
        a[count].classList.remove("vaophai");
        a[count].classList.add("s1");
    }

    }
})
let trai=document.getElementById("nuttrai");
trai.addEventListener("click", function()
{
    if(count==0)
    {
        a[count].classList.remove("s1");
        count=size-1;
        a[count].classList.add("s1");
    }
    else
    {
    a[count].classList.remove("s1");
    count--;
    a[count].classList.add("s1");
    }
})

// alert(document.getElementsByClassName("slide")[0].classList);
}