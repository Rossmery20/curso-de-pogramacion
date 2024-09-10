document.querySelector("form").addEventListener("submit", (e) => {
e.preventDefault();
let validacion = validarform();
if (validacion){
    console.log("enviar formulario")
}else{
    console.log("validacion rechazada")
}
});

function validarform(){
   //console.log("validarform");
    //verificar campos vacios
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let dni = document.querySelector("#dni");

    if(nombre.value ==="" || apellido.value ==="" || dni.value ===""){
        window.alert("debe completar todos los datos");
        return false;
    }
    if(dni.value.length !== 8){
        window.alert("el dni debe tener 8 digitos");
    }

    // verificar tipo de datos
    if(isNaN(dni.value)){
        window.alert("el campo del dni solo acepta numeros")
        return false
    }
    let letrasAprobadas = "abcdefghijklmñopqrstuvwxyz ".split("")
    let arraynombre = nombre.value.split("");
     resp = true
    arraynombre.forEach((letra) => {
        //console.log(letra)
    let resultado = letrasAprobadas.indexOf(letra.tolowerCase());
        //console.log(resultado);
        if(resultado === -1){
            //window.alert("el campo nombre solo acepta letras");
            resp = false
        }
    })
    if (!resp){
        window.alert("el campo nombre solo asepta letras");
        return false
    }
    //.............
    let arrayapellido = apellido.value.split("");
         resp = true
    arrayapellido.forEach((letra) => {
        let resultado = letrasAprobadas.indexOf(letra.tolowerCase());
        if(resultado === -1){
            //window.alert("el campo nombre solo acepta letras");
            resp = false
        }
    })
    if (!resp){
        window.alert("el campo apellido solo asepta letras");
        return false
    }
    document.querySelector("#resultados").innerHTML +=  
     `nombre recibido: ${nombre.value} <br>apellido recibido:${apellido.value} <br>dni recivido: ${dni.value}`

    return true
}


