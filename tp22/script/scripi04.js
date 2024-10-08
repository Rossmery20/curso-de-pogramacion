document.querySelector("#btnej1").addEventListener("click", () => {
   let nombre= document.querySelector("#nombre").value;
   //console.log(nombre);
   if(nombre === ""){
    document.querySelector("#salidaej1").innerHTML = "error !!! ingrese nombre en el campo";
    return;
   }
   document.querySelector("#salidaej1").innerHTML = "hola " + nombre;
})

document.querySelector("#btnej2").addEventListener("click", () => {
    let comensales = document.querySelector("#comensales").value;
    if(comensales === "" || isNaN(comensales)){
        document.querySelector("#salidaej2").innerHTML = "error !!! ingrese un nemero en en campo";
        return;
}
    document.querySelector("#salidaej2").innerHTML = `*papas: ${0.5*comensales}kilos<br>*leche: ${100*comensales}ml<br>*manteca: ${30*comensales}grs<br>*huevo: ${1*comensales}unidades<br>`;
})
document.querySelector("#btnej3-1").addEventListener("click", () => {
    let asistente = document.querySelector("#asistentes").value = "";
    if(asistente == ""){
        document.querySelector("#salidaej3"). innerHTML = "error - ingrese un nombre en el input";
        return;
    }
    //console.log(asistente);
    asistentes.push(asistente)
    //console.log(asistentes);
});
let asistentes = [];
document.querySelector("#btnej3-2").addEventListener("click" , () => {
    if(asistentes.length == 0){
        document.querySelector("#salidaej3").innerHTML = "error - no hay datos guardados";
        return
    }
 asistentes.forEach((nombre, i) => {
   // console.log(nombre)
   i++;
   document.querySelector("#salidaej3").innerHTML += i + " - " + nombre + "<br>";
 });   
})
let carrito = [0,0,0];
document.querySelector("#sumaprod0").addEventListener("click", () => {
    carrito[0]++;
    actualizarcontador();
})
document.querySelector("#sumaprod1").addEventListener("click", () => {
    carrito[1]++;
    actualizarcontador();
})
document.querySelector("#sumaprod2").addEventListener("click", () => {
    carrito[2]++;
    actualizarcontador();
})

function actualizarcontador(){
    let acumulador = 0;
    carrito.forEach((cantidad) => {
        acumulador += cantidad;
    });
    document.querySelector("#contador").innerHTML = acumulador;
}
document.querySelector("#btnej4-1").addEventListener("click", () => {
document.querySelector("#salidaej4").innerHTML = `remera roja: ${carrito[0]} <br> remera verde:${carrito[1]} <br> remera azul: ${carrito[2]}<br>`
});
document.querySelector("#btnej4-2").addEventListener("click", () => {
    carrito = [0, 0, 0];
    actualizarcontador ();
    document.querySelector("#salidaej4").innerHTML = " ";
});