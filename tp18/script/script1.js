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
console.log(calculo())

// parametros
function saludar(nombre){
    return "hola " + nombre;
}
let texto = saludar();
console.log(texto);