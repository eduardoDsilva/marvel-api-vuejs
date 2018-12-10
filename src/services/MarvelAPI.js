import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = 'c80eb3fed3a8364ae3ad4e2e9f112ce2\n';

//função em que vamos passo o total de quadrinhos e uma função de callback para recuperar o retorno:

export default {
  getAllComics: (limit, callback) => {
    const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics);
      }
    })
  }
}
