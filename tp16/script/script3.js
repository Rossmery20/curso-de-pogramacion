//tipos de datos 

let numero = 23;
let texto = "texto de ejemplo";
let logicas = false;//boolean
let indefinido;//undefined
let array = [ "dato", 358, false, 23, "quinela"]  ;
let objeto = {
    nombre: "ross",
    apellido: "vila",
    telefono: 115445484,
    edad: 23,
};

console.log(numero);
console.log(texto);
console.log(logicas);
console.log(indefinido);
console.log(array);
console.log(objeto);

//typéof()
console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(logicas));
console.log(typeof(array));
console.log(typeof(objeto));

//sumar

/* let num1 = "15";
num1 = Number(num1)
let num2 = 30;
let num3 = num1 + num2;
console.log(suma);
 */

/* let datouser1 = window.prompt("ingrese el primer numero");
datouser1 = Number(datouser1);
let datouser2 = window.prompt("ingrese el segundo numero");
datouser2 = Number(dotouser2);
let sumadedatos = datouser1 + datouser2;
console.log(sumaDeDatos); */

//conversion a numeros

let valor = "3.1417";
console.log(valor, typeof(valor));

let valornum = Number(valor);
console.log(valornum, typeof(valornum));

let valorint = parseInt(valor);
console.log(valorint, typeof(valor));

let valorfloat = parseFloat(valor)
console.log(valorfloat, typeof(valor));