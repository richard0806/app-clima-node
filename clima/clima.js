const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${ lat }&lon=${ lng }&units=metric&APPID=cbd376d66fe08c6484f21cf005e2abd4`)
    if (resp.status === 400) {
        throw new Error(`No hay resultados para latitud: ${ lat } - longitud: ${ lng}`);
    }
    return resp.data.list[0].main.temp;
}

module.exports = {
    getClima
}