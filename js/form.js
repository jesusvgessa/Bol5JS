//Variables:
var formulario = document.getElementById("formulario");
var nombreJug1 = document.getElementById("nombreJug1");
var formJug1 = document.getElementById("formJug1");
var btnJug1 = document.getElementById("btnJug1");
var nombreJug2 = document.getElementById("nombreJug2");
var formJug2 = document.getElementById("formJug2");
var btnJug2 = document.getElementById("btnJug2");
var error = document.getElementById("errores");
var avatar1 = document.getElementById("avatarJug1");

//Añado los eventos convenientes:
btnJug1.addEventListener("click", validar);

function validar() {
    if (nombreJug1.value != null || nombreJug1.value != "") {
        var jugador1 = nombreJug1.value;
        avatar1.style.display = "block";
    } else {
        error.innerHTML = "ERROR: Introduce un nombre.";
    }
}