exports.signup = (req, res, next) => {
  res.end(JSON.stringify(req.body));
}
