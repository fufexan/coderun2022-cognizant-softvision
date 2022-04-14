module.exports = function errorHandlingMiddleware(err, req, res, next) {
  console.log('error: ', err);
  res.status(500).send('hmm... something fishy happened');
}
