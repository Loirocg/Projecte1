var contrasena1;
var contrasena2;
var mail;
var mailok = false;
var contrasena1ok = false;
var contrasena2ok = false;
function validsignup(){
	var nombre = document.getElementById("nom").value;
	var fecha = parseInt(document.getElementById("data").value);
	var Tel = document.getElementById("tel").value;
	var datosok = false;

	contrasena1 = document.getElementById("password1").value;
	contrasena2 = document.getElementById("password2").value;
	mail = document.getElementById("email").value;
	
	var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	//Confirmacio email
	if(mail.match(mail_format))
	{
		document.getElementById("correuinc").innerHTML = "Correo introducido correcto";
		document.getElementById("correuinc").style.color = "green";
		mailok = true;
	}
	else
	{
		document.getElementById("correuinc").innerHTML = "Correo introducido incorrecto";
		document.getElementById("correuinc").style.color = "red";
		mailok = false;
	}
	
	//Validacio contrasenya1
	if(contrasena1 == "")
	{
		document.getElementById("passwordinc").innerHTML = "Contraseña introducida incorrecta";
		document.getElementById("passwordinc").style.color = "red";
		contrasena1ok = false;
	}
	else if(contrasena1.length < 6)
	{
		document.getElementById("passwordinc").innerHTML = "Contraseña introducida demasiado corta";
		document.getElementById("passwordinc").style.color = "red";
		contrasena1ok = false;
	}
	else
	{
		document.getElementById("passwordinc").innerHTML = "Contraseña introducida correcta";
		document.getElementById("passwordinc").style.color = "green";
		contrasena1ok = true;


		//Validacio contrasenya2
		if(contrasena2 == "")
		{
			document.getElementById("passwordinc").innerHTML = "La contraseña no coincide";
			document.getElementById("passwordinc").style.color = "red";
			contrasena2ok = false;
		}
		else if(contrasena2.length < 6)
		{
			document.getElementById("passwordinc").innerHTML = "La contraseña no coincide";
			document.getElementById("passwordinc").style.color = "red";
			contrasena2ok = false;
		}
		else
		{
			if(contrasena1 == contrasena2)
			{
				document.getElementById("passwordinc").innerHTML = "Contraseña introducida correcta";
				document.getElementById("passwordinc").style.color = "green";
				contrasena2ok = true; 
			}
			else
			{
				document.getElementById("passwordinc").innerHTML = "La contraseña no coincide";
				document.getElementById("passwordinc").style.color = "red";
				contrasena2ok = false;
			}
				
		}
	}


	//Comparar email i contrasena
	if(mail == contrasena1)
	{
		document.getElementById("passwordinc").innerHTML = "La contraseña y el usuario no pueden ser iguales";
		document.getElementById("passwordinc").style.color = "red";
		contrasena1ok = false;
		mailok = false;
	}

	//Validacio dades
	if(nombre == "" || Tel == "" || fecha == "")
	{
		document.getElementById("correuinc").innerHTML = "Datos vacíos";
		document.getElementById("correuinc").style.color = "red";
		datosok = false;
	}
	else
		datosok = true;

	if(contrasena1ok == true && contrasena2ok == true && mailok == true && datosok == true)
	{
		document.cookie = "username=John Doe; expires=3600";
		window.location.assign("Apunts.html");
	}
}