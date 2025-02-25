let num = prompt("Dame el primer numero");
let num2 = prompt ("Dame el siguiente numero");
let num3= prompt ("Dame el ultimo numero");

let numeroUno = parseInt(num);
let numeroDos= parseInt(num2);
let numeroTres= parseInt (num3);

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    console.log("Este es el valor mas grande: " + numeroUno);
} else if (numeroDos > numeroUno && numeroDos > numeroTres) {
    console.log("Este es el valor mas grande: " + numeroDos);
} else if (numeroTres > numeroUno && numeroTres > numeroDos) {
    console.log("Este es el valor mas grande: " + numeroTres);
}
