console.log("hola mundo (global)");

//funcio declarada

function holaMundoDec(){
    console.log("hola mundo(local/declarada)");
}

holaMundoDec();
 
//funcion de exprecion

const holaMundoexp = function(){
    console.log("hola mundo (local/anonima/exprecion");
}

holaMundoexp();

//return
function calculo(){
    let suma = 3 + 3;
    return suma;
}
let resultado = calculo();

 console.log(calculo())

// parametros
function saludar(nombre){
    return "hola " + nombre;
}
let texto = saludar();
console.log(texto);

texto =saludar("ross");
console.log(texto);

texto = saludar("zoe");
console.log(texto);

//calculo

function suma(numero, numero2){
    let suma = numero +numero2;
    return suma;
}

let suma1 = suma(5,7);
console.log(suma1);

let suma2 = suma(50000,20000);
console.log(suma2)

function resta(numero1,numero2){
    let resta = numero1 + numero2;
    return resta;
}

let resta1 = resta(12,8);
console.log(resta1)

//funcion fecha
/* nscot sumador = (a, b) => {return a + b;} */
const sumador = (a, b) => a + b;

console.log(sumador( 5, 6));

// callback

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const calculadora = (a, b, cb) => cb(a, b);
 
console.log(calculadora(21, 7, sumar));
console.log(calculadora(21, 7, restar));
console.log(calculadora(21, 7, multiplicar));
console.log(calculadora(21, 7, dividir));
