let tareas =[];

document.querySelector("#btnAgregar").addEventListener("click",() => {
    cargarTarea();
});

function cargarTarea(){
  if(document.querySelector("#tareas").value == ""){
   window.alert("ingrese un nombre de tarea para registrar");
    return;
  }
 let tarea ={
    id: tareas.length,
    tarea: document.querySelector("#tareas").value,
    estado:"pendiente"
 }
// console.log(tarea)
tareas.push(tarea);
localStorage.setItem("tareas", JSON.stringify(tareas));
document.querySelector("#tareas").value = "";
mostrarDatos();
}

function mostrarDatos(){
let tareasLocales = localStorage.getItem("tareas");
//console.log(tareasLocales);
tareasLocales = JSON.parse(tareasLocales) || [];
//console.log(tareasLocales)
tareas = tareasLocales
//console.log(tareasLocales);

document.querySelector("tbody").innerHTML = "";

tareasLocales.forEach((tarea) => {
  if(tarea.estado === "eliminada"){
    return;
  }
 //console.log(tarea);
 document.querySelector("tbody").innerHTML +=
  `<tr>
  <td>${tarea.id}</td>
  <td>${tarea.tarea}</td>
  <td>${estado()}</td>
  <td>
   <div class="btn btnEditar" data-id="${tarea.id}">editar</div>
   <div class="btn btnBorrar" data-id="${tarea.id}">borrar</div>
  </td>
  </tr>`;

  function estado(){
    if(tarea.estado === "pendiente"){
      return ` <div class="btn btnpendiente" data-id="${tarea.id}">pendiente</div>`;
    }else{
      return` <div class="btn btncompletado" data-id="${tarea.id}">completado</div>`;
    }
  }
});

//event listeners
document.querySelectorAll(".btnpendiente").forEach((boton) => {
boton.addEventListener("click", (e) => {
  //console.log("boton pendiente");
  //console.log(e.target.dataset.id);
  //console.log(tareas[e.target.dataset.id])
  tareas[e.target.dataset.id].estado = "completa";
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarDatos();
})
});
document.querySelectorAll(".btncompletado").forEach((boton) => {
  boton.addEventListener("click", (e) => {
    //console.log("boton pendiente");
    //console.log(e.target.dataset.id);
    //console.log(tareas[e.target.dataset.id])
    tareas[e.target.dataset.id].estado = "pendiente";
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarDatos();
  })
  });
  document.querySelectorAll(".btnBorrar").forEach((boton) => {
    boton.addEventListener("click", (e) => {
      tareas[e.target.dataset.id].estado = "eliminada";
      localStorage.setItem("tareas", JSON.stringify(tareas));
      mostrarDatos();
    })
    });
    document.querySelectorAll(".btnEditar").forEach((boton) => {
      boton.addEventListener("click", (e) => {
      modificartarea(e.target.dataset.id);
      })
      });
}

mostrarDatos();

function modificartarea(id){
  document.querySelector("#cortina").style.display = "flex";
  document.querySelector("#modificarid").value = tareas[id].id;
  document.querySelector("#modificartarea").value = tareas[id].tarea;
  document.querySelector("#modificarestado").value = tareas[id].estado;
}

document.querySelector("#btncanselarmodificartarea").addEventListener("click", () => {
  document.querySelector("#cortina").style.display = "none";
})

document.querySelector("#btnmodificartarea").addEventListener("click", () => {
  let id = document.querySelector("#modificarid").value;
  tareas[id].tarea =document.querySelector("#modificartarea").value
  tareas[id].estado =document.querySelector("#modificarestado").value
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarDatos();
  document.querySelector("#cortina").style.display = "none";
})