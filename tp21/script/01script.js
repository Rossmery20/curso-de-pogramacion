console.log(window);
console.log(document);

// Selectores

/* let elemento = document.querySelector(".rojo");
console.log(elemento);

elemento = document.querySelectorAll("p");
console.log(elemento); */
let elemento = document.querySelectorAll("p");
console.log(elemento);

elemento = document.getElementById("texto2");
console.log(elemento)

elemento = document.getElementsByClassName("rojo");
console.log(elemento);

elemento = document.getElementsByTagName("p");
console.log(elemento);

elemento = document.querySelector("p#texto2").textContent;
console.log(elemento);

// escrivir contenido 
document.querySelector("p#texto2").textContent = "nuevo texto";

document.querySelector("#destino").textContent = " hola mundo!!";

// crear elementos 

const element = document.createElement("div");
element.textContent = "soy otro div";
document.querySelector("#destino").appendChild(element);

document.querySelector("#destino").innerHTML += "<div>soy el segundo div</div>";

