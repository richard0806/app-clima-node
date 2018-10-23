const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

let getInfo = async() => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.Lat, coors.Lng);

        return `La Clima en ${ coors.Direccion } es de: ${ temp }`;

    } catch (e) {
        return `No se pudo determincar el clima en: ${ argv.direccion }`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log('Error!!!', e));