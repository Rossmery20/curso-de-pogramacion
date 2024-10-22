let registros = [ ];

document.querySelector("#registrar").addEventListener("click", () => {
    let nombre =document.querySelector("#nombre");
    let apellido =document.querySelector("#apellido");
    let telefono =document.querySelector("#telefono");

    if(nombre.value == "" || apellido.value == "" || telefono.value == ""){
        mostrarError("debe completar los 3 campos para rejistrar la informacion");
        return;
    }

    let datos = {
        nombre:  nombre.value,
        apellido: apellido.value,
        telefeno: telefono.value,
    };
   // console.log(datos)
     registros.push(datos);

     // vaciar campos
     nombre.value = "";
     apellido.value = "";
     telefono.value = "";
})

//manejo de errores
function mostrarError(msg){
    let contError = document.querySelector("#errores");
    contError.innerHTML = msg;
    contError.style.opacity =1;
    setTimeout(() => {
        contError.style.opacity = 0;
        contError.innerHTML = "";
    }, 5000)
}

document.querySelector("#errores").addEventListener("click", () => {
    document.querySelector("#errores").style.opacity = 0;
    //document.querySelector("#errores").innerHTML = "";
})
document.querySelector("#mostrar").addEventListener("click", () =>{
    let textoDeSalida = "";
    if(registros.length === 0){
        mostrarError("no hay registro para mostrar");
        return
    }
    registros.forEach((registro) => {
        textoDeSalida +=
         `<div class ="registro"><span>nombre: ${registro.nombre}</span><span> apellido: ${registro.apellido}</span> <span>telefono: ${registro.telefono}</span></div>`
        
    })
   // console.log(textoDeSalida);
   document.querySelector("#salida span").innerHTML = textoDeSalida;
})

document.querySelector("#vaciar").addEventListener("clikc", () => {
    document.querySelector("#salida span").innerHTML = "";
    registros = [];
})