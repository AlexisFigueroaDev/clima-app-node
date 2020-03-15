const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=422e8b5add34b8d96d3f5cdda476e9d3&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}