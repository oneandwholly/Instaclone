const Comment = require('../models/comment');

exports.save = function(req, res, next) {
  const comment_text = req.body.comment_text;
  const user_id = req.user.id;
  const photo_id = req.body.photo_id;

  Comment.create({ comment_text, user_id, photo_id }, (err, insertId) => {
    if (err) { return next(err); }
    res.json({
      insertId
    });
  })
}

exports.getOneById = function(req, res, next) {
  const comment_id = req.params.id;
  return Comment.getOneById(comment_id, (error, comment) => {
    return res.json(comment);
  });
  next();
}

exports.getCommentsByPhotoId = function(req, res, next) {
  const photo_id = req.params.id;
  return Comments.getCommentsByPhotoId(photo_id, (error, comments) => {
    return res.json(comments);
  });
  next();
}
