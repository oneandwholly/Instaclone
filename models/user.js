const bcrypt = require('bcrypt-nodejs');
var db = require('../db.js');
// CREATE TABLE users (
//   id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
//   username VARCHAR(255) NOT NULL UNIQUE,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   password VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP DEFAULT NOW()
// );

// exports.create = function(userId, text, done) {
//   var values = [userId, text, new Date().toISOString()]
//
//   db.get().query('INSERT INTO comments (user_id, text, date) VALUES(?, ?, ?)', values, function(err, result) {
//     if (err) return done(err)
//     done(null, result.insertId)
//   })
// }
//
// exports.getAll = function(done) {
//   db.get().query('SELECT * FROM comments', function (err, rows) {
//     if (err) return done(err)
//     done(null, rows)
//   })
// }
//
// exports.getAllByUser = function(userId, done) {
//   db.get().query('SELECT * FROM comments WHERE user_id = ?', userId, function (err, rows) {
//     if (err) return done(err)
//     done(null, rows)
//   })
// }



exports.create = ({ username, email, password }, done) => {

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return done(err);

    // hash (encrypt) password with salt
    bcrypt.hash(password, salt, null, (err, hash) => {
      if (err) return done(err);

      // overwrite plain text password w/ encrypted password
      password = hash;

      const values = [username, email, password];

      db.get().query('INSERT INTO users (username, email, password) VALUES(?, ?, ?)', values, (err, results) => {
        console.log('err in User.create', err);
        if (err) return done(err);
        // AUTO_INCREMENT gives back insertId
        done(null, results.insertId);
      });
    });
  });
}
