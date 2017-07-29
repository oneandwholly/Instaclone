const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.jwt.secret);
}

exports.signup = ({ body: { username, email, password } }, res, next) => {
  if (!username || !email || !password) {
    return res.status(422).send({ error: 'You must provide username, email and password'});
  }

  User.getOneByUsername(username, (err, existingUser) => {
    if (err) { return next(err); }

    // if username exists,
    if (existingUser) {
      return res.status(422).send({ error: "Username is in use"});
    }

    User.getOneByEmail(email, (err, existingUser) => {
      if (err) { return next(err); }

      // if email exists,
      if (existingUser) {
        return res.status(422).send({ error: "Email is in use"});
      }

      // user doesn't exist, so create new one and respond with user info.
      User.create({ username, email, password }, (err, insertId) => {
        if (err) { return next(err); }

        User.getOneById(insertId, (err, existingUser) => {
          if (err) { return next(err); }
          res.json({ token: tokenForUser(existingUser) });
        });
      });
    });
  });

}


exports.login = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
}
