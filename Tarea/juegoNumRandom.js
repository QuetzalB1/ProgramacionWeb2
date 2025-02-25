let vidas = 3;
let aleatorio = Math.floor(Math.random() * 10) + 1;

while (vidas > 0) { 
    let numero = prompt("Adivina el número entre el 1 y el 10. Tienes " + vidas + " vidas.");
    let numeroJugador = parseInt(numero);

    if (numeroJugador === aleatorio) {
        alert("Adivinaste El número era " + aleatorio);
        break;
    } else {
        vidas--;
    }

    if (vidas === 0) {
        console.log("Perdiste El número era " + aleatorio);
    }
}

