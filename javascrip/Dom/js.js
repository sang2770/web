function ktraten()
{
    let a=document.getElementById("ten").innerText;
    // a.style.color="red";
    // a.style.background="yellow";
    alert(a);
    let b=document.createElement("h2");
    b.innerHTML="<p>"+"CNTT1"+"</p>";
    document.getElementById("ten").appendChild(b);
}
function ktratuoi()
{
    let a=document.getElementsByClassName("tuoi");
    a[0].innerHTML+="Hello xin chao tk be 15 tuoi!";
    a[1].innerHTML+="Hello xin chao em!";
}
function ktrathe()
{
    let a=document.getElementsByTagName("li");
    document.getElementById("2").innerText+=a[0].innerHTML;
}