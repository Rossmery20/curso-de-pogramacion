document.querySelector("#vertical").addEventListener("click", (e) => {
    document.getElementById("distribucion").style.flexDirection = "column"
});
document.querySelector("#horizontal").addEventListener("click", (e) => {
    document.getElementById("distribucion").style.flexDirection = "row"
})
document.querySelector("#colorrojo").addEventListener("click", () => {
    document.getElementById("color").style.backgroundColor = "red"
})
document.querySelector("#colorverde").addEventListener("click", () => {
    document.getElementById("color").style.backgroundColor = "green"
})
document.querySelector("#textoreducido").addEventListener("click",(e) => {
    document.getElementById("texto").style.fontSize = "10px"
})
document.querySelector("#textoagrandado").addEventListener("click",(e) => {
    document.getElementById("texto").style.fontSize = "22px"
})

document.querySelector("#textocolor").addEventListener("change", (e) => {
    document.getElementById("texto").style.color = e.target.value
})
document.querySelector("#mostrar").addEventListener("click", (e) => {
    document.getElementById("verocultar").style.display = "flex"
})
document.querySelector("#ocultar").addEventListener("click", (e) => {
    document.getElementById("verocultar").style.display = "none"
})