//Defined global variables
deflog = "cleclerc@gmail.com";
defpass = "qwe123";

function checkLoginForm(){
    //Variables from customer
    login = document.getElementById("login").values;
    password = document.getElementById("password").value;

    //Checking required fields
    if (login == "" || password == "") {
        alert("Los campos son obligatorios, rellénelos");
    //Comparing internal datas with customer
    }else if(login != deflog && password != defpass){
        alert("Credenciales incorrectas, consulte con el ADM");
    }else{
        window.location.href = "apuntes.html";
        document.cookie = 'username=' + login;
    }
}