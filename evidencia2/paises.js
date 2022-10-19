const axios = require('axios')

const endpoint = "https://restcountries.com/v3.1/all"

let config ={
    method: 'get',
    url: endpoint
}

axios(config)
        .then((response)=>{
           return response.data
        })
        .then((results)=>{
           results.forEach(element => {
                console.log(element.tld)
                console.log('**++**++**++**++**')
           });
        })
        .catch((error)=>{
            console.log(Error(`error: ${error}`))
        })