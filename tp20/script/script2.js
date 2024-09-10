//metodos fortach

let items =["rojos","naranja","amarillo","verde","azul","violeta"];

items.forEach((item, i)=>{
    console.log("color:" + item + "/repeticion:" + i)
});
const numeros = [2, 9, 12, 5, 8, 3];
numeros.forEach((numero)=> {
    console.log(numero*10)
});

numeros.forEach((numero, i) => {
    numero[i] += 100;
});

 console.log(numeros);

 let unir = numeros.join();
 let separar = unir.split(",");
 console.log(separar);
 separar.forEach((dato, i) => {
    separar[i] = Number(dato);
    //separar[i] = Number(separar[i]);
 });
 console.log(separar);

 // metodo find

 //let buscar = items.find((dato) => {return dato === "verde"});     (O)
 let buscar =items.find(dato => dato === "verde")
 console.log(buscar);

 let buscarI = items.findIndex(dato => dato === "verde");
 console.log(buscarI);

//METODO REDUCE
let total = numeros.reduce((acumulador, numero)=>acumulador + numero);
console.log(total)

//vaciar
console.log(items);
items = []
console.log(items);

// array de array

let datos = [["ross",38278003],["mery",41245471].["zoe",94492347],];
console.log(datos);

