let inventario = [];

iniciarPrograma();

function mostrarMenu() {
    return parseInt(prompt(
        "Opcion disponible: \n"+
        "1. agrega producto \n"+
        "2. Mostras todos los productos \n"+
        "3. Buscar producto por nombre \n"+
        "4. Salir \n"+
        "elije una opcion"
    ));
    
}

function iniciarPrograma() {
    let contunuar = true;
    while (contunuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarTodo();
                break;
            case 3:
                bucarNombre();
                break;
            case 4:
                alert("saliendo del programa");
                contunuar= false;
                break;            
        
            default:
                alert("opcion no valida");
                break;
        }
    }
}

function agregarProducto() {
    let producto = prompt("introduse el nombre del producto");
    let cantidad = parseInt(prompt("agrega la camtidad"));
    let precio = parseInt(prompt("agrega el precio"));
    
    
    if (cantidad > 0 && precio > 0) {
        let produc = {
            nombre: producto,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(produc);
        alert("producto agregado");
    }else{
        alert("cantidad o precio tiene que ser positivo");
    }

   

}

function mostrarTodo() {
    
    if (inventario.length === 0) {
        alert("no hay productos");

       
    }else{
        let mensaje= "Productos en el inventario: ";

        for (let i = 0; i < inventario.length; i++) {
            mensaje+=`Producto ID: ${i+1} \n`+
            `Nombre: ${inventario[i].nombre}\n`+
            `Cantidad: ${inventario[i].cantidad}\n`+
            `Precio: ${inventario[i].precio}\n`+
            "------------------------------------\n"; 
            alert(mensaje);
        }
       
    }
    
}

function bucarNombre() {
    var nombre = prompt("¿Que producto buscas?");

    let mensaje= "Producto en el inventario: ";

    for (let index = 0; index < inventario.length; index++) {

        if (nombre === inventario[index].nombre) {
            mensaje+=`Producto ID: ${index+1} \n`+
            `Nombre: ${inventario[index].nombre}\n`+
            `Cantidad: ${inventario[index].cantidad}\n`+
            `Precio: ${inventario[index].precio}\n`+
            "------------------------------------\n"; 
            alert(mensaje);
            break;
        }
    }    
}
