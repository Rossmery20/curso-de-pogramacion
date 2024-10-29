let cursos =[
    {
        id: 1,
        nombre: "programacion web",
        calificado: false,
        notas: [],
        alumnos:[1, 2, 3, 4]
    },
    {
        id: 2,
        nombre: "pensamiento computacion",
        calificado: true,
        notas: [10, 9],
        alumnos:[2, 4]
    },
    {
        id: 3,
        nombre: "sublimacion",
        calificado: false,
        notas: [],
        alumnos:[1, 2 ]
    },
    {
        id: 4,
        nombre: "imprecion 3d",
        calificado: true,
        notas: [10, 9, 5],
        alumnos:[2, 3, 4]
    }
];

let alumnos =[
    {
        id: 1,
        nombre: "ross",
        apellido: "rios",
        dni: 45458741,
        localidad:"tres de febrero",
    },
    {
        id: 2,
        nombre: "isabel",
        apellido: "vila",
        dni: 54127845,
        localidad:"san martin",
    },
    {
        id: 3,
        nombre: "zoe",
        apellido: "tellez",
        dni: 45458741,
        localidad:"devoto",
    },
    {
        id: 4,
        nombre: "enzo",
        apellido: "rios",
        dni: 31002045,
        localidad:"villa ballester",
    },

]

cursos.forEach((curso) => {
    document.querySelector("#cursos").innerHTML += `<div class="curso">
    <h1>${curso.nombre}</h1>
    <span>alumnos:${curso.alumnos.length}</span>
    <span>calificado:${curso.calificado}</span>
    <span>
      <div class="btn" data-id="${curso.id}">abrir</div>
    </span>
    </div>`
});

    document.querySelectorAll(".btn").forEach((boton) => {
    boton.addEventListener("click", (e) => {
       // console.log(e.target.dataset.id);
       mostrarcurso(e.target.dataset.id)
    });
});

function mostrarcurso(id){
    let cursoSeleccionado = cursos.find(curso => curso.id == id);
   // console.log(cursoSeleccionado);
   let alumnosdelcurso = buscaralumnos(cursoSeleccionado.alumnos);
    let htmlDeAlumnos = crearHTMLAlumnos(alumnosdelcurso);
    document.querySelector("#detalles").innerHTML = `<h1>${cursoSeleccionado.nombre}</h1>
    <span>cantidad de alumnos:${cursoSeleccionado.alumnos.length}</span>
    <span>
    <h2>lista de alumnos</h2>
    <div id="listaDeAlumnos">${htmlDeAlumnos}</div>
    </span>`
}
function buscaralumnos(listadealumnos){
    let datos =[];
    listadealumnos.forEach((id) => {
        let query =alumnos.find((alumno) => alumno.id == id);
       // console.log(query);
       datos.push(query);
    });
    return datos;
}

 function crearHTMLAlumnos(alumnosdelcurso){
    let texto = "";
    alumnosdelcurso.forEach((alumno) => {
        texto += `<div>
        <span>nombre: ${alumno.nombre}</span>
        <span>apellido: ${alumno.apellido}</span>
        <span>dni: ${alumno.dni}</span>
        <span>localidad: ${alumno.localidad}</span>
        </div>`;
    })
    return texto;
 }