var contrasena;
var mail;
var mailok = false;
var contrasenaok = false;
function validlogin(){
	contrasena = document.getElementById("password").value;
	mail = document.getElementById("email").value;
	var arroba;
	
	var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(mail.match(mail_format))
	{
		document.getElementById("correuinc").innerHTML = "Adreça introduida correcte";
		document.getElementById("correuinc").style.color = "green";
		mailok = true;
	}
	else
	{
		document.getElementById("correuinc").innerHTML = "Adreça introduida incorrecte";
		document.getElementById("correuinc").style.color = "red";
		mailok = false;
	}
	
	if(contrasena == "")
	{
		document.getElementById("passwordinc").innerHTML = "Contrasenya introduida incorrecte";
		document.getElementById("passwordinc").style.color = "red";
		contrasenaok = false;
	}
	else if(contrasena.length < 8)
	{
		document.getElementById("passwordinc").innerHTML = "Contrasenya introduida massa curta";
		document.getElementById("passwordinc").style.color = "red";
		contrasenaok = false;
	}
	else
	{
		document.getElementById("passwordinc").innerHTML = "Contrasenya introduida correcte";
		document.getElementById("passwordinc").style.color = "green";
		contrasenaok = true;
	}
	if(contrasenaok == true && mailok == true)
		window.location.assign("Apunts.html");
}