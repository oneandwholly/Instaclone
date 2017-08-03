const Photo = require('../models/photo');
const aws = require('../services/aws');

exports.upload = function(req, res, next) {
  const img_url = `https://${req.body.bucket}.s3.amazonaws.com/${req.body.key}`;
  const user_id = req.user.id;
  const caption = req.body.caption;

  Photo.create({img_url, user_id, caption}, (err, insertId) => {
    if (err) { return next(err); }
    const resp = JSON.stringify({
      policy: req.body,
      signature: aws.signRequest(req.body)
    });

    res.writeHead(200, {
      'Content-Length': resp.length,
      'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(resp);
  })
}
