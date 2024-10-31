let tareas =[];

document.querySelector("#btnAgregar").addEventListener("click",() => {
    cargarTarea();
});

function cargarTarea(){
 let tarea ={
    id: tareas.length,
    tarea: document.querySelector("#tareas").value,
    estado:"pendiente"
 }
// console.log(tarea)
tareas.push(tarea);
localStorage.setItem("tareas", JSON.stringify(tareas));
document.querySelector("#tareas").value = ""
mostrarDatos();
}

function mostrarDatos(){
let tareasLocales = localStorage.getItem("tareas");
tareasLocales = JSON.parse(tareasLocales);
//console.log(tareasLocales);

tareasLocales.forEach((tarea) => {
 //console.log(tarea);
 
})
}