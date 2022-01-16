//Valor de la imagen principal
var imagenPrincipal = document.getElementById("principal");

//Array de la lista de imagenes de gatos 
var lista = document.querySelectorAll("li>img");

//Les doy un evendo onClick a todas
for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener("mousemove", cambioPrincipal);
} //Fin Para

//Funcion para cambiar la imagen principal
function cambioPrincipal() {
    imagenPrincipal.src = this.src;
}

//Cambiar tematica
//Cojo la etiqueta select, y le añado un evento onChange
var filtro = document.getElementById("filtroTema");
filtro.addEventListener("change", filtroTematica);

function filtroTematica() {
    //Cojo el valor del select
    var tematica = document.getElementById("filtroTema").value;
    var principal = document.getElementById("principal");
    var fondo = document.getElementById("cuadroPrincipal");

    //Depende del valor del select, le cambio la url a todas las fotos y el fondo
    switch (tematica) {
        case "gato":
            //Cambio las fotos de la lista
            for (var i = 0; i < lista.length; i++) {
                lista[i].setAttribute("src", "../img/gato/foto" + (i + 1) + ".png");
            } //Fin Para

            //Cambio tanto el fondo de la imagen principal, como la imagen
            //dejando la primera por defecto
            principal.setAttribute("src", "../img/gato/foto1.png");
            fondo.style.backgroundImage = "url('../img/gato/fondo.jpg')";
            break;

        case "futbol":
            for (var i = 0; i < lista.length; i++) {
                lista[i].setAttribute("src", "../img/futbol/foto" + (i + 1) + ".png");
            } //Fin Para
            principal.setAttribute("src", "../img/futbol/foto1.png");
            fondo.style.backgroundImage = "url('../img/futbol/fondo.jpg')";
            break;

        case "ovni":
            for (var i = 0; i < lista.length; i++) {
                lista[i].setAttribute("src", "../img/ovni/foto" + (i + 1) + ".png");
            } //Fin Para
            principal.setAttribute("src", "../img/ovni/foto1.png");
            fondo.style.backgroundImage = "url('../img/ovni/fondo.jpg')";
            break;
    } //Fin Segin Sea
}