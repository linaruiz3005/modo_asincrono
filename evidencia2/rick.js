const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = "https://rickandmortyapi.com/api/episode"

//funcion para conectar a una api en modo asincrono
const get_data = (endpoint , exito , fallo)=>{
    //1.crear el objeto xmlHttp
    const h = new xmlHttpRequest();
    //2. establecer una conexion a la API 
    h.open('GET' , endpoint)
    //3. enviar la request a server(API)
    h.send()
    //4.traer los datos de la response 
    h.onload = () =>{
        if(h.status === 200){
            exito(h.responseText)
        }else{
            fallo(h.status)
        }
    }

}

//funcion callback  exito
const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach(element => {
        console.log(`Tipo:${element.name}`)
        console.log('-------------------')
    });
}

const fallo = (status)=>{
    console.log(status)
}
//invocar la funcion
get_data(url, exito, fallo)