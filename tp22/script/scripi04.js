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