let a=['aaa', 'bb'];
let a1=['a', 'b', 'c'];
a.push("Sang");
a1.pop();
a.splice(1,1,'Sangdz'); //noi bat dau va( so phan tu xoa chen vao);
let a2=a.concat(a1); // nối mảng
let a4=a.slice(1,2); // lay nhieu phan tu


console.log(a);
console.log(a1);
console.log(a2);
console.log(a4);