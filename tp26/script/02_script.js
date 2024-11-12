const datos = [{
    nombre: "ross",
    apellido:"vila",
    mail: "mery_ross@hotmail.com",
    direccion:"calle mantevideo",
    telefono: 48482143
}, {
    nombre: "zoe",
    apellido:"tellez",
    mail: "zoe_2020@hotmail.com",
    direccion:"calle cubas",
    telefono: 20474352
}, {
    nombre: "enzo",
    apellido:"rios",
    mail: "enzo2019@hotmail.com",
    direccion:"calle reconquista",
    telefono: 48482143
}, {
    nombre: "lia",
    apellido:"vila",
    mail: "lia_briony@hotmail.com",
    direccion:"calle bermudez",
    telefono: 49503456
}, {
    nombre: "valentina",
    apellido:"vila",
    mail: "valn_tina@hotmail.com",
    direccion:"calle cuva",
    telefono: 48482143
},];

//funcion sincronica

/* function getDatos(){
    return datos
}
console.log(getDatos()); */

//funcion asincronica

/* function getDatos(){
    setTimeout(() => datos,2000);
}

console.log(getDatos()) */

/* function getDatos(){
    return new Promise((res) => {
        setTimeout(() => res(dotos), 2000);
    })
}
getDatos().then((datos) => {console.log(datos)})
 */
//solucion con async await

async function getDatos2(){
    let info = new Promise((res) => {
        setTimeout(() => res(datos), 2000);
    });
    console.log(await info)
}
getDatos()