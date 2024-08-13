let letras = "abcdefghijklmnñopqrstuvwxyz";

//largo
let largo = letras.length;
console.log(largo)

//extraer letra
let letraN =letras.charAt(2);
console.log(letraN);
letraN =letras.at(3);
console.log(letraN);
letraN = letras[4];
console.log(letraN);

// extraer seccion

let frase = "vive como si fuera a morir mañana. aprende como si fueras a dudar para siempre.";

let seccion = frase.slice(0, 8);
console.log(seccion)
seccion = frase.substring(0, 3);
console.log(seccion);

let nombre = "nombre: ross mery";
 
seccion =nombre.slice(8, nombre.length);
console.log(seccion);

//convercion de caja 

let mayusculas = nombre.toUpperCase();
console.log(mayusculas);
let minusculas = nombre.toLowerCase();
console.log(minusculas);
// trim
let espaciado = "   texto con espacio extra al rededor   ";
let ajustado = espaciado.trim();
console.log(espaciado);
console.log(ajustado);

// reemplazar
let saludo = "hola ross";
console.log(saludo);
saludo =saludo.replace("ross", "mery");
console.log(saludo);

//split
let colores = "rojo, verde, azul";
//colores = colores.split(",")
console.log(colores);

// includes
let busqueda = colores.includes("rojo");
console.log(busqueda);

// comillado
let doble = "comillas dobles permiten comillas simples dentro, i'm jhonny walker's";
let simple = 'comillas simples permiten "comillas" dobles';
let grave =  `el batik permite 'simple' u "doble" `;

let localidad = "san martin";
console.log("localidad:" + localidad + ", bs as");

console.log(`localidad: (localidad), bs as`);