var check_phone = /^\(\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}$/;
var check_email = /^([\w-]+(\?\:\.[w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
var check_username = /^[A-Za-z0-9_]{1,20}$/;
var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function checknull(txt) {
    if (txt.value.length == 0)
        return true;
    else
        return false;
}

function isInteger(txt) {
    if ((!isNaN(txt.value)) && (parseInt(txt.value) === Number(txt.value)))
        return true;
    else
        return false;
}

function notCheck(radio) {
    var rt = true;
    for (i = 0; i < radio.length; i++)
        if (radio[i].checked)
            rt = false;
    return rt;
}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}

function validform(frmName) {
    if (checknull(frmName.fullname)) {
        alert(frmName.fullname.name + " must be not null");
        frmName.fullname.focus();
        return;
    }
    if (checknull(frmName.age)) {
        alert(frmName.age.name + " must be not null");
        frmName.age.focus();
        return;
    }
    if (isNaN(frmName.age.value)) {
        alert(frmName.age.name + " must be a number");
        frmName.age.value = "";
        frmName.age.focus();
        return;
    }
    if (!isInteger(frmName.age)) {
        alert(frmName.age.name + " must be an integer number");
        frmName.age.value = "";
        frmName.age.focus();
        return;
    }
    if (eval(frmName.age.value) <= 0 || eval(frmName.age.value) >= 200) {
        alert(frmName.age.name + " must be in (0-200)");
        frmName.age.value = "";
        frmName.age.focus();
        return;
    }
    if (notCheck(frmName.gender)) {
        alert("gender must be choosen");
        return;
    }
    if (!StringMatch(frmName.phone, check_phone)) {
        alert("phone is not valid");
        frmName.phone.value = "";
        frmName.phone.focus();
        return;
    }
    if (!StringMatch(frmName.email, check_email)) {
        alert("email is not valid");
        frmName.email.value = "";
        frmName.email.focus();
        return;
    }
    alert("all fields are valid!!!");
}
function nau1()
{
    document.getElementById("name").style.backgroundColor = "#E6E3E3";
}
function white1()
{
    document.getElementById("name").style.backgroundColor = "white";
}
function nau2()
{
    document.getElementById("age").style.backgroundColor = "#E6E3E3";
}
function white2()
{
    document.getElementById("age").style.backgroundColor = "white";
}
function nau3()
{
    document.getElementById("phone").style.backgroundColor = "#E6E3E3";
}
function white3()
{
    document.getElementById("phone").style.backgroundColor = "white";
}
function nau4()
{
    document.getElementById("email").style.backgroundColor = "#E6E3E3";
}
function white4()
{
    document.getElementById("email").style.backgroundColor = "white";
}