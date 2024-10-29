localStorage.setItem("curso", "programacion web");

let cursolocal =localStorage.getItem("curso");

document.querySelector("#caja1").innerHTML = cursolocal;

//----------

const datosPersonales ={
    nombre: "ross",
    apellido: "vila",
    mail: "mery_rossy05@hotmail.com",
    telefono: 11456677
}

document.querySelector("#grabar").addEventListener("click", () => {
    localStorage.setItem("datosPersonales", JSON.stringify(datosPersonales));
})
document.querySelector("#obtener").addEventListener("click", () => {
    let datoslocales = localStorage.getItem("datosPersonales");
console.log(datoslocales);
datoslocales = JSON.parse(datoslocales);
console.log(datoslocales);

    document.querySelector("#caja2").innerHTML = `nombre: ${datoslocales.nombre}<br>apellido: ${datoslocales.apellido}<br>mail: ${datoslocales.mail}<br>telefono: ${datoslocales.telefono}`;
})

document.querySelector("#limpiar").addEventListener("click", () => {
    document.querySelector("#caja2").innerHTML = "";
    localStorage.clear();
})

