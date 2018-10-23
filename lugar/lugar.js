const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    // Make a request for a user with a given ID
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyAAPw5OcRo821GdA4YJQTBM1TJLRJkqnYI`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }
    let ubic = resp.data.results[0];
    let locations = ubic.geometry.location;

    return {
        Direccion: ubic.formatted_address,
        Lat: locations.lat,
        Lng: locations.lng
    }
}

module.exports = {
    getLugarLatLng
}