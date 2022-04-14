module.exports = function notFoundMiddleware(req, res, next) {
  res.status(404).send('Unhandled route');
}
