import axios from "axios";

async function obtenerMoneda(pais){

 let respuesta = await axios.get(`https://restcountries.com/v3.1/alpha/${pais}`);

 let monedas = respuesta.data[0].currencies;

 let codigo = Object.keys(monedas)[0];

 return monedas[codigo].name;

}

async function main(){

 let moneda = await obtenerMoneda("AR");

 console.log(moneda);

}

main();