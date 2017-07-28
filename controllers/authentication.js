const User = require('../models/user');

exports.signup = ({ body: { username, email, password } }, res, next) => {

  if (!username || !email || !password) {
    return res.status(422).send({ error: 'You must provide username, email and password'});
  }

  User.create({ username, email, password }, (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        const errLength = err.sqlMessage.length;
        if (err.sqlMessage.substring(errLength-9, errLength-1) === 'username')
          res.status(422).send({ error: 'Username is already in use'});
        else if (err.sqlMessage.substring(errLength-6, errLength-1) === 'email')
          res.status(422).send({ error: 'Email is already in use'});
      }

      return next(err);
    }

    res.end(JSON.stringify(results));
  });
}
