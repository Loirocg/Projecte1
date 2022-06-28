var contrasena1;
var contrasena2;
var mail;
var mailok = false;
var contrasena1ok = false;
var contrasena2ok = false;
var galeta;

//Alfredo apunts
var acc = document.getElementsByClassName("topics_container_btn");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
  }

//Inici de sessio
function validlogin(){
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

	if(contrasena1ok == true && contrasena2ok == true && mailok == true)
	{
		document.cookie = "username = John Doe";
		galeta = document.cookie;
		window.location.assign("Apunts.html");
	//}
}


//Registre
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
		document.cookie = "username=John Doe";
		galeta = document.cookie;
		window.location.assign("Apunts.html");
	}
}

//Redireccio si no existeix cookie
function detectCookie(){
	var user = getCookie();
	if (user != "") {
		alert("eooooo");
	} else {
		user = alert(user);
		window.location.assign("default.html");
	}
}

//Comprovar si la cookie existeix
function getCookie() {
    let name = "username=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

	//Tancar sessio
function logout(){
    window.location.assign("default.html");
    document.cookie = "username=; expires=Thu, 18 Dec 1970 12:00:00 UTC;";
	galeta = document.cookie;
}}