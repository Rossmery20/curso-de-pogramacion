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
    console.log(datos)
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