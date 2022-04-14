const axios = require('axios');

const searchNews = ({ searchText, country = 'ro' }) => {
  const options = {
    timeout: 2000
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
