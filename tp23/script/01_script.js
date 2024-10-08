let datos ={
    nombre: "ross",
    apellido: "callizaya",
    mail: "mery_rossy05@hotmail.com",
    direccion: "calle cuba 4142",
    telefono: 1154367888,
    registrado: true,
};
console.log(datos);

console.log(datos.nombre);
console.log(datos["nombre"]);

//modificar propiedad
datos.nombre = "ignacio",
console.log(datos);

//añadir una propiedad
datos.edad = 41;
console.log(datos);

//eliminar una propiedad
delete datos.direccion;
console.log(datos)

// loop for in
for(const x in datos){
    //console.log(x);
    console.log(datos[x])
}

const curso = {
    nombre:"programacion web",
    sede: "san martin",
    turno: "tarde",
    inscriotos: 26,
    saludar: () => {
        console.log("hola alumnos de " + curso.nombre)
    },
    estado: () => {
        if (curso.inscriotos > 25){
            console.log("curso completo");
        } else {
            console.log("curso con vacantes");
        }
    }, 
}

curso.saludar();
curso.nombre = "sublimacion";
curso.saludar();

curso.estado();
curso.inscriotos -- ;
curso.estado();