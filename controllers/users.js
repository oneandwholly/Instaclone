exports.getUsers = (req, res, next) => {
  if (req.query.token === 'true') {
    return res.json(req.user);
  }
  next();
}
