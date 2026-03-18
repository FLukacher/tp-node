
import fs from "fs";

function copiar(origen, destino){

    fs.readFile(origen, "utf8", (error, data)=>{

        fs.writeFile(destino, data, (error)=>{

            console.log("Archivo copiado correctamente");

        });

    });

}


export {copiar}