//Comprovar si la cookie existeix
var user = getCookie("username");
if (user != "") {
    alert("Welcome");
} else {
    user = alert("No ha iniciado sesión aún, Por favor, introduzca su usuario para entrar");
    window.location.assign("Login.html");
    }


function logout(){
    window.location.assign("Login.html");
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function getCookie(username) {
    let name = username + "=";
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