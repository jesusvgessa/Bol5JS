//Valor de la imagen principal
var imagenPrincipal = document.getElementById("principal");

//Array de la lista de imagenes de gatos 
var listaGatos = document.querySelectorAll("li>img");

//Les doy un evendo onClick a todas
for (var i = 0; i < listaGatos.length; i++) {
    listaGatos[i].addEventListener("click", cambioPrincipal);
}

//Funcion para cambiar la imagen principal
function cambioPrincipal() {
    imagenPrincipal.src = this.src;
}