let letrashabilitadas ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
letrashabilitadas = letrashabilitadas.split("")

export const validarFormContacto = async (datos) => {
    let resp = {
        estado: true,
        msg:[]
    }
    
  let nombre = datos.nombre.trim().toLocaleLowerCase().split("");
  
  if(nombre.length === 0){
    resp.estado = false;
    resp.msg.push("ingrese informacion en el campo nombre");
  } 
  nombre.forEach((letra) => {
    let query = letrashabilitadas.findindex((letra) => {
        return letraH === letra;
    })
    if(query === -1){
        resp.estado = false;
        resp.msg.push("CARACTER NO VALIDO REGISTRADO");
    }
  });

return resp;
}