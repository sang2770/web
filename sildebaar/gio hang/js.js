let giachinh=0;
let thue=0;
let res=0;
function add(id, name, gia)
{
    let check=document.getElementsByClassName(id);
    giachinh+=gia;
    thue=giachinh/100*10;
    res=giachinh+thue;
    document.getElementById("giagoc").innerHTML=giachinh;
    document.getElementById("thue").innerHTML=thue;
    document.getElementById("res").innerHTML=res;
    if(check.length==0)
    {
        let html=document.createElement("h1");
        html.className=id;
        html.innerHTML+="<p>"+name+"</p>";
        html.innerHTML+="<p>"+gia+"</p>";
        document.getElementById("list").appendChild(html);
    }
}
function remove(id, gia)
{
    let check=document.getElementsByClassName(id);
    if(check.length>0)
    {
        giachinh-=gia;
        thue-=gia/100*10;
        res=res-gia-thue;
        
        document.getElementById("giagoc").innerHTML=giachinh;
        document.getElementById("thue").innerHTML=thue;
        document.getElementById("res").innerHTML=res;

    }
}