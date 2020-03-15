const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encondeUrl = encodeURI(dir);
    // console.log(encondeUrl);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: { 'x-rapidapi-key': '005f98411bmsh5449b563d9554a9p17a1c8jsnf2290678e994' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`NO hay resultados para ${dir}`);
    }

    const data = resp.data.Results[1];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}