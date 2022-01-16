/* Cojo todas las celdas de la tabla, que serian las casillas
y le añado el evento onClick, que cambiara el fondo de la casilla */
document.querySelectorAll("td").forEach((obj, i) => obj.addEventListener("click", (e) => celdaMarcada(e, i)));

//Variables:
var turno = 0; //Contador de turnos
var tablero = new Array(); //Array de las celdas

//Reinicio marcador
document.getElementById("wJug1").value = 0;
document.getElementById("wJug2").value = 0;

//Le asigno a cada celda un valor false, para controlar si esta marcada la celda o no
for (var i = 0; i < 9; i++) {
    tablero.push("");
} //Fin Para
var turnoJug1 = document.getElementById("turnoJug1");
var turnoJug2 = document.getElementById("turnoJug2");
var finPartida = document.getElementById("finPartida");

var celdaMarcada = (e, pos) => {
    //Almaceno la celda pulsada
    var celda = e.target;
    if (turno < 9 && tablero[pos] == "") {
        turno++;
        //Si el turno es impar, es el turno del jugador 1.
        //Si no, seria turno del jugador 2
        celda.style.backgroundImage = turno % 2 ? "url(../../img/" + avatar1 + ".jpg)" : "url(../../img/" + avatar2 + ".jpg)";
        tablero[pos] = turno % 2 ? "jug1" : "jug2";

        //Cambio en el contenedor de turnos, para reflejar a quien le toca
        if (turno % 2) {
            turnoJug1.style.background = "white";
            turnoJug2.style.background = "#333";
        } else {
            turnoJug2.style.background = "white";
            turnoJug1.style.background = "#333";
        }

        if (victoria()) {
            finPartida.style.display = "block";
            var ganador = turno % 2 ? jugador1 : jugador2;
            resultado.innerHTML = "Enhorabuena. Gana " + ganador;
            resultado.style.background = "green";
            //Sumar en el marcador la victoria al jugador correspondiente
            if (turno % 2) {
                document.getElementById("wJug1").value++;
            } else {
                document.getElementById("wJug2").value++;
            } //Fin Si
        } //Fin Si   
    }
    if (turno == 9) {
        finPartida.style.display = "block";
        resultado.innerHTML = "EMPATE";
        resultado.style.background = "grey";
    } //Fin Si
}

function victoria() {
    //Compruebo las casillas, comprobando el tres en raya, y si el primero de estos esta definido.
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    } else {
        return false;
    } //Fin Si
}

//Le doy la funcion de resetear al boton revancha
document.getElementById("otraPartida").addEventListener("click", function() {
    //Cambio marcador:
    document.getElementById("wJug1").innerHTML = document.getElementById("wJug1").value;
    document.getElementById("wJug2").innerHTML = document.getElementById("wJug2").value;

    //Vuelvo a ocultar el fin de partida
    finPartida.style.display = "none";

    //Reinicio los marcadores de las celdas y las variables
    var turno = 0;
    var tablero = new Array();
    for (var i = 0; i < 9; i++) {
        tablero.push("");
    } //Fin Para

    //Recojo en un array todas las celdas, para borrarles el background
    var fondos = document.querySelectorAll("td");
    console.log(fondos);
    for (var i = 0; i < fondos.length; i++) {
        fondos[i].style.backgroundImage = "none";
    } //Fin Para
});