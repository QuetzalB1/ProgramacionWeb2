let opcion = 0;
while (opcion != 5) {
    let eleccion = prompt(`Elije una operacion
        1 = suma
        2 = resta
        3 = multiplicacion
        4 = divicion
        5 = salir`);

    opcion = parseInt(eleccion);
    if (opcion == 5) {
        break;
    }

    let num = parseInt(prompt("Dame un numero"));
    let num2 = parseInt(prompt("Dame el otro numero"));



    switch (opcion) {
        case 1:
            alert(`El resultado es: ${suma(num, num2)}`);
            break;
        case 2:
            alert(`El resultado es: ${resta(num, num2)}`);
            break;
        case 3:
            alert(`El resultado es: ${multi(num, num2)}`);
            break;

        case 4:
            alert(`El resultado es: ${div(num, num2)}`);
            break;

        default:
            break;
    }
}

function suma(valor, valor2) {
    return parseInt(valor) + parseInt(valor2);
}
function resta(valor, valor2) {
    return parseInt(valor) - parseInt(valor2);
}
function multi(valor, valor2) {
    return parseInt(valor) * parseInt(valor2);
}
function div(valor, valor2) {
    return parseInt(valor) / parseInt(valor2);
}