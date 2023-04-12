const axios = require('axios').default;

const search = async (query) =>
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

module.export = {search} ;