let divcondata = document.querySelector("#div1");

document.querySelector("#btn1"),addEventListener("click", () => {
    console.log(divcondata.dataset);
});

document.querySelector("#btn2"),addEventListener("click", () => {
    console.log(divcondata.dataset.id);
});

document.querySelector("#btn3"),addEventListener("click", () => {
    console.log(divcondata.dataset.precio);
});

document.querySelector("#btn4"),addEventListener("click", () => {
    console.log(divcondata.dataset.nombre);
});

/* document.querySelector("#btnhome").addEventListener("click", (e) => {
    console.log(e.target.dataset.boton);
});

document.querySelector("#btnprods").addEventListener("click", (e) => {
    console.log(e.target.dataset.boton);
});

document.querySelector("#btnenvios").addEventListener("click", (e) => {
    console.log(e.target.dataset.boton);
}); */


document.querySelectorAll(".btnweb").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        console.log(e.target.dataset.boton);
    })
});

