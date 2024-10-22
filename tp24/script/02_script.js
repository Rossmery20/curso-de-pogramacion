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

cursos.forEach((curso) => {
    document.querySelector("#cursos").innerHTML += `<div class="curso">
    <h1>${curso.nombre}</h1>
    <span>alumnos:${curso.alumnos.length}</span>
    <span>calificado:${curso.calificado}</span>
    <span>
      <div class="btn">abrir</div>
    </span>
    </div>`
})