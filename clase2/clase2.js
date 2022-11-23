//Se ingresan 2 numeros por teclado y se calcula el promedio. Si el promedio es mayor a 7 aprobado
//si el mayor a 4 recupera
//si es menos a 4 recursa
//Tambien se ingresa por teclado si el alumno es regular(SI o NO) 
//para aprobar o recuperar tiene que se regular

let n1 = parseFloat(prompt("Ingresa un numero"));
let n2 = parseFloat(prompt("Ingresa otro numero"));
let regu = prompt("¿Es alumno regular?  SI / NO");
let prom = parseFloat((n1 + n2) / 2);

if(prom >= 7){
    console.log("Aprovado, tu promedio es:", prom);
}
else if(prom >=4 && prom <7 && regu =="si"){
    console.log("Alumno Regular, RECUPERA, tu promedio es:", prom);
}
else if(prom >=4 && prom <7 && regu =="no"){
    console.log("Alumno NO Regular, RECURSA, tu promedio es:", prom);
}
else if(prom <4){
    console.log("RECURSA, tu promedio es:", prom)
}



