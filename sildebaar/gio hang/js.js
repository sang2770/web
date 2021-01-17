let giagoc=0;
let thue=0;
let res=0;
function add(id, name, gia)
{
    let check=document.getElementsByClassName(id);
    giagoc+=gia;
    thue=gia/100*10;
    res+=giagoc+thue;
    document.getElementById("giagoc").innerHTML=giagoc;
    document.getElementById("thue").innerHTML=thue;
    document.getElementById("res").innerHTML=res;
    if(check.length==0)
    {
        // let html =document.getElementsByClassName(id);
        let html=document.createElement("h1");
        html.className=id;
        html.innerHTML+="<p>"+name+"</p>";
        html.innerHTML+="<p>"+gia+"</p>";
        document.getElementById("list").appendChild(html);
    }
}