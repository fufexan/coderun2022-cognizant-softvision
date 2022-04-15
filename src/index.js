const express = require('express');
const cors = require('cors');
const { initHeadlineCache } = require('./cache/headlineCache');
const headlineCachingMiddleware = require('./middlewares/headlineCachingMiddleware');
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');

const app = express();

app.use(cors());

app.get('/headlines', headlineCachingMiddleware, (req, res, next) => {
  const fetchData = require('./dataSource/fetchHeadlines');
  fetchData(req.query).then(result => {
    if(result.total_hits > 0) {
      res.send(result)
    } else {
      res.status(404).send(result.status);
    }
  }).catch(error => {
    res.send(error);
  })
});

app.get('/search/:searchText', (req, res) => {
  const searchNews = require('./dataSource/searchNews');
  searchNews(req.params).then(result => {
    res.send(result);
  }).catch(error => {
    res.status(404).send(error);
  })
})

app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);

initHeadlineCache();

const server = app.listen(3000, () => {
  console.log(`app running on port ${server.address().port}`);
});
