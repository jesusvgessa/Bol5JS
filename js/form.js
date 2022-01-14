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
            var jugador1 = document.getElementById("nombreJug1").value;
            formAvatar1.style.display = "block";
        } else {
            errorJug1.innerText = "ERROR: Introduce un nombre.";
        } //Fin Si
    } //Fin Funcion

    function validarAvatar1(event) {
        event.preventDefault();
        var avatar1 = document.getElementById("avatar1").value;
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
            var jugador2 = document.getElementById("nombreJug2").value;

            //Recorro la lista de avatares del 2 jugador, para borrar el que ya esta elegido
            var lista = document.querySelectorAll(".listaAvatares2>li");
            console.log(lista[0].attributes.src);
            formAvatar2.style.display = "block";

        } else {
            errorJug2.innerText = "ERROR: Introduce un nombre.";
        } //Fin Si
    } //Fin Funcion

    function validarAvatar2(event) {
        event.preventDefault();
        var avatar2 = document.getElementById("avatar2").value;
    }
}