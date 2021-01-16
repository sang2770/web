var total = 0;
var tax = 0;
var pay = 0;

function add_cart(id, name, price) {
  var check = document.getElementsByClassName(id);
  

    total = total + price;
    tax = total/100 * 10;
    pay = total + tax;
    
    document.getElementById('total').innerHTML = total;
    document.getElementById('tax').innerHTML = tax;
    document.getElementById('payment').innerHTML = pay;
    if(check.length == 0){
    var html = document.createElement('div');
        html.className = id;
        html.innerHTML += '<p>'+name+'</p>';
        html.innerHTML += '<p>'+price+'</p>';
    
    document.getElementById('list-order').appendChild(html);
  }
}
// }

function remove_item(id, price) {
  var check = document.getElementsByClassName(id);
  
  if(check.length > 0){
    total = total - price;
    tax = total / 100 * 10;
    pay = total + tax;
    
    document.getElementById('total').innerHTML = total;
    document.getElementById('tax').innerHTML = tax;
    document.getElementById('payment').innerHTML = pay;
    
    check[0].remove();
    console.log(check[0]);
  }
}
function them()
{
  let a=document.createElement("P");
  let b=document.createTextNode("ngueyecn van sang");
  a.appendChild(b);
  document.getElementById("text").appendChild(a);

}
