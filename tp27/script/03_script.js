document.querySelector("#btnchiste").addEventListener("click", () => {
    queryChiste();
})

function queryChiste(){
    fetch("http://www.official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((res) =>{
       // console.log(res);
        mostrarChiste(res);
    })
}

function mostrarChiste(chiste){
  let codigo = `<span>${chiste.setup}</span>
 <span>${chiste.setup}</span>
  <span>${chiste.punchline}</span>
  <hr>
  <span>categoria:${chiste.type}</span> `;
  document.querySelector("#chiste").innerHTML = codigo;
}

queryChiste();

//..........

document.querySelector("#btngatos").addEventListener("click", () => {
    querygatos();
})

function querygatos(gatos){
    fetch("http://catfact.ninja/fact")
    .then((res) => res.json())
    .then((res) =>{
       // console.log(res);
        mostrargatos(res);
    })
}

function mostrargatos(hechos){
  let codigo = `<span>${hechos.fact}</span>
  <span>categoria:${gatos.type}</span> `;
  document.querySelector("#gatos").innerHTML = codigo;
}

querygatos();

//............

document.querySelector("#btnperros").addEventListener("click", () => {
    queryperros();
})

function queryperros(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) =>{
       //console.log(res);
        mostrarperros(res);
    })
}

function mostrarperros(imagen){
  let codigo = `<img src="${imagen.message}"> `;
  document.querySelector("#perros").innerHTML = codigo;
}

queryperros();

//----------------

document.querySelector("#btnedad").addEventListener("click", () => {
    let nombre =document.querySelector("#nombre").value
    if(nombre === ""){
        window.alert("ingresa un nombre para calcular tu edad");
        return;
    }
    queryedad(nombre);
})

function queryedad(nombre){
    fetch(`https://api.agify.io?name=${nombre}&country_id=AR`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        mostraredad(res)
    });
}
  function mostraredad(edad){
    let codigo = `<span>edad estimada: ${edad.age}</span>`;
    document.querySelector("#edad").innerHTML = codigo
  }