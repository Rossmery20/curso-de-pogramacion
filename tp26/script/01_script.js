/* document.querySelector("#timeout").addEventListener("click", () => {
    console.log(1);
    console.log(2);
    setTimeout(() => {console.log(3)}, 2000);
    console.log(4);
    setTimeout(() => {console.log(5)}, 2000);
    console.log(6);
}) */

    // promesas

   /*  let ejemplo1 = new Promise(() => {});
    console.log(ejemplo1);

    let ejemplo2 = new Promise((resolve, reject) => {resolve("promesa resuelta")});
    console.log(ejemplo2);

    let ejemplo3 = new Promise((resolve, reject) => {reject("promesa incumplida")});
    console.log(ejemplo3); */

   /*  let promesa1 = new Promise((resolve, reject) =>{
        setTimeout(() => {reject("error!!")}, 5000);
    });

    document.querySelector("#promesa1").addEventListener("click", () => {console.log(promesa1)});

    promesa1.then((res) => {console.log(res)}).catch((error) => {console.log(error)}); */

   /*  let num = 5;

    console.log("marca 1");
    let promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            num += 15;
            console.log("suma terminada");
            resolve(num);
        }, 1000)
    });

    promesa2.then((res) => {

    console.log("promesa resuelta");
    console.log(res)

});

     console.log("marca 2");

     console.log(num) */

/* let estado = false;

document.querySelector("#promesa2").addEventListener("click", () => {
    estado = true;
})

let promesa3 = new Promise((res, rej) => {
    setTimeout(() => {
        if(estado){
            res("boton presionado")
        } else{
            rej("boton no presionado")
        }

    }, 5000);
});

promesa3
        .then((res) => {console.log(res)})
        .catch((rej) => {console.log(rej)}) */

        // async await

        let promesa4 = new Promise((res, rej) => {
            setTimeout(() => {res("hola")}, 3000);
        })

        async function saludar() {
            console.log(promesa4);
            console.log("marca1");
            console.log(await promesa4);
            console.log("marca2")
        }

        saludar();

        