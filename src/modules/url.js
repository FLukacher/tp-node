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

 }
 catch(error){
    
  return {
   error: "URL incorrecta"
  };

 }

}

export  {parsearUrl};