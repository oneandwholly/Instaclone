const User = require('../models/user');

exports.getUsers = (req, res, next) => {
  if (req.query.token) {
    return res.json(req.user.id);
  }
  if (req.query.username) {
    const username = req.query.username;
    return User.getOneByUsername(username, (error, user) => {
      return res.json(user);
    })
  }
  next();
}

exports.getOneById = (req, res, next) => {
  const user_id = req.params.id;
  return User.getOneById(user_id, (error, user) => {
    return res.json(user);
  });
  next();
}
