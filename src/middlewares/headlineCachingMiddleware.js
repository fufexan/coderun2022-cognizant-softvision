const { getHeadlineCache } = require('../cache/headlineCache');

module.exports = function headlineCachingMiddleware(req, res, next) {
  const cache = getHeadlineCache();
  const {country} = req.query;

  if (cache.has(country)) {
    //cache hit
    res.send(cache.get(country))
  } else {
    //cache miss
    next();
  }
}
