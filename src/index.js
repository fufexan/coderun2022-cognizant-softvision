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
    res.send(result)
  }).catch(error => {
    next(error);
  })
});

app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);

initHeadlineCache();

const server = app.listen(3000, () => {
  console.log(`app running on port ${server.address().port}`);
});
