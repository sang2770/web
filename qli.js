var myAPI="http://localhost:3000/Sinhvien";
//Getsinhvien
function Start()
{
    getsv(rendersv);
    ready();

}

function getsv(callBack)
{
    fetch(myAPI)
        .then((response)=>{
            return response.json();
         })
         .then(callBack)
}
function rendersv(item)
{
    var table=document.querySelector("#table");
    console.log(table);
    console.log(item);
    var html=item.map((item, index)=>{

                return  `<tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.class}</td>
                    <td>${item.Masv}</td>
                    <td>${item.Gioitinh}</td>
                    <td>${item.Quequan}</td>
                    <td><button onclick=remove(${item.id})>xóa</button></td>
                </tr>`
            })
            .join('');
    table.innerHTML+=html;
}
function createsv(data)
{
    var options={
        method:"POST", 
        // cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(data)
    }
    fetch(myAPI, options)
        .then((response)=>{
            return response.json();
        })
        .then(()=>{})
}
function remove(id)
{
    var options={
        method:"DELETE", 
        // cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(myAPI+`/${id}`, options)
        .then((response)=>{
            return response.json();
        })
        .then(()=>{})
}
function Updatesv(data , id)
{
    var options={
        method:"PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch(myAPI+`/${id}`, options)
    .then((response)=>{
        return response.json();
    })
    .then(()=>{})

}
function ready()
{
    var create=document.querySelector(".Create");
    console.log(create);
    var update= document.querySelector(".Update");
    console.log(update);
    create.addEventListener("click", ()=>{
        var id=document.querySelector("#id").value;
        var name=document.querySelector("#Name").value;
        var lop=document.querySelector("#Class").value;
        var gioitinh=document.querySelector("#Gioitinh").value;
        var quequan=document.querySelector("#Quequan").value;
        var masv=document.querySelector("#Masv").value;        
        var options={
            name: name,
            class: lop,
            Masv: masv,
            Gioitinh: gioitinh,
            Quequan: quequan
        }
        console.log(options);
        createsv(options);
    })
    update.addEventListener("click", ()=>{
        var id=document.querySelector("#id").value;
        var name=document.querySelector("#Name").value;
        var lop=document.querySelector("#Class").value;
        var gioitinh=document.querySelector("#Gioitinh").value;
        var quequan=document.querySelector("#Quequan").value;
        var masv=document.querySelector("#Masv").value;        
        var options={
            name: name,
            class: lop,
            Masv: masv,
            Gioitinh: gioitinh,
            Quequan: quequan
        }
        console.log(options);
        Updatesv(options, id);
    })
}
Start();