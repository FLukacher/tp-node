function parsearUrl(direccion){

 try{

  let url = new URL(direccion);

  let parametros = {};

  url.searchParams.forEach((valor,clave)=>{
   parametros[clave] = valor;
  });

  return {
   host: url.origin,
   pathname: url.pathname,
   parametros: parametros
  };

 }catch(error){

  console.log("Error:", error.message);

 }

}

let objeto = parsearUrl("url incorrecta");

console.log(objeto);