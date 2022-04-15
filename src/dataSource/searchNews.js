const axios = require('axios');
require('dotenv').config()

const apiKey = process.env.API_KEY;
const searchNews = ({ searchText, country = 'ro' }) => {
  const options = {
    baseURL: 'https://api.newscatcherapi.com',
    url: `/v2/search?q=${searchText}&countries=${country}`,
    timeout: 2000,
    headers: {
      'x-api-key': apiKey
    }
  };

  return axios(options)
  .then(result => {
    return Promise.resolve(result.data)
  })
  .catch(error => {
    return Promise.reject(error);
  });
}

module.exports = searchNews;
