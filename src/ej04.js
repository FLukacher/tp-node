const fs = require("fs");

function copiar(origen, destino){

 fs.readFile(origen,"utf8",(error,data)=>{

  if(error){
   console.log(error);
   return;
  }

  fs.writeFile(destino,data,(error)=>{

   if(error){
    console.log(error);
    return;
   }

   console.log("Archivo copiado");
  });

 });

}

copiar("./entrada.txt","./salida.txt");