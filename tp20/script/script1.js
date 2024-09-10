const numeros = [2, 9, 12, 5, 8, 3,];

console.log(numeros);

//seleccionar un elemento

console.log(numeros[2]);

console.log(numeros.slice(2, 5));

//agregar un elemento

numeros.push(7);
console.log(numeros);
numeros.unshift(6);
console.log(numeros);

// quitar elemento

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

// splice
let letras =["a","b","c","d"];
console.log(letras);

letras.splice(1, 2);
console.log(letras);

letras.splice(1, 0, "b","c");
console.log(letras);

letras.splice(4, 0,"e","f" );
console.log(letras);

//unir y separ cadenas

let unidos = numeros.join("/");
console.log(unidos);

let reconstruida =unidos.split("/");
console.log(reconstruida);

//ordenar alfabeticamente

let caracteres =["A","C","B","E","D"];
console.log(caracteres);

caracteres.sort();
console.log(caracteres);

let palabras =["silla","mesa","vaso","plato","botella"];
console.log(palabras);
let palabras2 = palabras.slice(0);
console.log(palabras2);

palabras2.sort();
console.log(palabras2);
console.log(palabras);

//ordenar  numeros
console.log(numeros);
numeros.sort((a, b)=> a-b);
console.log(numeros);

//