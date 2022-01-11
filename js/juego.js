/* Cojo todas las celdas de la tabla, que serian las casillas
y le añado el evento onClick, que cambiara el fondo de la casilla */
document.querySelectorAll("td").forEach((obj, i) => obj.addEventListener("click", (e) => celdaMarcada(e, i)));

//Variables:
var turno = 0; //Contador de turnos
var tablero = new Array(); //Array de las celdas
//Le asigno a cada celda un valor false, para controlar si esta marcada la celda o no
for (var i = 0; i < 9; i++) {
    tablero.push("");
} //Fin Para
var otraPartida = document.getElementById("otraPartida");
var turnoJug1 = document.getElementById("turnoJug1");
var turnoJug2 = document.getElementById("turnoJug2");
var resultado = document.getElementById("resultado");

var celdaMarcada = (e, pos) => {
    //Almaceno la celda pulsada
    var celda = e.target;
    if (turno < 9 && tablero[pos] == "") {
        turno++;
        //Si el turno es impar, es el turno del jugador 1.
        //Si no, seria turno del jugador 2
        celda.style.backgroundImage = turno % 2 ? "url(../../img/mariano.jpg)" : "url(../../img/jesus.jpg)";
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
            resultado.style.display = "block";
            resultado.innerHTML = "Enhorabuena. Gana " + tablero[0];
            resultado.style.background = "green";
            otraPartida.style.display = "block";
            //Sumar en el marcador la victoria al jugador correspondiente
            if (turno % 2) {
                console.log(document.getElementById("wJug1").value);
            }
        }
    } else {
        document.getElementById("resultado").innerHTML = "Ya ha terminado la partida";
    }
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
    document.getElementById("juego").reset();
});