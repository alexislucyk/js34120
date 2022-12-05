function calcula_prestamo(importe, cuotas){
    importe = parseFloat(importe);
    let prestamo = 0;

    if ( importe > 0 && cuotas == 3){
        prestamo = importe + ( importe * 0.08);
        return prestamo
    }
    if ( importe > 0 && cuotas == 6){
        prestamo = importe + ( importe * 0.20);
        return prestamo
    }
    if (importe > 0 && cuotas == 12){
        prestamo = importe + ( importe * 0.40);
        return
    }
}

let importe = "";

console.log("Calcular prestamo")

while (importe != "FIN"){
    
    monto = prompt ("Ingresa el importe o FIN para salir")
    let cuotas = prompt ("Ingresa la cantidad de cuotas: 3, 6, 12");
    let resultado = calcula_prestamo(importe, cuotas);

    console.log("Solicitas: ", importe);
    console.log("N° de cuotas :", cuotas);
    console.log("Monto a devolver: ", resultado);

    console.log("Calcular de nuevo");
}