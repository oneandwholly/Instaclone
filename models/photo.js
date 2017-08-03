// CREATE TABLE photos (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   img_url VARCHAR(255) NOT NULL,
//   user_id INT NOT NULL,
//   caption VARCHAR(255),
//   created_at TIMESTAMP DEFAULT NOW(),
//   FOREIGN KEY(user_id) REFERENCES users(id)
// );

const db = require('../db.js');

exports.create = ({img_url, user_id, caption}, done) => {
  const values = [img_url, user_id, caption];

  db.get().query('INSERT INTO photos (img_url, user_id, caption) VALUES(?, ?, ?)', values, (err, results) => {
    if (err) { return done(err); }
    // AUTO_INCREMENT gives back insertId
    done(null, results.insertId);
  });

}
