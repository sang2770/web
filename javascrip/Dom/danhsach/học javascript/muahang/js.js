let hanghoa={
    data:[],
    them:function(ten, gia, mau,ma, anh)
    {
        let item={
            ten:ten,
            gia:gia,
            mau:mau,
            ma:ma,
            sl:0,
            exist:0,
            anh:anh,
            vitri:0
        }
        this.data.push(item);
    },
    show:function()
    {
        let list=this.data;
        let a=document.getElementById("bang");
        a.innerHTML="<tr><th>Tên</th><th>Giá</th><th>Màu Sắc</th><th>Mã Hàng</th><th>Tùy Chọn</th></tr>";
        for(let i=0;i<list.length;i++)
        a.innerHTML+="<tr><th>"+" <img src="+list[i].anh+">"+list[i].ten+"</th><th>"+list[i].gia+"</th><th>"+list[i].mau+"</th><th>"+list[i].ma+"</th><th><button onclick='them("+i+")'>Mua</button><button onclick='ban("+i+")'>Bán</button></th></tr>";
    },
    sua:function()
    {
        
    },
    xoa:function()
    {
        
    }
}
window.onload=function(){
    hanghoa.them("Quần",80000,"Đen", 1, "1.jpg");
    hanghoa.them("Áo",70000,"Đen", 2, "2.jpg");
    hanghoa.them("Váy",90000,"Đen", 3, "3.jpg");
    hanghoa.them("Mũ",100000,"Đen", 4, "4.jpg");
    hanghoa.them("Giày",50000,"Đen",5, "5.jpg");
    hanghoa.show();
}
let sum=0;
function them(id){
    let list=hanghoa.data;
    sum+=list[id].gia;
    list[id].sl++;
    list[id].exist++;
    // alert(sum);
    let a=document.createElement("h2");
    a.innerHTML=list[id].sl;
    let b=document.createElement("h2");
    b.innerHTML=list[id].ten;
    if(list[id].exist==1)
    {
        document.getElementById("ten").appendChild(b);
        document.getElementById("soluong").appendChild(a);
        list[id].vitri=document.querySelectorAll("#ten h2").length;
        // console.log(document.querySelectorAll("#ten h2").length);
    }
    else
    {
        let d=document.querySelectorAll("#soluong h2")[list[id].vitri-1];
        d.innerHTML=list[id].sl;
    }
    document.getElementById("sum").innerText=sum;

}
function ban(id){
    let list=hanghoa.data;
    if(list[id].exist==0)
    {
        return 0;
    }
    sum-=list[id].gia;
    list[id].sl--;
    list[id].exist--;
    // alert(sum);
    console.log(list[id].exist);
    if(list[id].exist==0)
    {
        let b=document.getElementById("ten");
        let a=document.getElementById("soluong");
        b.removeChild(document.querySelectorAll("#ten h2")[list[id].vitri-1]);
        a.removeChild(document.querySelectorAll("#soluong h2")[list[id].vitri-1]);
    }
    else
    {
        let d=document.querySelectorAll("#soluong h2")[list[id].vitri-1];
        d.innerHTML=list[id].sl;
    }
    document.getElementById("sum").innerText=sum;

}

