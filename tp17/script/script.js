if(2 == 1){
    console.log("resultado del condicional");
}

/* let dato1 = window.prompt("ingresa primer dato");
let dato2 = window.prompt("ingrese segundo dato");

if(dato1 == dato2){
    console.log("comparacion verdadero");
} else{
    console.log("comparacion falsa")
} */

    //scoope
    let respuesta;
    if(2 > 3){
         respuesta = "primer numero mayor al segundo";
    }else{
         respuesta = "segundo numero mayor al primero";
    }
    console.log(respuesta);
    
    // If else if

let semaforo = "celeste";

if(semaforo == "verde"){
    console.log("Avanzar");
} else if(semaforo == "amarillo"){
    console.log("Precaución");
} else if(semaforo == "rojo"){
    console.log("Detenerse");
} else {
    console.error("Semaforo roto");
}
        //cargar monto de compras ("window.propt()") -si >$50.000 descuento del 25% -si > $20.000 descuento 10% - sino ningun descuento - devolcer valor por consola ("console.log()")
   // if(){} else if(){} else {}
/* let monto = window.prompt("monto de la compre");

if(monto>50000){
    let montofinal = monto * 0.75;
    console.log("monto final:" + montofinal);
} else if (monto > 20000){
    let montofinal = monto * 0.9;
    console.log("monto final:" + montofinal);
}else {
    console.log("monto final:" + monto);
} */

//operador ternario
/* let edad = window.prompt("ingrese su edad");

let resp;
if(edad >= 18){
    resp = "es mayor de edad";
}else{
    resp = "es menor de edad";
}

let resp2 =edad >=18? "mayor" : "menor"
console.log(resp2); */

//operadores

let valor1 = true;
let valor2 =false;

console.log(valor1 && valor2);

if (10 == 10 && 20 == 20){
    console.log("los numeros coinciden");
}else{
    console.log("los numeros no coinciden")
}
// ejercicio - llevando mas de 10 pord por un total superior a $20.000 aplicar un descuento del 20% en el total

/* let cantidad = window.prompt("cantidad de producto");
let valorcompra = window.prompt("total de la compra");

if(cantidad >= 10 && valorcompra >= 20000){
    let valorfinal = valorcompra *  0.8;
    console.log("valor final con descuentos:" + valorfinal);
}else{
    console.log("valor final sin descuento:" + valorcompra)
} */
 //switch

let colordelsemaforo =window.prompt("color de semaforo");
switch (colordelsemaforo) {
    case "verde":
        console.log("avanzar");
        break;
    case "amarillo":
        console.log("precaucion");
        break;  
    case  "rojo":
        console.log("detenerse");
        break;
    default:
        console.log("semaforo roto");
        break;
}