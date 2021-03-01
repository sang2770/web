
let list={
    data:[],
    showsv:function()
    {
        let listsv=this.data;
        document.getElementById("sv").innerHTML="<tr><td>Mã SV</td><td>Tên Sinh Viên</td><td>Tuổi</td><td>Lớp</td></tr>";
        // let a=document.createElement("tr");
        // a.innerHTML="<td>"+listsv[i].id+"</td>"+"<td>"+listsv[i].ten+"</td>"+"<td>"+listsv[i].tuoi+"</td>"+listsv[i].lop+"</td>";
        // document.getElementById("sv").appendChild(a);
        for(let i=0;i<listsv.length;i++)
        {
            document.getElementById("sv").innerHTML+="<tr>"+"<td>"+listsv[i].id+"</td>"+"<td>"+listsv[i].ten+"</td>"+"<td>"+listsv[i].tuoi+"</td>"+"<td>"+listsv[i].lop+"</td>"+"</tr>";
        }

    },
    add:function(id, ten, tuoi, lop)
    {
        let item={
            id:id,
            ten:ten,
            tuoi:tuoi,
            lop:lop
        }
        this.data.push(item);
    },
    remove:function(id){
        let listsv=this.data;
        // alert(id);
        for(let i=0;i<listsv.length;i++)
        if(listsv[i].id==id)
        listsv.splice(i,1);
        this.showsv();
    }
    , Edit:function(id, ten, tuoi,lop)
    {
        let listsv=this.data;
        for(let i=0;i<listsv.length;i++)
        if(id==listsv[i].id)
        {
            alert(listsv[i].id);
            listsv[i].ten=ten;
            listsv[i].tuoi=tuoi;
            listsv[i].lop=lop;
        }
        this.showsv();
    },
    Search(id){
        let listsv=this.data;
        document.getElementById("sv").innerHTML="<tr><td>Mã SV</td><td>Tên Sinh Viên</td><td>Tuổi</td><td>Lớp</td></tr>";
        for(let i=0;i<this.data.length;i++)
        if(listsv[i].id==id)
        {
            document.getElementById("sv").innerHTML+="<tr>"+"<td>"+listsv[i].id+"</td>"+"<td>"+listsv[i].ten+"</td>"+"<td>"+listsv[i].tuoi+"</td>"+"<td>"+listsv[i].lop+"</td>"+"</tr>";
        
        }
    }
}
window.onload=function()
{
list.add(1, "sang", 19, "cntt1");
list.add(2, "Xuan", 19, "cntt2");
list.add(3, "Mai", 20, "cntt4");
list.add(4, "Ha", 19, "cntt3");
list.showsv();
let input=document.getElementById("search");
input.addEventListener("keyup",function()
{
    if(input.value=="")
    list.showsv();
})

}  

function them()
{
let id=document.getElementById("masv").value;
let ten=document.getElementById("ten").value;
let tuoi=document.getElementById("tuoi").value;
let lop=document.getElementById("lop").value;
console.log(id+" "+ten+" "+tuoi+" "+lop);
list.add(id, ten, tuoi, lop);
let dem=list.data.length-1;
list.showsv(dem);
document.getElementById("masv").value="";
document.getElementById("ten").value="";
document.getElementById("tuoi").value="";
document.getElementById("lop").value="";
}
function Xoa()
{
    let id=document.getElementById("masv").value;
    list.remove(id);
    document.getElementById("masv").value="";
    document.getElementById("ten").value="";
    document.getElementById("tuoi").value="";
    document.getElementById("lop").value="";

}
function edit()
{
    let id=document.getElementById("masv").value;
    let ten=document.getElementById("ten").value;
    let tuoi=document.getElementById("tuoi").value;
    let lop=document.getElementById("lop").value;
    list.Edit(id, ten,tuoi, lop);
}
function tim()
{
    let id=document.getElementById("search").value;
    list.Search(id);
    alert("ok");
}




