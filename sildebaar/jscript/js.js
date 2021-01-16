let total =0;
let tax=0;
let pay=0;

function add_cart(id, name, price)
{
  let check=document.getElementsByClassName(id);
  if(check.length ==0)
  {
    
      total+= price;
      tax=total/100*10;
      pay=total+tax;
      document.getElementById("total").innerHTML=total;
      document.getElementById("tax").innerHTML=tax;
      document.getElementById("payment").innerHTML=pay;
      let html=document.createElement('div');
      html.className=id;
      html.innerHTML+='<p>'+name +"</p>";
      html.innerHTML+='<p>'+price +"</p>";
      document.getElementById("list-order").appendChild(html);
  }
    
}
// function remove_item(id, price)
// {
//   let check=document.getElementsByClassName(id);
//   if(check.length>0)
//   {
//     total-=price;
//     tax=total/100*10;
//     pay=total+tax;
//     document.getElementById("total").innerHTML=total;
//     document.getElementById("tax").innerHTML=tax;
//     document.getElementById("payment").innerHTML=pay;

//   }

// }