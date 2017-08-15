const Photo = require('../models/photo');
const aws = require('../services/aws');

exports.upload = function(req, res, next) {
  const img_url = `https://${req.body.bucket}.s3.amazonaws.com/${req.body.key}`;
  const user_id = req.user.id;
  //const caption = req.body.caption;

  Photo.create({img_url, user_id, caption: 'hi'}, (err, insertId) => {
    if (err) { return next(err); }
    const resp = JSON.stringify({
      policy: req.body,
      signature: aws.signRequest(req.body),
      insertId
    });

    res.writeHead(200, {
      'Content-Length': resp.length,
      'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(resp);
  })
}

exports.getOneById = (req, res, next) => {
  const photo_id = req.params.id;
  return Photo.getOneById(photo_id, (error, user) => {
    return res.json(user);
  });
  next();
}

exports.getPhotosByUserId = (req, res, next) => {
  const user_id = req.params.id;
  return Photo.getPhotosByUserId(user_id, (error, photos) => {
    return res.json(photos);
  });
  next();
}
