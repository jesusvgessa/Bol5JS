//Variables:
var jugador1 = "";
var avatar1 = "";
var jugador2 = "";
var avatar2 = "";

window.onload = load;

function load() {
    //Variables:
    var formJug1 = document.getElementById("formJug1");
    var btnJug1 = document.getElementById("btnJug1");
    var errorJug1 = document.getElementById("errorJug1");

    var formAvatar1 = document.getElementById("avatarJug1");
    var btnAva1 = document.getElementById("btnAva1");
    var errorAva1 = document.getElementById("errorAva1");

    var formJug2 = document.getElementById("formJug2");
    var btnJug2 = document.getElementById("btnJug2");
    var errorJug2 = document.getElementById("errorJug2");

    var formAvatar2 = document.getElementById("avatarJug2");
    var btnAva2 = document.getElementById("btnAva2");
    var errorAva2 = document.getElementById("errorAva2");

    var juegoCompleto = document.getElementById("juegoCompleto");

    //Añado los eventos convenientes:
    btnJug1.addEventListener("click", validarNombre1);
    btnAva1.addEventListener("click", validarAvatar1);
    btnJug2.addEventListener("click", validarNombre2);
    btnAva2.addEventListener("click", validarAvatar2);

    function validarNombre1(event) {
        event.preventDefault();
        if (document.getElementById("nombreJug1").value != "") {
            if (errorJug1.innerText.length != 0) {
                errorJug1.removeChild(errorJug1.firstChild);
            } //Fin Si
            jugador1 = document.getElementById("nombreJug1").value;
            formAvatar1.style.display = "block";
        } else {
            errorJug1.innerText = "ERROR: Introduce un nombre.";
        } //Fin Si
    } //Fin Funcion

    function validarAvatar1(event) {
        event.preventDefault();
        //Cojo todos los valores de los radio inputs.
        var avatares = document.querySelectorAll("#avatar1");
        //Lo recorro preguntando cual es el que esta marcado.
        for (var i = 0; i < avatares.length; i++) {
            if (avatares[i].checked) {
                avatar1 = avatares[i].value;
            } //Fin Si
        } //Fin Para
        formJug1.style.display = "none";
        formAvatar1.style.display = "none";
        formJug2.style.display = "block";
    }

    function validarNombre2(event) {
        event.preventDefault();
        if (document.getElementById("nombreJug2").value != "") {
            if (errorJug2.innerText.length != 0) {
                errorJug2.removeChild(errorJug2.firstChild);
            } //Fin Si
            jugador2 = document.getElementById("nombreJug2").value;
            formAvatar2.style.display = "block";
        } else {
            errorJug2.innerText = "ERROR: Introduce un nombre.";
        } //Fin Si
    } //Fin Funcion

    function validarAvatar2(event) {
        event.preventDefault();
        var avatares = document.querySelectorAll("#avatar2");
        for (var i = 0; i < avatares.length; i++) {
            if (avatares[i].checked) {
                avatar2 = avatares[i].value;
            } //Fin Si
        } //Fin Para
        formJug2.style.display = "none";
        formAvatar2.style.display = "none";

        //Cambio los valores del marcador
        document.getElementById("jug1").innerText = jugador1;
        document.getElementById("jug2").innerText = jugador2;
        document.getElementById("turnoJug1").innerText = jugador1;
        document.getElementById("turnoJug2").innerText = jugador2;

        juegoCompleto.style.display = "block";
    }
}