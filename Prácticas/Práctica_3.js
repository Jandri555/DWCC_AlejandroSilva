let nombre = "Jugador 1";
let puntos = 0;
let partidas = 0;

function jugarPartida(resultado = "derrota") {
    switch (resultado) {
        case "victoria":
            puntos = puntos + 3;
            partidas = partidas + 1;
            break;
        case "empate":
            puntos = puntos + 1;
            partidas = partidas + 1;
            break;
        case "derrota":
            partidas = partidas + 1;
            break;
        default:
            console.log("Resultado no valido");
    }
}

function verCategoria(pts) {
    if (pts <= 3) {
        return "PRINCIPIANTE";
    } else if (pts <= 6) {
        return "INTERMEDIO";
    } else if (pts <= 9) {
        return "AVANZADO";
    } else {
        return "EXPERTO";
    }
}

function darBonos(bono1 = 0, bono2 = 0, bono3 = 0) {
    puntos = puntos + bono1 + bono2 + bono3;
}

function duplicar() {
    puntos = puntos * 2;
}

function penalizar(castigo) {
    puntos = puntos - castigo;
}

console.log("Jugador: " + nombre);
console.log("Partidas: " + partidas);
console.log("Puntos: " + puntos);
console.log("Categoria: " + verCategoria(puntos));
