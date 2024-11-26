const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send(`<form action="/" method="post">
    <input type="text" name="nombre" placeholder="nombre">
    <input type="text" name="apellido"placeholder="apellido">
    <input type="submit" value="enviar">
</form>`);
});

app.post("/", (req, res) => {
    console.log(req.body);
   res.send("post recibido, gracias")
});

app.listen(PORT, () => {
    console.log(`servidor activo en http://localhost:${PORT}`)
});