const axios = require('axios');
require('dotenv').config()
const { getHeadlineCache } = require('../cache/headlineCache');

const apiKey = process.env.API_KEY;
const fetchHeadlines = ({ country }) => {
  const options = {
    baseURL: 'https://api.newscatcherapi.com',
    url: `/v2/latest_headlines?countries=${country}`,
    timeout: 2000,
    headers: {
      'x-api-key': apiKey
    }
  };
  const cache = getHeadlineCache();

  return axios(options)
  .then(result => {
    cache.set(country, result.data);
    return Promise.resolve(result.data)
  })
  .catch(error => {
    return Promise.reject(error);
  });
}

module.exports = fetchHeadlines;
