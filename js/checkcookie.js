window.onload = function (){
    checkCookie();
}

function checkCookie(){
    if (document.cookie == ""){
        window.location.href = "login.html";
    } else if (document.cookie != "") {
        window.location.href = "apuntes.html";
    } else{
        alert("Error");
    }
}

/* alert(document.cookie); */
