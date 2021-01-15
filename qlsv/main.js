let dssv= new dssv();
let validate=new validation();

function ID (id) {
	let element=document.getElementById("id");
	return element;
	// body... 
}//thay the getElenmentid
function Themsv () {
	//lay du lieu truoc
	let masv=document.getElementById("masv").value;
	let hoten=document.getElementById("hoten").value;
	let email=document.getElementById("email").value;
	let cmnd=document.getElementById("cmnd").value;
	let sdt=document.getElementById("sdt").value;

	let sinhvien=new sinhvien(masv, hoten,email, sdt, cmnd);
	dssv.themsinhvien(sinhvien);
	console.log(dssv);

}

function kiemtrarong (ID, value) {

	
	if(validation.kiemtrarong(masv)==true)
	{
		ID(ID).style.borderColor = 'red';
		return true;
	}
	else
	{
		ID(ID).style.borderColor = 'blue';
		return false;
	}


	// body... 
}