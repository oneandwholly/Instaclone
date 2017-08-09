// CREATE TABLE comments (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     comment_text VARCHAR(255) NOT NULL,
//     user_id INT NOT NULL,
//     photo_id INT NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW(),
//     FOREIGN KEY(user_id) REFERENCES users(id),
//     FOREIGN KEY(photo_id) REFERENCES photos(id)
// );

const db = require('../db.js');

exports.create = ({ comment_text, user_id, photo_id }, done) => {
  const values = [ comment_text, user_id, photo_id ];

  db.get().query('INSERT INTO comments (comment_text, user_id, photo_id) VALUES(?, ?, ?)', values, (err, results) => {
    if (err) { return done(err); }
    // AUTO_INCREMENT gives back insertId
    done(null, results.insertId);
  });

}

exports.getOneById = (comment_id, done) => {
  db.get().query('SELECT * FROM comments WHERE id = ?', comment_id, (err, rows) => {
    if (err) { return done(err); }
    done(null, rows[0]);
  });
}

exports.getCommentsByUserId = (user_id, done) => {
  db.get().query('SELECT * FROM comments WHERE user_id = ? ORDER BY created_at', user_id, (err, rows) => {
    if (err) { return done(err) }
    done(null, rows);
  })
}

exports.getCommentsByPhotoId = (photo_id, done) => {
  db.get().query('SELECT * FROM comments WHERE photo_id = ? ORDER BY created_at', photo_id, (err, rows) => {
    if (err) { return done(err) }
    done(null, rows);
  })
}
