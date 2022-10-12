const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"

//funcion para conectar a una api en modo asincrono
function get_data(endpoint , exito , fallo){
    //1.crear el objeto xmlHttp
    const h = new xmlHttpRequest();
    //2. establecer una conexion a la API 
    h.open('GET' , endpoint)
    //3. enviar la request a server(API)
    h.send()
    //4.traer los datos de la response 
    h.onload = function(){
        exito(h.responseText)
    }

}

//funcion callback  exito
function exito(response){
    const tipos = JSON.parse(response).results
    tipos.forEach(element => {
        console.log(`Tipo:${element.name}`)
        console.log('-------------------')
    });
}

function fallo(status){
    console.log(status)
}
//invocar la funcion
get_data(url, exito, fallo)